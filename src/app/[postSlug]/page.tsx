import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { loadBlogPost } from "@/helper/file-helper";
import BlogHero from "../_components/postHero";
import { BLOG_TITLE } from "../constants";
import COMPONENT_MAP from "@/helper/mdx-components";
import { notFound } from "next/navigation";

interface ParamsPropsType {
  params: Promise<{
    postSlug: string;
  }>;
}

export async function generateMetadata({ params }: ParamsPropsType) {
  const { postSlug } = await params;

  const blogPostData = await loadBlogPost(postSlug);

  if (!blogPostData) {
    return null;
  }

  const { frontmatter } = blogPostData;

  return {
    title: `${frontmatter.title} ● ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
}

const BlogPost = async ({ params }: ParamsPropsType) => {
  const { postSlug } = await params;
  const blogPostData = await loadBlogPost(postSlug);

  if (!blogPostData) {
    notFound();
  }

  const { frontmatter, content } = blogPostData;
  return (
    <article className="relative z-10 pb-16">
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />

      <div className="page">
        <MDXRemote source={content} components={COMPONENT_MAP}/>
      </div>
    </article>
  );
};

export default BlogPost;
