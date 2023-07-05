const fs = require('fs');
const path = require('path');

let fileCount = 0; // We'll increment this each time we update a file

const dirPath = path.join(__dirname, 'src', 'app'); // Change this if your path differs

const traverseDirAndUpdateFiles = (dir) => {
  const files = fs.readdirSync(dir);

  for (let file of files) {
    const filePath = path.join(dir, file);
    const relativePath = path.relative(__dirname, filePath);
    const newPathComment = `//path: ${relativePath}`;

    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      traverseDirAndUpdateFiles(filePath);
    } else if (relativePath.endsWith('.ts') || relativePath.endsWith('.tsx')) {
      let content = fs.readFileSync(filePath, 'utf8');

      // Remove any existing path comment
      if (content.startsWith('//path: ')) {
        content = content.replace(/^\/\/path: .*\n\n/, '');
      }

      // Add the new path comment
      content = `${newPathComment}\n\n` + content;

      fs.writeFileSync(filePath, content, 'utf8');
      fileCount++; // Increment the count of updated files
    }
  }
};

traverseDirAndUpdateFiles(dirPath);

console.log(`Updated ${fileCount} files`);