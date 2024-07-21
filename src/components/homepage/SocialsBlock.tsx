import { Block } from "./Block";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiGrid, FiAward } from "react-icons/fi";


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
        <a
          href="https://www.linkedin.com/in/lonzochris"
          rel="noopener noreferrer"
          target="_blank"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiLinkedin />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-neutral-800 md:col-span-3"
      >
        <a
          href="https://www.github.com/achris-alonzo30"
          rel="noopener noreferrer"
          target="_blank"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiGithub />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-green-600 md:col-span-3"
      >
        <a
          href="/projects"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <FiGrid />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-rose-500 md:col-span-3"
      >
        <a
          href="/awards"
          className="grid h-full place-content-center text-3xl text-white"
        >   
          <FiAward />
        </a>
      </Block>
    </>
  );
};
