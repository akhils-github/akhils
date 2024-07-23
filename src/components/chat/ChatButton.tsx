"use client";

import { TbRobot } from "react-icons/tb";

export const ChatButton = ({
    setIsOpen
} : {
    setIsOpen: (isOpen: boolean) => void;
}) => {
    

    return (
        <div className="fixed bottom-20 right-20">
            <button onClick={() => setIsOpen(true)} className="group relative grid h-[50px] w-[50px] place-content-center rounded-full border-2 border-zinc-50 transition-all duration-700 ease-out hover:border-emerald-300 shadow-[3px_3px_0px_#3f3f46] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                <TbRobot className="pointer-events-none relative z-10 text-4xl text-zinc-50 transition-all duration-700 ease-out group-hover:animate-spin group-hover:text-emerald-300" />
            </button>
        </div>

    )
}