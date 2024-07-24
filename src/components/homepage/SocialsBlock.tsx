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
        className="col-span-6 bg-blue-500 md:col-span-3"
      >
        <Link
          href="https://www.linkedin.com/in/lonzochris"
          rel="noopener noreferrer"
          target="_blank"
          className="grid h-full place-content-center text-2xl md:text-4xl text-white"
        >
          <SiLinkedin />
        </Link>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-neutral-800 md:col-span-3"
      >
        <Link
          href="https://www.github.com/achris-alonzo30"
          rel="noopener noreferrer"
          target="_blank"
          className="grid h-full place-content-center text-2xl md:text-4xl text-white"
        >
          <SiGithub />
        </Link>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-emerald-500 md:col-span-3"
      >
        <Link
          href="/projects"
          className="grid h-full place-content-center text-2xl md:text-4xl text-white"
        >
          <FiBriefcase />
        </Link>
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-rose-500 md:col-span-3"
      >
        <Link
          href="/awards"
          className="grid h-full place-content-center text-2xl md:text-4xl text-white"
        >
          <FaGraduationCap  />
        </Link>
      </Block>
    </>
  );
};
