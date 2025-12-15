'use client'
import { Props as Data } from "@/src/types/CardProduct";
import { Index as Stars } from '@/src/components/StarRating'
import { useState } from "react";
import { BiHeart } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

type Props = {
    data: Data[]
}


export function Index({ data }: Props) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    return (
       <div className="flex gap-10 no-scrollbar  overflow-hidden overflow-x-scroll scroll-none ">
        {
             data.map(({ name, assessment, discount, image, sale, comments }, indice) => (
   
                <div className="flex flex-col gap-1" key={indice}>
                    <div className="bg-gray-200 cursor-pointer rounded-sm w-56 h-56 flex items-center justify-center relative"  onMouseOver={() => setHoveredIndex(indice)} onMouseOut={() => setHoveredIndex(null)}>
                        <span className="text-xs w-16 h-6 absolute top-2 left-2 rounded-xs text-white font-light flex items-center justify-center bg-red-10">
                            -{discount}%
                        </span>
                        <div className="text-xl absolute top-2 right-2 flex flex-col gap-2">
                            <span className="flex items-center justify-center w-8 h-8 bg-gray-50 rounded-full ">
                                <BiHeart />
                            </span>
                            <span className="flex items-center justify-center w-8 h-8 bg-gray-50 rounded-full ">
                                <BsEye />
                            </span>

                        </div>
                        <div className="absolute w-full h-full ">
                            <div className={`w-full flex items-center justify-center bg-black absolute bottom-0 transition-all text-white ${hoveredIndex == indice?"h-10 opacity-100":"h-0 opacity-0 "} rounded-b-sm font-medium capitalize `}>
                                add to cart
                            </div>
                        </div>
                        <img className="w-44 h-40" src={image} alt={name} />
                    </div>
                    <div>
                        <h1 className="text-gray-900 font-semibold text-sm">
                            {name}
                        </h1>
                        <div className="text-sm flex gap-5">
                            <span className="font-semibold text-red-10">
                                ${((sale * discount) / 100).toFixed(0)}
                            </span>
                            <span className="font-light line-through text-gray-500">
                                ${sale}
                            </span>
                        </div>
                        <div className="flex items-center gap-5 font-medium text-gray-500">
                            <Stars assessment={assessment} key={indice} />
                            <span>
                                ({comments})
                            </span>
                        </div>
                    </div>
                </div>
            
        ))
        }
       </div>
    )
}