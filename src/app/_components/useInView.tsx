"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";

const UseInView = () => {
  const elementRef = useRef(null);
  const isInView = useInView(elementRef);

  useEffect(() => {
    if (isInView) {
      console.log("Element is in view");
    } else {
      console.log("Element is not in view");
    }
  }, [isInView]);

  return (
    <div className="bg-black flex flex-col gap-8 justify-between items-center p-4">
      <div className="w-64 text-2xl text-white bg-blue-200/80 -rotate-3 p-4">
        <h1 className="text-4xl">
          That beautiful cabin on that idyllic lake..
        </h1>
        <p className="leading-[1.6]">
          Last summer, I escaped to a remote cabin nestled along the serene
          shores of a hidden fjord. Each morning, I woke up to the soft glow of
          dawn, painting the sky in pastel hues of pink and orange, interior and
          rustic charm, was the perfect retreat from the hustle reflecting off
          the tranquil water. The red cabin, with its cozy and bustle of
          everyday life. Surrounded by towering mountains and the gentle sound
          of lapping waves, I spent my days exploring the rugged landscape and
          evenings curled up with a good book by the fire. It was a slice of
          paradise, a place where time seemed to stand still, allowing me to
          savor each peaceful moment.
        </p>
      </div>
      <div className="">
        <motion.img
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          animate={isInView ? "visible" : "hidden"}
          ref={elementRef}
          className="w-32"
          src="https://cdn.midjourney.com/2e5b80cc-6eb8-46ce-bddc-c25d7e48e593/0_0.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default UseInView;
