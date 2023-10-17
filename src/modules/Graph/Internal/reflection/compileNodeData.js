const fs = require("fs");
const path = require("path");
const prettier = require("prettier");
const REGEX_PATTERN = /const reflect_nodeData = ([\s\S]*?);/;
const FILE_EXTENSIONS = [".ts", ".tsx"];
const OUTPUT_FILE_NAME = "allNodeData.tsx";

let fileCount = 0;
let allNodeData = "";

const dirPath = path.resolve(process.cwd(), "src");
const outputPath = __dirname;
const outputFilePath = path.join(outputPath, OUTPUT_FILE_NAME);

const extractNodeData = (content) => {
    const match = content.match(REGEX_PATTERN);
    if (match && match[1]) {
        allNodeData += `  ${match[1]},\n`;
    }
};

const traverseDirAndUpdateFiles = (dir) => {
    const files = fs.readdirSync(dir);

    for (let file of files) {
        const filePath = path.join(dir, file);
        const relativePath = path.relative(__dirname, filePath);

        if (filePath === outputFilePath) continue;

        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            traverseDirAndUpdateFiles(filePath);
        } else if (FILE_EXTENSIONS.some((ext) => relativePath.endsWith(ext))) {
            let content = fs.readFileSync(filePath, "utf8");
            extractNodeData(content);
            fileCount++;
        }
    }
};
traverseDirAndUpdateFiles(dirPath);

const formatAndWriteFile = async () => {
    const generatedFileContent = `export const allNodeData = [\n${allNodeData}\n];\n`;
    const formattedContent = await prettier.format(generatedFileContent, {
        parser: "typescript",
        tabWidth: 4,
    });

    fs.writeFileSync(outputFilePath, formattedContent, "utf8");

    console.log(
        `Extracted ${fileCount} nodeData. Compiled allNodeData to ${outputFilePath}`,
    );
};

formatAndWriteFile();
