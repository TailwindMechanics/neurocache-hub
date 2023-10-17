const fs = require("fs");
const path = require("path");

let fileCount = 0; // We'll increment this each time we update a file

const dirPath = path.join(__dirname, "src"); // Change this if your path differs

const traverseDirAndUpdateFiles = (dir) => {
    const files = fs.readdirSync(dir);

    for (let file of files) {
        const filePath = path.join(dir, file);
        const relativePath = path.relative(__dirname, filePath);
        const newPathComment = `//path: ${relativePath}`;

        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            traverseDirAndUpdateFiles(filePath);
        } else if (
            relativePath.endsWith(".ts") ||
            relativePath.endsWith(".tsx")
        ) {
            let content = fs.readFileSync(filePath, "utf8");

            // Check if the file has a path comment anywhere in it
            const pathCommentIndex = content.indexOf("//path: ");
            if (pathCommentIndex !== -1) {
                // Find the start of the line with the path comment
                const lineStart =
                    content.lastIndexOf("\n", pathCommentIndex) + 1;

                // Find the end of the line with the path comment
                const lineEnd = content.indexOf("\n", pathCommentIndex);

                // Remove the line with the path comment
                content =
                    content.substring(0, lineStart) +
                    content.substring(lineEnd + 1);
            }

            // Remove any leading empty lines or whitespace
            content = content.replace(/^\s*\n*/, "");

            // Add the new path comment
            content = `${newPathComment}\n\n` + content;

            fs.writeFileSync(filePath, content, "utf8");
            fileCount++; // Increment the count of updated files
        }
    }
};

traverseDirAndUpdateFiles(dirPath);

console.log(`Updated ${fileCount} files`);
