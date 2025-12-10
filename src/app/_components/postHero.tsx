import React from "react";

interface PostType {
  title: string;
  publishedOn: string;
}

const BlogHero = ({ title, publishedOn }: PostType) => {
  return (
    <header className="relative flex flex-col justify-end items-center w-full max-w-7xl m-auto">
      <div className="relative max-w-[880px] w-full m-auto p-4 pt-[calc(48px+8vw)] pb-16">
        <h1 className="text-4xl font-black py-4">{title}</h1>
        <p className="text-lg text-decorative-900 mb-0">
          <time className="font-medium" dateTime={publishedOn}>
            Published on {publishedOn}
          </time>
        </p>
      </div>
    </header>
  );
};

export default BlogHero;
