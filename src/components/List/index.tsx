import { Props } from "@/src/types/List";

export function Index ({title,text}:Props) {
    return (
        <div className="flex flex-col items-start gap-4 text-white pt-4">
            <h1 className="font-medium text-xl">
                {title}
            </h1>
            <ul className="flex flex-col gap-3 w-56">
                {
                    text.map((item,index)=> (
                        <li className="text-base hover:underline cursor-default font-normal" key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}