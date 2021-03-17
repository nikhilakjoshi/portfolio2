import React from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const NavBar = () => {
  const router = useRouter()

  return (
    <div>
      <nav className="flex max-w-screen-xl m-auto justify-between items-center py-4">
        <motion.h3
          onClick={() => router.push('/')}
          className="text-lg font-bold text-prim cursor-pointer"
          whileHover={{
            opacity: 0.75,
          }}
          transition={{ duration: 0.15 }}
        >
          BlueBuckDesigns
        </motion.h3>
        <ul className="flex space-x-16">
          <motion.li
            whileHover={{
              color: '#c7c7c7',
            }}
            transition={{ duration: 0.15 }}
            className="cursor-pointer"
          >
            <a onClick={() => router.push('/')}>Home</a>
          </motion.li>
          <motion.li
            whileHover={{
              color: '#c7c7c7',
            }}
            transition={{ duration: 0.15 }}
            className="cursor-pointer"
          >
            <a onClick={() => router.push('/about')}>About</a>
          </motion.li>
          <motion.li
            whileHover={{
              color: '#c7c7c7',
            }}
            transition={{ duration: 0.15 }}
            className="cursor-pointer"
          >
            <a onClick={() => router.push('/projects')}>Projects</a>
          </motion.li>
        </ul>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 0.1,
            ease: 'easeInOut',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            router.push('/contact')
          }}
          className="bg-gray-100 text-secprim px-3 py-2 rounded-full shadow focus:outline-none"
        >
          Contact Us
        </motion.button>
      </nav>
    </div>
  )
}

export default NavBar
