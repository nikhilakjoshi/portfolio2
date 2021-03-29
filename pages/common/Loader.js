import React from 'react'
import Load from 'pages/svgs/Load'
import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      exit={{ opacity: 0 }}
      className="bg-gray-500 bg-opacity-50 absolute h-screen w-screen top-0 left-0 flex justify-center items-center"
    >
      <motion.div
        transition={{
          rotate: {
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        animate={{
          rotate: 360,
        }}
      >
        <Load />
      </motion.div>
    </motion.div>
  )
}
