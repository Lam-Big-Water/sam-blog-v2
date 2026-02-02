"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

const TransformDrag = () => {
  const x = useMotionValue(0);

  // Transform drag position to visual properties
  const borderRadius = useTransform(
    x,
    [-100, 0, 100], // Input: drag position
    ["50%", "0%", "50%"], // Output: square→circle
  );

  const backgroundColor = useTransform(
    x,
    [-100, 0, 100],
    ["#6d4b7e", "#306a87", "#695a37"], // Different colors
  );

  const scale = useTransform(
    x,
    [-100, 0, 100],
    [1, 1, 1.5], // Only scale when moving right
  );

  return (
    <div className="flex h-full w-full flex-row items-center justify-center p-6 bg-black text-white">
      <motion.div
        className="w-16 h-16"
        style={{ x, borderRadius, backgroundColor, scale }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      />
    </div>
  );
};

export default TransformDrag;
