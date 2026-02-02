"use client";
import React from "react";
import { motion, useScroll } from "motion/react";

const ScrollProgress = () => {
  return (
    <div className="bg-black relative w-64 h-full m-auto">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

const Item = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  return (
    <section className="h-screen max-h-[400px] flex justify-center items-center">
      <div
        ref={ref}
        className="relative w-[200px] h-[250px] border-2 border-dotted border-pink-500"
      >
        <div className="sticky top-0 -translate-x-20 ">
          <svg style={{stroke: "#ff0088",}} width="75" height="75" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="bg-pink-400 opacity-20"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              style={{
                strokeDashoffset: 0,
                strokeWidth: 5,
                fill: "none",
                pathLength: scrollYProgress,
              }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ScrollProgress;
