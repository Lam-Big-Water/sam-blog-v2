
"use client";
import React from "react";
import { motion } from "motion/react";

const ResponsiveDrawer = () => {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <div className="flex h-full w-full flex-row items-center justify-center p-6 bg-black text-white">
      <button
        onClick={() => setIsOpened(!isOpened)}
        className="mb-4 rounded-sm bg-pink-500 p-4 text-white hover:bg-pink-400"
      >
        toggle
      </button>
      <motion.div
        variants={{
          opened: {
            opacity: 1,
            "--x": "0%",
            "--y": "0%",
          },
          closed: {
            opacity: 0,
            "--x": "-100%",
            "--y": "100%",
          },
        }}
        className="fixed bottom-0 left-[5%] flex max-h-[90%] w-[90%] flex-col gap-2 overflow-auto rounded-tr-2xl bg-white p-5 max-sm:translate-y-[var(--y)] max-sm:rounded-tl-2xl md:left-0 md:max-w-[500px] md:translate-x-[var(--x)]"
        initial="closed"
        animate={isOpened ? "opened" : "closed"}
      >
        <div className="h-26 w-[90%] rounded-2xl bg-gray-400"></div>
        <div className="h-10 w-[70%] rounded-2xl bg-gray-400"></div>
        <div className="h-6 w-[50%] rounded-2xl bg-gray-400"></div>
        <div className="h-6 w-[50%] rounded-2xl bg-gray-400"></div>
        <div className="h-6 w-[50%] rounded-2xl bg-gray-400"></div>
      </motion.div>
    </div>
  );
};

export default ResponsiveDrawer;
