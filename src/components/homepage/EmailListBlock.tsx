"use client";

import * as z from "zod";
import { Block } from "./Block";

import { useForm } from "react-hook-form";

import { FiMail } from "react-icons/fi";

const formSchema = z.object({
  email: z.string().email(),
})

export const EmailListBlock = () => {
  

  const onSubmit = (values: z.infer<typeof formSchema>) => {

  }

  return (
    <Block className="col-span-12 md:col-span-9">
      <p className="mb-3 text-lg">Got a question, proposal, project, or want to work together?</p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center gap-2"
      >
        <input 
          type="text"
          placeholder="Enter your name"
          className="w-50 rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-emerald-300 focus:outline-0"
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="w-2/3 rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-emerald-300 focus:outline-0"
        />
        <button
          type="submit"
          className="flex justify-center group px-4 py-2 text-sm rounded-md bg-zinc-50 text-center relative overflow-hidden text-zinc-900 transition-colors hover:bg-zinc-200"
        >
          <span className="group-hover:translate-x-40 text-center transition duration-500 whitespace-nowrap">
            Send
          </span>
          <FiMail className="-translate-x-40 group-hover:translate-x-0 flex items-center mx-auto my-auto justify-center absolute inset-0 transition duration-500 text-zinc-900 z-20" />

        </button>
      </form>
    </Block>
  )


};