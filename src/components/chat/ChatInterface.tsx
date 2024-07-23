'use client';


import { sendMessage } from "../../actions/send-message";
import { FiArrowRight, FiX } from "react-icons/fi";

export const ChatInterface = ({
    setIsOpen
} : {
    setIsOpen: (isOpen: boolean) => void;
}) => {

    const handleSubmit = async () => {
        try {
            const res = await sendMessage()

            console.log(res)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
        <button onClick={() => setIsOpen(false)} className="absolute rounded-full top-3 right-6 flex items-center p-2 bg-zinc-950 border-zinc-700 hover:bg-rose-600">
            <FiX className="h-4 w-4 text-zinc-50" />
        </button>
        <section className="flex flex-col w-full h-full max-w-2xl mx-auto stretch border border-zinc-700 bg-zinc-900 text-zinc-50">
            <article className="flex flex-col h-full justify-between ">
                <aside className="px-6 py-20 md:px-12 md:py-24">
                    <h1 className="text-4xl text-center uppercase leading-tight">
                        Ask{" "}<span className="text-emerald-300">About me ✨</span>
                    </h1>
                </aside>

                <form className="mt-auto relative z-30 flex w-full items-center gap-2 border-t border-zinc-700 bg-zinc-950 py-1.5 pl-6 pr-1.5">
                    <input
                        type="text"
                        placeholder="Type your question here..."
                        className="w-full bg-transparent text-sm text-white placeholder-zinv-500 focus:outline-0"
                    />
                    <button
                        onClick={(e) => e.stopPropagation()}
                        type="submit"
                        className="group flex shrink-0 items-center gap-1.5 bg-emerald-300 px-4 py-3 text-sm font-medium text-zinc-900 transition-transform active:scale-[0.985]"
                    >
                        <span>Send</span>
                        <FiArrowRight className="-mr-4 opacity-0 transition-all group-hover:-mr-0 group-hover:opacity-100" />
                    </button>
                </form>
            </article>
        </section>
        </>
    );
}