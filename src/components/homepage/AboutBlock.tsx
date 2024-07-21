import { Block } from "./Block";

export const AboutBlock = () => {
  return (
    <Block className="col-span-12 text-3xl leading-snug">
      <p>
        I build things that solves problems. {" "}
        <span className="text-zinc-400">
          I'm a full stack developer and entrepreneur who's passionate about creating solutions. 
          Proficient in both front-end and back-end that brings creative ideas to code. 
        </span>
      </p>
    </Block>
  );
};
