import React from "react"
import { motion } from "framer-motion"
import { urlFor } from "../sanity"
import { Personal } from "../typings"

type Props = {
  personal: Personal[]
}

function Savoir({ personal }: Props) {
  return (
    <>
      {personal.map((person) => (
        <motion.div
          key={person._id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 justify-evenly mx-auto items-center"
        >
          <h1 className="absolute top-20 uppercase text-xl font-bold tracking-[10px]">
            {person.name}
          </h1>

          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            src={urlFor(person?.image).url()}
            className="-mb-20 md:mb-0 flex-shrink-0 w-64 h-64 rounded-full object-cover md:rounded-lg md:w-95 md:h-95 "
          />

          <div className="space-y-5 px-0 md:px-10">
            <h4 className="text-2xl font-semibold">{person?.role}</h4>
            <p className="text-base">{person?.backroundInformation}</p>
            <p className="text-base">{person?.email}</p>
          </div>
        </motion.div>
      ))}
    </>
  )
}

export default Savoir
