import Head from 'next/head'
import { motion } from 'framer-motion'
import ArrowLeft from './svgs/arrowLeft'
import ArrowRightCheckout from './svgs/arrowRightCheckout'
import { useRouter } from 'next/router'

const variants = {
  initialLeft: {
    opacity: 0,
    x: -10,
  },
  initialRight: {
    opacity: 0,
    x: 10,
  },
  baseInitial: {
    opacity: 0,
  },
  Final: {
    opacity: 1,
    x: 0,
  },
}

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex h-screen -mt-16">
      <Head>
        <title>BlueBuckDesigns</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper-img flex-grow mt-48">
        <section className="flex max-w-screen-xl mx-auto py-2">
          <motion.div
            variants={variants}
            initial="initialLeft"
            animate="Final"
            className="left-sec"
          >
            <div className="sectext text-gray-400 tracking-wider">
              Power your ideas with BlueBuck Designs
            </div>
            <motion.div className="primtext text-5xl font-bold my-10 leading-normal">
              Need a complete solution to implement your ideas?
              <br />
              <span className="text-prim">I’m your man !</span>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex bg-prim text-white px-4 py-2 rounded-full focus:outline-none"
            >
              Checkout Projects
              <div className="ml-2">
                <ArrowRightCheckout />
              </div>
            </motion.button>
          </motion.div>
          <motion.div
            variants={variants}
            initial="initialRight"
            animate="Final"
            className="right-sec w-full h-full"
          >
            <img src="/graphic/right-sec.svg" alt="" />
          </motion.div>
        </section>
        <div className="wrap-transp">
          <motion.section
            variants={variants}
            initial="baseInitial"
            animate="Final"
            className="max-w-screen-xl mx-auto flex py-12 mt-6 items-center justify-between"
          >
            <motion.div className="flex flex-col bg-gray-50 px-6 h-48 justify-between py-6 rounded-lg relative whocard z-10">
              <h6 className="text-secprim font-bold text-lg">Nikhil Joshi</h6>
              <div className="flex items-center">
                <motion.img
                  src="/prof_pic.jpg"
                  alt="Nikhil Joshi"
                  className="h-10 w-10 rounded-full mr-6"
                />
                <div className="text-sm text-gray-500">
                  A professional with over 7 years in the software industry with
                  experiece in multiple technology domains.
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secprim py-1 px-4 rounded-lg font-bold text-white w-max focus:outline-none"
                onClick={() => router.push('/about')}
              >
                Know More
              </motion.button>
            </motion.div>
            <motion.div
              transition={{
                x: {
                  duration: 1,
                  ease: 'easeOut',
                  yoyo: Infinity,
                },
              }}
              animate={{ x: ['-5px', '5px'] }}
            >
              <ArrowLeft />
            </motion.div>
            <div className="text-2xl font-bold">
              The who’s who of <span className="text-prim">BlueBuck</span> !
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
