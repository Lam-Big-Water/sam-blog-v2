import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { loadBlogPost } from "@/helper/file-helper";
import BlogHero from "../_components/postHero";
import { BLOG_TITLE } from "../constants";
import CodeSnippet from "@/utils/codeSnippet";
interface ParamsPropsType {
  params: Promise<{
    postSlug: string;
  }>;
}

export async function generateMetadata({ params }: ParamsPropsType) {
  const { postSlug } = await params;

  const { frontmatter } = await loadBlogPost(postSlug);

  return {
    title: `${frontmatter.title} ● ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
}

const BlogPost = async ({ params }: ParamsPropsType) => {
  const { postSlug } = await params;
  const { frontmatter, content } = await loadBlogPost(postSlug);
  return (
    <article className="max-w-220 w-full m-auto px-4">
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />

      <div className="text-lg font-medium text-amber-50">
        <MDXRemote source={content} components={{pre: CodeSnippet}}/>
      </div>
    </article>
  );
};

export default BlogPost;
