import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Mom() {
  const [text, count] = useTypewriter({
    words: ["Professeur", "Coach", "Consultante"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full mx-auto object-cover"
        src="/teacher.png"
        alt="Picture of the author"
        objectFit="contain"
        width="120"
        height="120"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase font-medium text-gray-300 pb-2 tracking-[10px]">
          Aziza Mouti
        </h2>
        <h1 className="text-5xl px-10 font-semibold lg:text-7xl pb-3">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div>
          <Link href="#Savoir">
            <button className="Momplus">Savoir+</button>
          </Link>
          <Link href="#Experience">
            <button className="Momplus">Experiences</button>
          </Link>
          <Link href="#Project">
            <button className="Momplus">Projects</button>
          </Link>

          <Link href="#Formation">
            <button className="Momplus">Formations</button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
