"use client";

import { useState } from "react";
import {motion} from 'motion/react'

export const GridLayout = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="container">
      <div className="form-wrapper">
        <motion.form layout className="form">
          <input
            className="input"
            placeholder="Email"
          />
          <motion.button
            layout
            style={{
              gridColumn: isSubmitted ? "1 / span 2" : "2",
              borderRadius: 999
            }}
            type="button"
            className="button"
            onClick={() => setIsSubmitted(submitted => !submitted)}
          >
            <motion.span className="flex justify-center" layout>
              <motion.span layout className="block">Send</motion.span>
            </motion.span>
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default GridLayout;