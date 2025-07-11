const fs = require("fs");
const path = require("path");

const targetExtensions = [".js", ".jsx"];
const consoleRegex = /^\s*(?!\/\/)\s*console\.log\(.*\);?/;

function commentConsoleInFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n");

  let changed = false;
  const newLines = lines.map((line) => {
    if (consoleRegex.test(line)) {
      changed = true;
      return "// " + line;
    }
    return line;
  });

  if (changed) {
    fs.writeFileSync(filePath, newLines.join("\n"), "utf8");
    console.log(`✔ Commented console.log in: ${filePath}`);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDirectory(fullPath);
    } else if (
      stat.isFile() &&
      targetExtensions.includes(path.extname(fullPath))
    ) {
      commentConsoleInFile(fullPath);
    }
  });
}

// Start from current directory (or change to 'src' if you want)
walkDirectory(path.resolve(__dirname, "src")); // or "." to scan everything
