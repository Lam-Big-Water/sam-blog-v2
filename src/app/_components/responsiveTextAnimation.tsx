"use client";
import React from "react";
import { motion } from "motion/react";

const ResponsiveTextAnimation = () => {
  return (
        <div className="flex h-full w-full flex-row items-center justify-center p-6 bg-black text-white">
      <div className="flex w-[150px] flex-col overflow-hidden rounded-2xl bg-pink-600 p-2 relative aspect-2/4">
        <div className="h-full fadeout">
          <motion.div
          animate={{
            opacity: [0, 1, 1, 1, 1, 1, 0], 
            scaleX: [1.5, 1.5, 2.5, 2.5, 2.5, 1.5, 1.5],
            scaleY: [0.75, 0.75, 0.75, 1.5, 1.5, 1.5, 8],
          }}
          transition={{repeat: Infinity, repeatDelay: 1, times: [0, 0.05, 0.2, 0.3, 0.45, 0.7, 1], duration: 18}}
          className="text-[80px] font-family:monospace text-white leading-[0.8] inset-1 absolute break-all">
            responsive
          </motion.div>
        </div>
        <p className="mt-auto p-2 text-gray-200">Make your animations work on all devices</p>
      </div>
    </div>
  );
};

export default ResponsiveTextAnimation;
