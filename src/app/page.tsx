import React from "react";
import Card from "./_components/card";

const Home = () => {
  return (
    <div className="w-full max-w-220 py-16 px-8 m-auto flex flex-col items-center text-amber-50 font-medium">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-2xl font-black mt-4 mb-4">Latest Content:</h2>
        <Card slug="example" title="Understanding the JavaScript Modulo Operator" abstract="One of the most commonly-misunderstood operators is Modulo (%). In this
        tutorial, we will unpack exactly what this little bugger does, and learn
        how it can help us solve practical problems." publishedOn="2025-12-21"/>
      </div>
    </div>
  );
};

export default Home;
