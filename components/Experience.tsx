import React from "react"
import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"
import { Experiences } from "../typings"

type Props = {
  experiences: Experiences[]
}

function Experience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-2 justify-evenly mx-auto items-center rounded-md"
    >
      <h1 className="absolute top-20 text-xl uppercase tracking-[10px] text-gray-300 font-bold">
        Experiences
      </h1>
      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 mt-12 md:mt-24 snap-x snap-mandatory
      scrollbar-track-gray-900 scrollbar-thin scrollbar-thumb-yellow-600 rounded-md"
      >
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  )
}

export default Experience
