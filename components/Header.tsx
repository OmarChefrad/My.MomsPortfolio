import React from "react"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from "next/link"
import { Social } from "../typings"

type Props = {
  social: Social[]
}

function Header({ social }: Props) {
  return (
    <>
      <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-gray-900">
        <motion.div
          initial={{ opacity: 0, x: -300, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.25 }}
          className="flex flex-row items-center"
        >
          {social.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="#F7AB0A"
              network={social.title}
              bgColor="transparent"
              className="cursor-pointer"
            />
          ))}
        </motion.div>
        <Link href="#Contact">
          <motion.div
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.25 }}
            className="cursor-pointer"
          >
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="#F7AB0A"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex  text-sm font-bold">
              Veuillez Me Contacter
            </p>
          </motion.div>
        </Link>
      </header>
      <div className="bg-yellow-600 w-full h-[1px]"></div>
    </>
  )
}

export default Header
