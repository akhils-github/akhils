import { Block } from "@/components/homepage/Block";

export default function Loading() {
    return (
        <div className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4 py-6">
            <Block className="col-span-12 row-span-2 md:col-span-6 animate-pulse bg-zinc-700" />
            <Block className="col-span-6 animate-pulse bg-zinc-700 md:col-span-3" />
            <Block className="col-span-6 animate-pulse bg-zinc-700 md:col-span-3" />
            <Block className="col-span-6 animate-pulse bg-zinc-700 md:col-span-3" />
            <Block className="col-span-6 animate-pulse bg-zinc-700 md:col-span-3" />
            <Block className="col-span-12 animate-pulse bg-zinc-700" />
        </div>
    );
};





