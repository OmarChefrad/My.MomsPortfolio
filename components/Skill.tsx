import React from "react"
import { motion } from "framer-motion"
import { Formations } from "../typings"
import { urlFor } from "../sanity"

type Props = {
  directionLeft?: boolean
  formation: any
}

export default function Skill({ directionLeft, formation }: Props) {
  return (
    <div className="group relative flex cursor-pointer p-1 md:p-0">
      <motion.img
        key={formation._id}
        initial={{
          x: directionLeft ? -70 : -75,
          opacity: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(formation.image).url()}
        className="w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:blur-[2.5px] transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-slate-900">
            {formation.rating}%
          </p>
        </div>
        <p className="font-mono text-slate-300 flex justify-center">
          {formation.title}
        </p>
      </div>
    </div>
  )
}
