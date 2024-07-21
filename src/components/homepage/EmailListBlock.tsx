import { Block } from "./Block";
import { FiMail } from "react-icons/fi";

export const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Contact me</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-emerald-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex justify-center group px-4 py-2 text-sm rounded-md bg-zinc-50 text-center relative overflow-hidden text-zinc-900 transition-colors hover:bg-zinc-200"
      >
        <span className="group-hover:translate-x-40 text-center transition duration-500 whitespace-nowrap">
          Send email
        </span>
        <FiMail className="-translate-x-40 group-hover:translate-x-0 flex items-center mx-auto my-auto justify-center absolute inset-0 transition duration-500 text-zinc-900 z-20"/> 

      </button>
    </form>
  </Block>
);
