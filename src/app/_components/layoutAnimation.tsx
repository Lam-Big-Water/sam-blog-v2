"use client"
import React from 'react'
import {motion} from 'motion/react';


const LayoutAnimation = () => {
  const [isSmall, setIsSmall] = React.useState(false);
  return (
    <div className='h-88 bg-amber-100 flex flex-col justify-center items-center gap-8'>
      <motion.div
      layout
      style={{
        flexDirection: isSmall ? "row" : "column",
        padding: isSmall ? "8px" : "24px",
        borderRadius: "12px",
      }}
      className='w-fit flex flex-row gap-4 items-center justify-between p-2 bg-purple-300 text-black rounded-2xl'>
        <motion.div
          layout
          style={{
          fontSize: isSmall ? "12px" : "16px"
          }} className='w-12 h-12 rounded-full bg-black border-2 border-amber-50 '>
            <motion.div layout className='text-sm text-center animate-spin text-amber-50 leading-[3]'>🌞</motion.div>
          </motion.div>
        <motion.div layout>
        <h1 className='font-medium'>Interstellar</h1>
        <p>Hans Zimmer</p>
        </motion.div>
      </motion.div>

      <button onClick={() => setIsSmall(!isSmall)} className='px-4 py-2 text-md text-amber-50 font-medium bg-black rounded-sm hover:bg-black/80 cursor-pointer'>Switch</button>
    </div>
  )
}

export default LayoutAnimation