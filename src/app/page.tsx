import React from "react";
import Card from "./_components/card";
import {getBlogPostsList} from '@/helper/file-helper';

const Home = async () => {
  const postsList = await getBlogPostsList();
  return (
    <div className="w-full max-w-220 py-16 px-8 mx-auto flex flex-col items-center font-medium">
      <div className="flex flex-col items-center gap-6">
        <h1 className="">Latest Content:</h1>
        {postsList.map(({slug, ...delegated}) => (
          <Card key={slug} slug={slug} {...delegated}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
