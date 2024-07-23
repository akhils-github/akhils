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
  const isPdf = path.includes(".pdf");

  return (
    <Modal 
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div className="relative z-10 h-full w-full">
        {isPdf ? (
          <embed
            id="pdf-embed"
            src={path}
            type="application/pdf"
            className="object-cover h-full w-full"
          />
        ) : (
          <Image
            src={path}
            alt="award"
            width={500}
            height={500}
            quality={100}
            priority={true}
            className="object-contain h-full w-full"
          />
        )}
      </div>
      <h1 className="text-4xl font-bold text-zinc-50 py-4">
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
