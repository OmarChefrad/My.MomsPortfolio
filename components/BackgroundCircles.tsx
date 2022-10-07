import React from "react"
import { motion } from "framer-motion"

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 6 }}
    >
      <div className="absolute border border-yellow-500 rounded-full h-[150px] w-[150px] opacity-2 mt-72 animate-ping" />
      <div className="absolute border border-yellow-500 rounded-full h-[225px] w-[225px] opacity-4 mt-72 animate-ping" />
      <div className="absolute border border-yellow-500 rounded-full h-[300px] w-[300px] opacity-8 mt-72 animate-ping" />
      <div className="absolute border border-yellow-500 rounded-full h-[600px] w-[600px] opacity-5 mt-72 animate-pulse" />
    </motion.div>
  )
}
