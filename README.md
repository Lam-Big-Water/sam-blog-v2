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

3. load blog post & Optimize performance
```ts
export interface BlogPostContent {
  frontmatter: BlogPostFrontMatter;
  content: string;
}

// React.cache() Wrapper -  memoizes/caches the results of async functions
// It prevents duplicate fetches/reads for the same slug during a render - in RSC

export const loadBlogPost = React.cache(async function loadBlogPost(
  slug: string
): Promise<BlogPostContent> {
  const rawContent = await readFile(`/content/${slug}.mdx`);

// data: Extracts the YAML frontmatter section (metadata)
// content: Extracts the actual Markdown content (after the frontmatter)
  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter: frontmatter as BlogPostFrontMatter, content };
});


// returns
{
  frontmatter: {
    title: "Welcome to My Blog",
    abstract: "An introduction to this blog",
    publishedOn: "2024-01-01",
    author: "John Doe"  // Extra property allowed by [key: string]: unknown
  },
  content: "# Welcome!\n\nThis is my first blog post content...\n\n## Subheading\n\nMore content here."
}

```

4. How to displaying MDX

- crate dynamic route
```
src/app/[postSlug]
```

- get route params
```tsx
interface ParamsPropsType {
    params: Promise<{
        postSlug: string;
    }>
}

const BlogPost = async ({params}: ParamsPropsType) => {
    const {postSlug} = await params;

  return (
    <div>BlogPost</div>
  )
}

export default BlogPost
```

- use postSlug render corresponding post
```tsx
const BlogPost = async ({ params }: ParamsPropsType) => {
  const { postSlug } = await params;
    const {frontmatter, content} = await loadBlogPost(postSlug);
  return (
    <article className="max-w-220 w-full m-auto px-4">
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />

        <div className="text-lg font-medium  ">
            <MDXRemote source={content} />
        </div>
    </article>
  );
};

export default BlogPost;

```

5. Adding metadata

- create basic site info
```ts
export const BLOG_TITLE = 'Front & Fun';
```

- generateMetadata
```tsx
import { BLOG_TITLE } from '@/constants';
// generateMetadata is a Next.js special function. It automatically generates metadata for the page (for SEO, social sharing, etc.)
export async function generateMetadata({ params }: ParamsPropsType) {
  const { postSlug } = await params;

  const { frontmatter } = await loadBlogPost(postSlug);

  return {
    title: `${frontmatter.title} ● ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
}
```

6. Code snippets

- use lib `bright`
```tsx
import React from 'react'
import { Code } from 'bright'
import theme from './theme'

const CodeSnippet = (props: React.ComponentProps<typeof Code>) => {
  return (
    <Code 
    {...props}
    theme={theme}
    />
  )
}

export default CodeSnippet
```
```tsx
  <MDXRemote source={content} components={{pre:CodeSnippet}}/>
```

7. Rendering embedded components

- create mdx-components
```ts
// mdx-components.ts
import CodeSnippet from "@/utils/codeSnippet";
import PasswordToggle from "@/app/_components/inputTest";
// Creates a component mapping object:
// pre: Overrides the default <pre> tag with a custom component
const COMPONENT_MAP = {
    pre: CodeSnippet,
    PasswordToggle,
}

export default COMPONENT_MAP;
```

```tsx
import COMPONENT_MAP from '@/helpers/mdx-components';
```

8. 404 Page

- create not-fount
```tsx
import React from 'react';

import { BLOG_TITLE } from './constants';

export const metadata = {
    title: `404 Not found ● ${BLOG_TITLE}`
};

function NotFound () {
    return (
        <div className='pt-24 text-center  '>
            <h1 className='mb-[1em]'>404 Not Found</h1>

            <p>This page does not exits. Please check the URL and Try again.</p>
        </div>
    )
}

export default NotFound;
```
- handle error
```tsx
try {
    rawContent = await readFile(`/content/${slug}.mdx`);

  } catch (err) {
    return null;
  }

```

- navigation notFound
```tsx
import { notFound } from "next/navigation";

  if (!blogPostData) {
    notFound();
  }
```

9. dark mode

- custom color
```css
:root {
  /* 文本 */
  --color-text: hsl(0deg 0% 5%);
}

.dark {
    --color-text: hsl(0deg 0% 100%);
}

@theme {
  --color-text: var(--color-text);
}
```

- toggle logic
```html
<html class="dark & "></html>
```

- control & stroy the theme value

```tsx
// stroy
import Cookie from "js-cookie";

// control
function handleClick () {
    
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);

    Cookie.set(COLOR_THEME_COOKIE_NAME, nextTheme, {
      expires: 1000,
    });

    const root = document.documentElement;
    root.classList.remove(theme);
    root.classList.add(nextTheme);
  }

// toggle
  const [theme, setTheme] = React.useState(initialTheme);

  <button onClick={handleClick} className="bg-transparent w-12 h-12 flex justify-center items-center rounded-full cursor-pointer transition-colors duration-200 hover:bg-black">
          {theme === "light" ? <Sun /> : <Moon />}
  </button>

// use cookie value
import {cookies} from "next/headers";

  const savedTheme = (await cookies()).get(
    COLOR_THEME_COOKIE_NAME
  );

// Map the corresponding color
```