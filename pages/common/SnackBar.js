import React from 'react'
import Close from 'pages/svgs/close'
import { motion } from 'framer-motion'

export default function SnackBar({ closeSnack }) {
  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -300 }}
      transition={{ duration: 0.15 }}
      exit={{ opacity: 0, x: -300 }}
      className="absolute xl:top-1/2 xl:right-8 top-20 xl:mx-0 mx-auto"
    >
      <div className="flex bg-primgreen text-ligh p-6 rounded-md">
        <div className="border-r-2 border-cardtext pr-4 my-auto">
          Thank you! We will get back to you as soon as possible
        </div>
        <div onClick={closeSnack} className="pl-4 cursor-pointer my-auto">
          <Close />
        </div>
      </div>
    </motion.div>
  )
}
