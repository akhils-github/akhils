import { Block } from "./Block";
import { FiCompass } from "react-icons/fi";

export const LocationBlock = () => {
  return (
    <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
      <FiCompass className="text-3xl" />
      <p className="text-center text-lg text-zinc-400">Open for relocation</p>
    </Block>
  );
};
