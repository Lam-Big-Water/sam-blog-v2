import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import React from "react";

export interface BlogPost {
  slug: string;
  title: string;
  abstract: string;
  publishedOn: string;
  [key: string]: unknown;
}

export interface BlogPostFrontMatter {
  title: string;
  abstract: string;
  publishedOn: string;
  [key: string]: unknown;
}

export interface BlogPostContent {
  frontmatter: BlogPostFrontMatter;
  content: string;
}

function readDirectory(localPath: string): Promise<string[]> {
  return fs.readdir(path.join(process.cwd(), localPath));
}

function readFile(localPath: string): Promise<string> {
  return fs.readFile(path.join(process.cwd(), localPath), "utf-8");
}

export async function getBlogPostsList(): Promise<BlogPost[]> {
  const fileNames = await readDirectory("/content");

  const blogPosts: BlogPost[] = [];

  for (const fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace(".mdx", ""),
      ...(frontmatter as BlogPostFrontMatter),
    });
  }

  return blogPosts.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
}

export const loadBlogPost = React.cache(async function loadBlogPost(
  slug: string
): Promise<BlogPostContent | null> {

  let rawContent;

  try {
    rawContent = await readFile(`/content/${slug}.mdx`);

  } catch (err) {
    return null;
  }

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter: frontmatter as BlogPostFrontMatter, content };
});
