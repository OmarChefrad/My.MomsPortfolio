import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Experiences } from "../typings"
import { urlFor } from "../sanity"

type Props = {
  experience: any
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-md items-center space-y-2 flex-shrink-0 w-[360px] md:w-[500px] xl:w-[600px] 
    snap-center p-5 bg-gray-800 shadow shadow-gray-200/40 hover:shadow-gray-100/60"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.25 }}
        whileInView={{ y: 0, opacity: 1 }}
        src={urlFor(experience.MainImage).url()}
        alt="experience"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h6 className="text-2xl tracking-[7px] font-bold p-5">
          {experience.institution} Ans
        </h6>
        <ul className="list-disc space-y-5 ml-5 text-lg ">
          <li>{experience.jobTitle}</li>
          <li>{experience.dateDeTravail}</li>
          <li>{experience.dateDarretTravail}</li>
          <li>{experience.description}</li>
        </ul>
      </div>
    </article>
  )
}
