import { Props } from "@/src/types/InfoServices";

export function Index({ Icon, title, subtitle }: Props) {
    return (
        <div className="text-black flex flex-col items-center justify-center gap-2">
            <div className="text-white bg-gray-300 w-20 h-20 flex items-center justify-center rounded-full">
                <div className="bg-gray-950 flex items-center justify-center w-14 h-14 rounded-full">
                    <Icon size={40} />
                </div>
            </div>
            <h1 className="font-semibold text-xl ">
                {title}
            </h1>
            <p className="font-medium text-sm">
                {subtitle}
            </p>
        </div>
    )
}