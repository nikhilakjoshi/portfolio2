import React from 'react'
import { motion } from 'framer-motion'
import Quotes from 'pages/svgs/quotes'
import SVGCss from './svgs/svgcss'
import SVGHtml from './svgs/svghtml'
import SVGJs from './svgs/svgjs.js'
import SVGReact from './svgs/svgreact'
import SVGVue from './svgs/svgvue'
import SVGNode from './svgs/svgnode'
import SVGDocker from './svgs/svgdocker'
import Companys from './svgs/Companys'

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

const About = () => {
  return (
    <div className="">
      <div className="aboutme">
        <section className="flex max-w-screen-xl mx-auto h-full py-12">
          <motion.img
            variants={variants}
            initial="initialLeft"
            animate="Final"
            src="/prof_pic.jpg"
            alt="Profile Picture Nikhil Joshi"
            className="w-52 h-52 rounded-full"
          />
          <motion.div
            variants={variants}
            initial="initialRight"
            animate="Final"
            className="contentcontainer flex flex-col px-8"
          >
            <h2 className="text-5xl font-bold text-secprim mb-12">About Me</h2>
            <div className="flex mb-11 space-x-4">
              <div className="q1 mb-auto">
                <Quotes />
              </div>
              <span className="text-prim text-2xl">
                I absolutely love making websites look amazing
              </span>
              <div className="q2 transform rotate-180 mb-auto">
                <Quotes />
              </div>
            </div>
            <div className="pwrapper text-gray-600 text-lg leading-relaxed w-10/12">
              <p className="">
                Hey there, I have been in the webtech industry for about 7 years
                now. I just have to say it, I absolutely love making websites
                look amazing.
              </p>
              <br />
              <p>
                I was a software engineer in my past life, fixing and building
                top notch stuff to other people’s credit.
              </p>
              <br />
              <p>
                So, if you are looking for someone to build complex web
                applications (or even simple beautiful websites), you’ve come to
                the right place
              </p>
            </div>
          </motion.div>
        </section>
        <div className="wrap-transp">
          <motion.div
            variants={variants}
            initial="baseInitial"
            animate="Final"
            className="max-w-screen-xl mx-auto capab flex"
          >
            <img
              src="/prof_pic.jpg"
              alt="Profile Picture Nikhil Joshi"
              className="w-52 h-52 rounded-full opacity-0"
            />
            <div className="px-8 py-10 w-full">
              <div className="flex w-10/12 justify-between">
                <div className="basics flex flex-col">
                  <h4 className="text-xl text-sec pb-4 mb-8 border-sec border-b-2">
                    The Basics
                  </h4>
                  <div className="flex justify-center space-x-6">
                    <SVGHtml />
                    <SVGCss />
                    <SVGJs />
                  </div>
                </div>
                <div className="flavors">
                  <h4 className="text-xl text-sec pb-4 mb-8 border-sec border-b-2">
                    The Flavors
                  </h4>
                  <div className="flex space-x-6 justify-center">
                    <SVGReact />
                    <SVGVue />
                    <SVGNode />
                    <SVGDocker />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={variants}
          initial="baseInitial"
          animate="Final"
          className="flex max-w-screen-xl mx-auto py-4 mt-4"
        >
          <img
            src="/prof_pic.jpg"
            alt="Profile Picture Nikhil Joshi"
            className="w-52 h-52 rounded-full opacity-0"
          />
          <div className="my-5 flex flex-col px-8">
            <Companys />
            <p className="text-sec text-xs">
              I’m an avid self learner, but these companies taught me how to
              learn
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
