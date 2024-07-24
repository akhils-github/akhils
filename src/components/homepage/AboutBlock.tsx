import { Block } from "./Block";

export const AboutBlock = () => {
  return (
    <Block className="col-span-12 text-lg md:text-xl lg:text-3xl leading-snug">
      <p>
        I build things that solves problems. {" "}
        <span className="text-zinc-400">
          I&apos;m a full stack developer and entrepreneur who&apos;s passionate about creating solutions. 
          Proficient in both front-end and back-end that brings creative ideas to code. 
        </span>
      </p>
    </Block>
  );
};
