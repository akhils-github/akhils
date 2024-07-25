"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Modal } from "@/components/Modal";

interface AwardModalProps {
  path: string;
  skills: string[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export const AwardModal = ({
  path,
  skills,
  isOpen,
  setIsOpen
}: AwardModalProps) => {

  return (
    <Modal 
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div className="relative z-10 mb-2 md:mb-8 mx-auto h-fit w-fit">
        <Image
            src={path}
            alt="award"
            width={500}
            height={500}
            quality={100}
            priority={true}
            className="object-contain h-full w-full"
          />
      </div>
      <h1 className="text-2xl md:text-4xl font-bold text-zinc-50 py-4">
        What I learned?
      </h1>
      <ul className="ml-4 flex flex-col space-y-1">
        {skills.map((s, i) => (
          <li key={i} className="text-sm text-zinc-200 list-disc">
            {s}
          </li>
        ))}
      </ul>
    </Modal>
  );
};
