"use client"

import React from "react";
import { motion, AnimatePresence } from "motion/react";

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const ToastCard2 = () => {
  function wave(letter: string): React.ReactNode {
    const letters = letter.split("");
    return (
      <>
        {letters.map((i, index) => (
          <Letter key={index}>{i}</Letter>
        ))}
      </>
    );
  }
  return (
    <div className="">
      <motion.h1
        initial={"closed"}
        animate={"open"}
        variants={navVariants}
        className="overflow-hidden text-center text-black text-2xl font-medium pb-6"
      >
        {wave("Skincare")}
      </motion.h1>

      <main className="w-full max-w-2xl h-full max-h-[456px] ">
        <motion.picture
          animate={{ scale: [0.8, 1] }}
          transition={{ duration: 0.7, ease: "easeIn" }}
          className="relative block w-[600px] h-[300px] bg-blue-400 rounded-2xl shadow-sm border-4 border-black"
        >
          <div className="flex flex-col gap-4 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h3 className="flex gap-2 items-center overflow-hidden text-4xl text-amber-50 font-black">
              <motion.span
                animate={{ x: [-100, 0] }}
                transition={{ duration: 0.7, ease: "easeIn", delay: 0.2 }}
                className="block"
              >
                One
              </motion.span>
              <motion.span
                animate={{ y: [100, 0] }}
                transition={{ duration: 0.7, ease: "easeIn", delay: 0.2 }}
              >
                stop
              </motion.span>
              <motion.span
                animate={{ x: [100, 0] }}
                transition={{ duration: 0.7, ease: "easeIn", delay: 0.2 }}
              >
                shop
              </motion.span>
            </h3>

            <h3 className="flex gap-2 items-center overflow-hidden text-4xl text-amber-50 font-black">
              <motion.span
                animate={{ x: [-100, 0] }}
                transition={{ duration: 0.7, ease: "easeIn", delay: 0.6 }}
                className="block"
              >
                to
              </motion.span>
              <motion.span
                animate={{ y: [100, 0] }}
                transition={{ duration: 0.7, ease: "easeIn", delay: 0.6 }}
                className="block"
              >
                perfect
              </motion.span>
              <motion.span
                animate={{ x: [100, 0] }}
                transition={{ duration: 0.7, ease: "easeIn", delay: 0.6 }}
                className="block"
              >
                skin.
              </motion.span>
            </h3>

            <button className="bg-amber-50 w-fit py-2 px-4 rounded-lg text-lg font-medium text-black shadow-sm">
              Explore
            </button>
          </div>
        </motion.picture>
      </main>
    </div>
  );
};

const Letter = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.span variants={itemVariants} className="inline-block">
      {children}
    </motion.span>
  );
};

export default ToastCard2