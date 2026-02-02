"use client";
import React from "react";
import { motion } from "motion/react";

const LayoutId = () => {
  const [isActive, setIsActive] = React.useState(0);
  return (
    <div className="bg-black grid place-items-center min-h-dvh">
      <ul className="flex gap-8 bg-amber-50 p-2 rounded-2xl text-base text-black">
        <li className="relative px-2 py-1" onClick={() => setIsActive(0)}>
          {isActive === 0 && (
            <motion.span
              layoutId="indicator"
              className="bg-gray-300 block absolute inset-0 rounded-full"
            />
          )}
          <a href="#" onClick={(e) => e.preventDefault()} className="relative z-10">
            Home
          </a>
        </li>
        <li className="relative p-1" onClick={() => setIsActive(1)}>
          {isActive === 1 && (
            <motion.span
              layoutId="indicator"
              className="bg-gray-300 block absolute inset-0 rounded-full"
            />
          )}

          <a className="relative z-10" href="#" onClick={(e) => e.preventDefault()}>
            About
          </a>
        </li>
        <li className="relative p-1" onClick={() => setIsActive(2)}>
          {isActive === 2 && (
            <motion.span
              layoutId="indicator"
              className="bg-gray-300 block absolute inset-0 rounded-full"
            />
          )}
          <a className="relative z-10" href="#" onClick={(e) => e.preventDefault()}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LayoutId;
