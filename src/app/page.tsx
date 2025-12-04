import React from "react";
import Card from "./_components/card";

const Home = () => {
  return (
    <div className="relative w-full h-screen flex justify-center p-8 text-amber-50 font-medium">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-2xl font-black">Latest Content:</h2>
        <Card />
      </div>
    </div>
  );
};

export default Home;
