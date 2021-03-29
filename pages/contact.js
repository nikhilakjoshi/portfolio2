import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Loader from 'pages/common/Loader'
import SnackBar from 'pages/common/SnackBar'
import api from 'pages/custapi'

const variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -10 },
}

const ContactMe = () => {
  const [isLoading, setisLoading] = useState(false)
  const [isSnack, setisSnack] = useState(false)
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [services, setservices] = useState('')

  const resetStates = () => {
    setname('')
    setemail('')
    setservices('')
  }

  useEffect(() => {
    if (isSnack) {
      setTimeout(() => {
        setisSnack(false)
      }, 5000)
    }
  }, [isSnack])

  const handleSubmit = (e) => {
    setisLoading(true)
    e.preventDefault()
    api
      .sendQuery({
        name,
        email,
        services,
      })
      .then((e) => {
        console.log(e)
        resetStates()
        setisLoading(false)
        setisSnack(true)
      })
      .catch((e) => {
        console.log(e)
        resetStates()
        setisLoading(false)
        setisSnack(true)
      })
  }

  return (
    <div className="contme xl:max-w-screen-xl mx-4 xl:mx-auto h-full py-12">
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
      <AnimatePresence>
        {isSnack && <SnackBar closeSnack={() => setisSnack(false)} />}
      </AnimatePresence>
      <motion.form
        initial="hidden"
        animate="visible"
        autoComplete={false}
        variants={variants}
        action=""
        onSubmit={handleSubmit}
        className="text-left flex flex-col py-9 px-6 xl:pl-16 xl:pr-36 bg-gray-50 mr-4 xl:mr-0 xl:w-6/12 contmecard rounded-xl"
      >
        <h2 className="pt-4 pb-16 text-2xl xl:text-3xl font-bold text-primgreen">
          Contact Us
        </h2>
        <label htmlFor="name" className="mb-4">
          Name <span className="text-dang">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="p-3 bg-ligh rounded-lg mb-8  placeholder-gray-500 placeholder-opacity-30 focus:outline-none focus:ring focus:ring-primgreen focus:ring-opacity-50"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
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
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
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
          value={services}
          onChange={(e) => setservices(e.target.value)}
          required
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
