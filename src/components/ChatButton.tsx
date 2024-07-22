
"use client";

import { TbRobot } from "react-icons/tb";

export const ChatButton = () => {
    

    return (
        <div className="absolute bottom-20 right-12">
            <button className="group relative grid h-[50px] w-[50px] place-content-center rounded-full border-2 border-zinc-50 transition-colors duration-700 ease-out hover:border-emerald-300">
                <TbRobot className="pointer-events-none relative z-10 text-4xl text-zinc-50 transition-all duration-700 ease-out group-hover:animate-spin group-hover:text-emerald-300" />
            </button>
        </div>

    )
}