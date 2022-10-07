import React from "react"
import { motion } from "framer-motion"
import Skill from "./Skill"
import { Formations } from "../typings"

type Props = {
  formations: Formations[]
}

function Formation({ formations }: Props) {
  return (
    <motion.div
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen 
    justify-center xl:space-y-0 mx-auto items-center "
    >
      <h1 className="absolute top-24 uppercase tracking-[10px] text-gray-300 text-xl font-bold">
        Formations
      </h1>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-300 text-sm">
        Survolez pour voir Mes Formations
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 pt-32 md:gap-10 gap-10">
        {formations.map((formation: any) => (
          <Skill key={formation._id} formation={formation} />
        ))}
      </div>
    </motion.div>
  )
}

export default Formation
