"use client"

import React from "react";
import { motion, AnimatePresence } from "motion/react";

 const ToastCard = () => {
  const [isUndo, setIsUndo] = React.useState(true);
  return (
    <AnimatePresence>
      {isUndo && (
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
            transition: {
              duration: 0.7,
              ease: "easeOut",
            },
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.7,
              ease: "easeIn",
            },
          }}
          exit={{
            y: 100,
            opacity: 0,
            transition: {
              duration: 0.7,
              ease: "easeOut",
            },
          }}
        >
          <motion.div
            animate={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 1, type: "spring", bounce: 0.2 }}
            className="flex gap-4 border-4 border-black max-w-124 p-4 rounded-2xl bg-blue-400 overflow-hidden"
          >
            <motion.div
              animate={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.figure
                animate={{
                  y: [20, 0],
                  transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1.2,
                    duration: 0.7,
                  },
                }}
                className="w-24 h-24 rounded-full bg-amber-400"
              ></motion.figure>
            </motion.div>

            <motion.div
              animate={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col gap-2 "
            >
              <h1 className="text-2xl font-bold">Welcome</h1>
              <p className="font-bold">
                This is my showcase to FrontEnd animation
              </p>
              <button
                onClick={() => setIsUndo(!isUndo)}
                className="w-fit self-end bg-amber-50 p-2 rounded-sm font-bold cursor-pointer hover:bg-amber-50/90"
              >
                Undo
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToastCard