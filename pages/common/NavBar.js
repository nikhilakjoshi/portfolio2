import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import MenuRight from 'pages/svgs/menuright'

const NavBar = () => {
  const router = useRouter()
  const [isOpen, setisOpen] = useState(false)

  const MenuRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (
        !MenuRef.current?.contains(e.target) &&
        !btnRef.current?.contains(e.target)
      ) {
        console.log('clicked')
        setisOpen(false)
      }
    }
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [])

  return (
    <div>
      <nav className="flex xl:max-w-screen-xl xl:m-auto mx-4 justify-between items-center py-4 relative">
        <motion.h3
          onClick={() => router.push('/')}
          className="text-md font-bold text-prim cursor-pointer"
          whileHover={{
            opacity: 0.75,
          }}
          transition={{ duration: 0.15 }}
        >
          BlueBuckDesigns
        </motion.h3>
        <ul className="xl:flex space-x-16 hidden">
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
          className="bg-gray-100 text-secprim px-3 py-2 rounded-full shadow focus:outline-none hidden xl:block"
        >
          Contact Us
        </motion.button>
        <motion.button
          ref={btnRef}
          className="relative xl:hidden focus:outline-none"
          onClick={() => setisOpen(true)}
        >
          <MenuRight />
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <NavMenu ref={MenuRef} setisOpen={(val) => setisOpen(val)} />
          )}
        </AnimatePresence>
      </nav>
    </div>
  )
}

const HomeIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5.561L5 11.161V19H10V15H14V19H19V11.642C19.0001 11.492 18.9664 11.344 18.9015 11.2088C18.8366 11.0736 18.7421 10.9547 18.625 10.861L12 5.561ZM12 3L19.874 9.3C20.2251 9.58088 20.5086 9.93709 20.7035 10.3423C20.8984 10.7475 20.9997 11.1914 21 11.641V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V11.161C3.00004 10.8612 3.06746 10.5653 3.19728 10.2951C3.3271 10.0249 3.51599 9.78735 3.75 9.6L12 3Z"
        fill="#6C63FF"
        fill-opacity="0.75"
      />
    </svg>
  )
}

const ProjectsIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM14 6H10V4H14V6Z"
        fill="#6C63FF"
        fill-opacity="0.75"
      />
    </svg>
  )
}
const AboutIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 20H5.5L2.5 23V6C2.5 4.35 3.85 3 5.5 3H18.5C20.15 3 21.5 4.35 21.5 6V17C21.5 18.65 20.15 20 18.5 20Z"
        fill="#6C63FF"
        fill-opacity="0.75"
      />
      <path d="M11 10H13V15.5H11V10Z" fill="white" />
      <path
        d="M12 8.5C12.5523 8.5 13 8.05228 13 7.5C13 6.94772 12.5523 6.5 12 6.5C11.4477 6.5 11 6.94772 11 7.5C11 8.05228 11.4477 8.5 12 8.5Z"
        fill="white"
      />
    </svg>
  )
}
const ContactUsIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 3H24V17H4V3ZM22 15V5H6V15H22ZM20 19H2V7H0V21H20V19ZM9 7H11V9H9V7ZM12 11H8V13H12V11ZM14 7H20V9H14V7ZM20 11H14V13H20V11Z"
        fill="#FF589B"
      />
    </svg>
  )
}
const NavMenu = React.forwardRef(({ setisOpen }, ref) => {
  const router = useRouter()
  return (
    <motion.div
      animate={{ opacity: 1, y: 10 }}
      initial={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.15 }}
      exit={{ opacity: 0, y: -10 }}
      ref={ref}
      className="absolute top-4 right-0"
    >
      <div className="wrapper flex flex-col space-y-4 bg-cardtext50 bg-opacity-50 py-4 px-6 shadow-md font-bold rounded-md">
        <motion.div
          onClick={() => {
            router.push('/')
            setisOpen(false)
          }}
          whileTap={{ scale: 0.95 }}
          className="flex space-x-2 items-center justify-start cursor-pointer"
        >
          <HomeIcon />
          <span className="opacity-75">Home</span>
        </motion.div>
        <motion.div
          onClick={() => {
            router.push('/projects')
            setisOpen(false)
          }}
          whileTap={{ scale: 0.95 }}
          className="flex space-x-2 items-center justify-start cursor-pointer"
        >
          <ProjectsIcon />
          <span className="opacity-75">Projects</span>
        </motion.div>
        <motion.div
          onClick={() => {
            router.push('/about')
            setisOpen(false)
          }}
          whileTap={{ scale: 0.95 }}
          className="flex space-x-2 items-center justify-start cursor-pointer"
        >
          <AboutIcon />
          <span className="opacity-75">About</span>
        </motion.div>
        <motion.div
          onClick={() => {
            router.push('/contact')
            setisOpen(false)
          }}
          whileTap={{ scale: 0.95 }}
          className="flex space-x-2 items-center justify-start cursor-pointer"
        >
          <ContactUsIcon />
          <span className="opacity-75">Contact Us</span>
        </motion.div>
      </div>
    </motion.div>
  )
})

export default NavBar
