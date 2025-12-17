import { Props } from "@/src/types/CardNewArival"
import { ReactNode } from "react"

export function Index({ title, subtitle, img, model = 3 }: Props) {
  const data = (
    <div className="text-white absolute bottom-5 left-5 z-20 flex flex-col gap-1 items-start">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-base font-medium">{subtitle}</p>
      <button className="text-lg underline font-medium">
        Shop Now
      </button>
    </div>
  )

  const layouts: ReactNode[] = [
    // MODEL 1
    (
      <div className="bg-black flex relative justify-center items-end col-span-2 row-span-2 overflow-hidden rounded-xl">
        {data}
        <div className="relative flex w-3/4 h-3/4">
          <div className="absolute inset-0 bg-gradient-to-br 
            from-gray-400/40 via-gray-500/20 to-transparent 
            blur-3xl scale-110" />
          <img
            className="relative z-10 w-full h-full object-contain"
            src={img}
            alt=""
          />
        </div>
      </div>
    ),

    // MODEL 2
    (
      <div className="bg-black flex relative justify-end items-end col-span-2 overflow-hidden rounded-xl">
        {data}
        <div className="relative flex items-start justify-center w-3/4 h-full">
          <div className="absolute inset-0 bg-gradient-to-br 
            from-gray-400/40 via-gray-500/20 to-transparent 
            blur-3xl scale-110" />
          <img
            className="relative z-10 w-full h-full object-cover"
            src={img}
            alt=""
          />
        </div>
      </div>
    ),

    // MODEL 3
    (
      <div className="bg-black flex relative justify-center items-center overflow-hidden rounded-xl">
        {data}
        <div className="relative flex w-full h-full p-8">
          <div className="absolute inset-0 bg-gradient-to-br 
            from-gray-400/40 via-gray-500/20 to-transparent 
            blur-3xl scale-110" />
          <img
            className="relative z-10 w-full h-full object-contain"
            src={img}
            alt=""
          />
        </div>
      </div>
    ),
  ]

  return <>{layouts[model - 1]}</>
}
