"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";

const Variants = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="min-h-68 flex h-full flex-col items-center justify-center gap-4 bg-black">
      <AnimatePresence initial={false}>
        {toggle && (
          <motion.div
            variants={{
              open: {
                opacity: 1,
                y: 0,
              },
              closed: {
                opacity: 0,
                y: 20,
              },
            }}
            initial="closed"
            animate="open"
            exit="closed"
            className="flex h-26 w-32 items-center justify-center rounded-sm bg-white"
          >
            <div className="h-18 w-26 bg-gray-400"></div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setToggle(!toggle)}
        className="rounded bg-gray-400/20 p-2 text-white hover:bg-gray-400/30"
      >
        Toggle visibility
      </button>
    </div>
  );
};

export default Variants;
