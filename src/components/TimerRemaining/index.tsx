import { Props } from "@/src/types/Timer";

export function Index ({timer,type}:Props) {
    return (
            <div className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center">
                <h1 className="font-semibold text-base">
                    {timer}
                </h1>
                <p className="text-xs capitalize font-normal">
                    {type}
                </p>
            </div>
    )
}