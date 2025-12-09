# MDX blog

1. How list of posts?

- How to find the file & how read the file content? use the `fs, path`
```ts
import fs from "fs/promises";  // Promise-based file system operations
import path from "path";       // Path manipulation utilities

// Reads the contents of a file as a UTF-8 encoded string.
function readFile(localPath: string): Promise<string> {
  // 1. path.join(process.cwd(), localPath)
  //    - process.cwd() = current working directory
  //    - Joins it with the provided relative path
  //    - Creates an absolute path
  
  // 2. fs.readFile(absolutePath, "utf-8")
  //    - Reads the file asynchronously
  //    - Returns a Promise<string> with file content
  return fs.readFile(path.join(process.cwd(), localPath), "utf-8");
}

// Reads: /current/working/directory/data.txt
const content = await readFile("data.txt");

// ---

// Lists all files and directories in a specified folder.
function readDirectory(localPath: string): Promise<string[]> {
  // 1. path.join(process.cwd(), localPath)
  //    - Same path resolution as readFile
  
  // 2. fs.readdir(absolutePath)
  //    - Returns array of filenames/directory names
  return fs.readdir(path.join(process.cwd(), localPath));
}

// Lists all items in: /current/working/directory/src
const items = await readDirectory("src");
```

