const fs = require("fs");
const path = require("path");

// Path to your settings.json file
const settingsDirectoryPath = "./.vscode";
const settingsFilePath = path.join(settingsDirectoryPath, "settings.json");
const tasksFilePath = path.join(settingsDirectoryPath, "tasks.json");

// Ensure .vscode directory exists
if (!fs.existsSync(settingsDirectoryPath)) {
    fs.mkdirSync(settingsDirectoryPath);
}

// Ensure settings.json file exists
let settings = {};
if (fs.existsSync(settingsFilePath)) {
    settings = JSON.parse(fs.readFileSync(settingsFilePath, "utf8"));
} else {
    fs.writeFileSync(settingsFilePath, JSON.stringify(settings));
}

// Ensure a file named "root" exists
const rootFileName = "./root";
if (!fs.existsSync(rootFileName)) {
    fs.writeFileSync(rootFileName, "");
}

// Ensure that the "explorer.fileNesting.enabled" is set to true
if (!settings["explorer.fileNesting.enabled"]) {
    settings["explorer.fileNesting.enabled"] = true;
}

// Ensure that the "explorer.fileNesting.expand" is set to false, unless it already exists and is true
if (settings["explorer.fileNesting.expand"] !== true) {
    settings["explorer.fileNesting.expand"] = false;
}

// Ensure that the "explorer.fileNesting.patterns" object and "root" key exist
if (!settings["explorer.fileNesting.patterns"]) {
    settings["explorer.fileNesting.patterns"] = {};
}
if (!settings["explorer.fileNesting.patterns"]["root"]) {
    settings["explorer.fileNesting.patterns"]["root"] = "";
}

// Read all files in the root directory
const rootFiles = fs.readdirSync("./");

// Filter out directories and 'root' file, if any
const rootFileNames = rootFiles.filter(
    (file) => fs.lstatSync(file).isFile() && file !== "root",
);

// Construct the value for the "root" key
const rootGroupValue = rootFileNames.join(", ");

// Update the "root" key in the settings object
settings["explorer.fileNesting.patterns"]["root"] = rootGroupValue;

// Write settings back to the settings.json file
fs.writeFileSync(settingsFilePath, JSON.stringify(settings, null, 2));

// Check if tasks.json file exists, if not create it
let tasks = { version: "2.0.0", tasks: [] };
if (fs.existsSync(tasksFilePath)) {
    tasks = JSON.parse(fs.readFileSync(tasksFilePath, "utf8"));
}

// Add the "Group Root" task to the tasks.json file
const groupRootTask = {
    label: "Group Root",
    type: "shell",
    command: "node rootGrouper.js",
    problemMatcher: [],
};

// Check if a task with label "Group Root" already exists
const taskExists = tasks.tasks.some((task) => task.label === "Group Root");

// If task does not exist, add it
if (!taskExists) {
    tasks.tasks.push(groupRootTask);
}

// Write tasks back to the tasks.json file
fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
