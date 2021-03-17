import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -10 },
}

const ContactMe = () => {
  return (
    <div className="contme max-w-screen-xl mx-auto h-full py-12">
      <motion.form
        initial="hidden"
        animate="visible"
        variants={variants}
        action=""
        className="text-left flex flex-col py-9 pl-16 pr-36 bg-gray-50 w-6/12 contmecard rounded-xl"
      >
        <h2 className="pt-4 pb-16 text-3xl font-bold text-primgreen">
          Contact Us
        </h2>
        <label htmlFor="name" className="mb-4">
          Name <span className="text-dang">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="p-3 bg-ligh rounded-lg mb-8 placeholder-gray-500 placeholder-opacity-30 focus:outline-none focus:ring focus:ring-primgreen focus:ring-opacity-50"
          placeholder="Enter your name"
        />
        <label htmlFor="emailaddress" className="mb-4">
          email <span className="text-dang">* </span>
          <span className="text-dang text-xs">Trust me, we don't spam</span>
        </label>
        <input
          type="email"
          name="emailaddress"
          id="emailaddress"
          className="p-3 bg-ligh rounded-lg mb-8 placeholder-gray-500 placeholder-opacity-30 focus:outline-none focus:ring focus:ring-primgreen focus:ring-opacity-50"
          placeholder="Enter your email"
        />
        <label htmlFor="services" className="mb-4">
          What kind of services are you looking for ?
        </label>
        <textarea
          type="text"
          name="services"
          id="services"
          className="p-3 bg-ligh rounded-lg mb-24 placeholder-gray-500 placeholder-opacity-30 focus:outline-none focus:ring focus:ring-primgreen focus:ring-opacity-50"
          rows={6}
          placeholder="Help me out in trying to understand how best I can be of service to you"
        />
        <motion.button
          className="bg-primgreen py-2 px-6 text-ligh rounded-full w-max shadow-md focus:outline-none"
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  )
}

export default ContactMe
