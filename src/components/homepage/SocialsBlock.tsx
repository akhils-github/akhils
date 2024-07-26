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
        className="group col-span-6  bg-blue-500 md:col-span-3"
      >
        <Link
          href="https://www.linkedin.com/in/lonzochris"
          rel="noopener noreferrer"
          target="_blank"
          className="grid h-full place-content-center text-2xl md:text-4xl text-white"
        >
          <SiLinkedin />
        </Link>
        <span 
          className="-mt-10 hidden group-hover:block transition-all duration-400 ease-in-out text-center text-sm text-zinc-50 font-semibold leading-tight">
            LinkedIn
        </span>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="group  col-span-6 bg-neutral-800 md:col-span-3"
      >
        <Link
          href="https://www.github.com/achris-alonzo30"
          rel="noopener noreferrer"
          target="_blank"
          className="grid h-full place-content-center text-2xl md:text-4xl text-white"
        >
          <SiGithub />
        </Link>
        <span className="-mt-10 hidden  group-hover:block transition-all duration-400 ease-in-out  text-center text-sm text-zinc-50 font-semibold leading-tight">Github</span>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="group col-span-6 bg-emerald-500 md:col-span-3"
      >
        <Link
          href="/projects"
          className="grid h-full place-content-center text-2xl md:text-4xl text-white"
        >
          <FiBriefcase />
        </Link>
        <span className="-mt-11 hidden text-center group-hover:block transition-all duration-400 ease-in-out  text-sm text-zinc-50 font-semibold leading-tight">Projects</span>
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="group col-span-6 bg-rose-500 md:col-span-3"
      >
        <Link
          href="/awards"
          className="grid h-full place-content-center text-2xl md:text-4xl text-white"
        >
          <FaGraduationCap  />
        </Link>
        <span className="-mt-12 text-center hidden group-hover:block transition-all duration-400 ease-in-out  text-sm text-zinc-50 font-semibold leading-tight">Education</span>
      </Block>
    </>
  );
};
