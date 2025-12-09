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

2. Read & process each file
```ts
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  abstract: string;
  publishedOn: string;
  [key: string]: unknown;
}

export interface BlogPostFrontMatter {
  title: string; // URL-friendly identifier (from filename)
  abstract: string;
  publishedOn: string;
  [key: string]: unknown;
}

export async function getBlogPostsList(): Promise<BlogPost[]> {
// Step 1: Read directory contents
// Reads all files from /content directory (relative to project root)
  const fileNames = await readDirectory("/content");

  const blogPosts: BlogPost[] = [];
// Step 2: Process each MDX file
// For each file, reads the full content
  for (const fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);
// matter() (from gray-matter library) extracts frontmatter
    const { data: frontmatter } = matter(rawContent);
// Step 3: Create BlogPost object
    blogPosts.push({
      slug: fileName.replace(".mdx", ""), // "my-first-post.mdx" → "my-first-pos
      // Spread frontmatter properties
      ...frontmatter as BlogPostFrontMatter, // Type assertion
    });
  }
// Step 4: Sort by publication date
  return blogPosts.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1)); // Sorts in descending order (newest first)
}

```