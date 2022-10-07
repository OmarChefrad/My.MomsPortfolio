import React from "react"
import { motion } from "framer-motion"
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"
import Image from "next/image"
import Link from "next/link"

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

type Props = {}

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:azizamouti43@gmail.com?subject=${formData.subject}&body=Salut mme Mouti...${formData.message}. ${formData.message}(${formData.email})`
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center pt-24 md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h1 className="absolute top-16 text-xl uppercase tracking-[10px] text-gray-300 font-bold">
        {"N'hésitez pas à me contacter"}
      </h1>

      <div className="flex flex-col">
        <div className="space-y-7">
          {" "}
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />
            <p className="filter blur-[2.25px] hover:blur-[0px] transition duration-250 ease-in-out select-none">
              +212690219217
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="filter blur-[2.25px] hover:blur-[0px] transition duration-300 ease-in-out select-none">
              azizamouti@gmail.com
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex space-x-2 ">
              <input
                {...register("name")}
                className="contactInput"
                placeholder="Nom"
                type="text"
              />
              <input
                {...register("email")}
                className="contactInput2"
                placeholder="Email"
                type="text"
              />
            </div>
            <input
              {...register("subject")}
              className="contactInput"
              placeholder="Le Sujet"
              type="text"
            />
            <textarea
              {...register("message")}
              className="contactInput"
              placeholder="Le Message"
            />
            <button className="bg-[#F7AB0A] py-5 px-2 rounded-sm text-gray-900 font-bold text-lg ">
              Submit
            </button>
            <div></div>
          </form>
        </div>
        <Link href="#Home">
          <div className="flex justify-center cursor-pointer p-0 m-0">
            <Image
              src="/up-arrow.png"
              alt="arrow"
              width="30"
              height="30"
            />
          </div>
        </Link>
        <p className="flex justify-center text-sm font-thin font-mono text-gray-600 pt-10">
          Portfolio Coded and Designed by @Umar
        </p>
      </div>
    </motion.div>
  )
}
