import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, "..");
const extensions = [".js", ".jsx"];
const regex = /^\s*\/\/\s*console\.log\(.*\);?/;

function processFile(filePath) {
  const lines = fs.readFileSync(filePath, "utf-8").split("\n");
  let modified = false;

  const newLines = lines.map((line) => {
    if (regex.test(line)) {
      modified = true;
      return line.replace(/^\s*\/\/\s*/, "");
    }
    return line;
  });

  if (modified) {
    fs.writeFileSync(filePath, newLines.join("\n"), "utf-8");
    console.log("✔ Un-commented:", filePath);
  }
}

function walkDir(dirPath) {
  const entries = fs.readdirSync(dirPath);
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) walkDir(fullPath);
    else if (stat.isFile() && extensions.includes(path.extname(fullPath))) {
      processFile(fullPath);
    }
  }
}

walkDir(ROOT);
