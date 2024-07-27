import Link from "next/link";
import { Block } from "./Block";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiBriefcase } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa6";



export const SocialsBlock = () => {
  return (
    <>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="group overflow-hidden col-span-6 bg-blue-500 md:col-span-3"
      >
        <Link
          href="https://www.linkedin.com/in/lonzochris"
          rel="noopener noreferrer"
          target="_blank"
          className="relative h-full flex flex-col gap-2 items-center justify-center text-white overflow-hidden transition-all"
        >
          <SiLinkedin className="group-hover:translate-x-40 mx-auto text-2xl md:text-4xl font-black text-center transition duration-500 whitespace-nowrap"/>
          <span className="-translate-x-60 text-sm md:text-xl font-semibold group-hover:translate-x-0 flex items-center justify-center absolute inset-2 transition-all duration-500 text-zinc-50 z-20" >
              LinkedIn
          </span>
        </Link>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="group overflow-hidden col-span-6 bg-neutral-800 md:col-span-3"
      >
        <Link
          href="https://www.github.com/achris-alonzo30"
          rel="noopener noreferrer"
          target="_blank"
          className="relative h-full flex flex-col gap-2 items-center justify-center text-white overflow-hidden transition-all"
        >
          <SiGithub className="group-hover:translate-x-40 mx-auto text-2xl md:text-4xl font-black text-center transition duration-500 whitespace-nowrap"/>
          <span className="-translate-x-60 text-sm md:text-xl font-semibold group-hover:translate-x-0 flex items-center justify-center absolute inset-2 transition-all duration-500 text-zinc-50 z-20" >
              Github
          </span>
        </Link>
        
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="group overflow-hidden col-span-6 bg-emerald-500 md:col-span-3"
      >
        <Link
          href="/projects"
          className="mt-0 h-full flex flex-col gap-2 items-center justify-center text-white overflow-hidden transition-all"
        >
          <FiBriefcase className="group-hover:translate-x-40 mx-auto text-2xl md:text-4xl font-black text-center transition duration-500 whitespace-nowrap"/>
          <span className="-translate-x-60 text-sm md:text-xl font-semibold group-hover:translate-x-0 flex items-center justify-center absolute inset-2 transition-all duration-500 text-zinc-50 z-20" >
              Projects
          </span>
        </Link>
        
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="group overflow-hidden col-span-6 bg-rose-500 md:col-span-3"
      >
        <Link
          href="/awards"
          className="h-full flex flex-col gap-2 items-center justify-center text-white overflow-hidden transition-all"
        >
          <FaGraduationCap className="group-hover:translate-x-40 mx-auto text-2xl md:text-4xl font-black text-center transition duration-500 whitespace-nowrap" />
          <span className="-translate-x-60 text-sm md:text-xl font-semibold group-hover:translate-x-0 flex items-center justify-center absolute inset-2 transition-all duration-500 text-zinc-50 z-20" >
              Education
          </span>
        </Link>
        
      </Block>
    </>
  );
};
