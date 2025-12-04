import React from "react";

const Card = () => {
  return (
    <div className="p-4 border bg-black">
      <h3 className="text-3xl font-bold text-amber-50 py-2">
        <a href="#">Understanding the JavaScript Modulo Operator</a>
      </h3>
      <small className="text-purple-300 font-bold text-lg py-2">September 7th, 2023</small>
      <p className="text-amber-50 font-bold py-2">
        One of the most commonly-misunderstood operators is Modulo (%). In this
        tutorial, we will unpack exactly what this little bugger does, and learn
        how it can help us solve practical problems. <a className="underline decoration-amber-300" href="#">Continue reading →</a>
      </p>
    </div>
  );
};

export default Card;
