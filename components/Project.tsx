import React from "react"
import { motion } from "framer-motion"
import { Projects } from "../typings"
import { urlFor } from "../sanity"

type Props = {
  projects: Projects[]
}

function Project({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-5 justify-evenly mx-auto items-center"
    >
      <h1 className="absolute top-20 uppercase text-xl font-bold tracking-[10px]">
        Projects
      </h1>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-900 scrollbar-thin scrollbar-thumb-yellow-600">
        <>
          {projects.map((project) => (
            <div
              key={project._id}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen "
            >
              <motion.img
                initial={{
                  y: -200,
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                }}
                whileInView={{ y: 0, opacity: 1 }}
                src={urlFor(project.image).url()}
                className="w-32 h-32 md:w-28 md:h-28 xl:w-32 xl:h-32"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-3xl font-bold text-center tracking-[3px]">
                  <span className="underline decoration-[#F7AB0A]/60">
                    {project.title}
                  </span>
                </h4>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </>
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  )
}

export default Project
