"use client";

import React from "react";
import { motion } from "motion/react";

const WhileInView = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    
  return (
    <div className="overflow-auto h-68 w-full flex flex-col justify-between p-6 bg-black text-white">
      <div ref={containerRef}>
        <h1 className="h-screen text-2xl text-white text-center">
          Scroll down :)
        </h1>

        <motion.ul
          variants={{
            inView: {
              transition: {
                staggerChildren: 0.1,
              },
            },
            outOfView: {
              transition: { staggerChildren: 0.1, staggerDirection: -1 },
            },
          }}
          whileInView="inView"
          initial="outOfView"
          animate="outView"
          // Use the existing containerRef (the immediate parent scroll container)
          viewport={{ root: containerRef, amount: 0.5 }}
          
          className="flex gap-2 border-2 border-amber-300 py-20"
        >
          {Array.from({ length: 6 }, () => []).map((_, index) => (
            <motion.li
              variants={{
                inView: {
                  opacity: 1,
                  x: 0,
                },
                outOfView: {
                  opacity: 0,
                  x: -30,
                },
              }}
              key={index}
              className="w-24 h-24 bg-white rounded-2xl"
            ></motion.li>
          ))}
        </motion.ul>

        <h1 className="h-screen text-2xl text-white text-center">The End :)</h1>
      </div>
    </div>
  );
};

export default WhileInView;