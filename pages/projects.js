import React from 'react'
import Head from 'next/head'
import IonicReact from './svgs/ionicreact'
import ReactSC from './svgs/reactsc'
import ReactStrapi from './svgs/reactstrapi'
import VueNode from './svgs/vuenode'
import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const variants = {
  visible: { opacity: 1, y: 0 },
  hiddenabove: { opacity: 0, y: -10 },
  hiddenbelow: { opacity: 0, y: 10 },
}

const projectData = [
  {
    id: 1,
    name: 'Relation Management App',
    subtitle:
      'A hybrid app to help ease daily activities for assocaites of a wealth management company.',
    image: '/rmapp.svg',
    icon: <IonicReact />,
  },
  {
    id: 2,
    name: 'Test & Requirement Management Tool',
    subtitle:
      'A complete tool to track and manage software development lifecycle.',
    image: '/tmt.svg',
    icon: <VueNode />,
    top: true,
  },
  {
    id: 3,
    name: 'Organization Sales Management',
    subtitle:
      'A web tool to track and manage the organization’s sales perfomance with data visualizations.',
    image: '/sales.svg',
    icon: <ReactStrapi />,
  },
  {
    id: 4,
    name: 'API Sandbox',
    subtitle:
      'A web tool to speed up a bank’s integrations with 3rd party apps.',
    image: '/sandbox.svg',
    icon: <ReactSC />,
    top: true,
  },
]

const Projects = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="par-wrap contme">
        <div className="wrap-transp absolute w-full -z-1 h-96">
          <div className="mx-4 xl:mx-auto xl:max-w-screen-xl">
            <h2 className="text-projects font-bold text-3xl pt-10">Projects</h2>
          </div>
        </div>
        <div className="mx-4 xl:mx-auto xl:max-w-screen-xl z-10 pt-48">
          <div className="card-wrapper flex xl:flex-row flex-col items-center xl:space-x-12 py-4 h-full">
            {projectData.map((project) => (
              <Card
                key={project.id}
                marginTop={project.top}
                title={project.name}
                icon={project.icon}
                subtitle={project.subtitle}
                img={project.image}
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const Card = ({ marginTop, title, icon, subtitle, img }) => {
  return (
    <motion.div
      initial={marginTop ? 'hiddenabove' : 'hiddenbelow'}
      animate="visible"
      variants={variants}
      className={`card whocard flex flex-col bg-cardprim p-4 w-72 mr-4 xl:mr-0 my-4 rounded-md ${
        marginTop ? 'xl:mt-auto' : 'xl:mb-auto'
      }`}
    >
      <LazyLoadImage
        src={img}
        className="rounded-md xl:w-64 xl:h-64"
        alt="Project Image"
      />
      <div className="title-container flex my-4 justify-between">
        <div className="proj-title text-white font-semibold my-auto">
          {title}
        </div>
        <div className="proj-icons mb-auto">{icon}</div>
      </div>
      <div className="proj-subtitle text-xs font-bold tracking-wider text-cardtext my-2">
        {subtitle}
      </div>
    </motion.div>
  )
}

export default Projects
