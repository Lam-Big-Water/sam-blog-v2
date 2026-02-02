"use client"
import React from 'react';
import {motion, useScroll, useSpring} from 'motion/react';

const UseScroll = () => {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
  return (
    <div>
        <motion.nav style={{scaleX, originX: 0}} className='h-5 fixed inset-0 bg-pink-400 '></motion.nav>
    </div>
  )
}

export default UseScroll