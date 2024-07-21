"use client";

import { motion } from "framer-motion"
import { HeaderBlock } from "./HeaderBlock"
import { SocialsBlock } from "./SocialsBlock"
import { AboutBlock } from "./AboutBlock"
import { LocationBlock } from "./LocationBlock"
import { EmailListBlock } from "./EmailListBlock"

export const Homepage = () => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            transition={{
                staggerChildren: 0.05,
            }}
            className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
        >
            <HeaderBlock />
            <SocialsBlock />
            <AboutBlock />
            <LocationBlock />
            <EmailListBlock />
        </motion.div>
    )
}