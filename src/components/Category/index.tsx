'use client'
import { Props as Data } from "@/src/types/Category";
import { useState } from "react";
type Props = {
    data: Data
    index: number
}
export function Index({ data, index }: Props) {
    const [state, setState] = useState<number | null>(null)
    return (

        <div
            onMouseOver={() => setState(index)}
            onMouseOut={() => setState(null)}
            className={`shrink-0 font-medium w-40 h-40 border border-gray-300 rounded-sm 
    flex flex-col items-center justify-center gap-4 cursor-pointer
    transition-all hover:shadow-lg
    ${state === index ? "bg-red-10 text-white" : "bg-transparent text-gray-800"}
  `}
        >
            <div className="flex flex-col items-center justify-center gap-5">
                {data.Icon && <data.Icon size={40} />}
                <p>{data.name}</p>
            </div>
        </div>

    )
} 