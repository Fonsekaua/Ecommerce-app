import { Props } from '@/src/types/Title'

export function Index({ text, subtext, previous, next }: Props) {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="text-red-10 font-semibold text-lg flex items-center gap-5">
        <span className="inline-block h-10 w-5 rounded-sm bg-red-10"></span>
        <h1>{text}</h1>
      </div>

      <div className="w-full flex items-center justify-between">
        <h1 className="text-4xl font-semibold">{subtext}</h1>

        <div className="flex w-40 h-14 rounded-sm items-center justify-center bg-red-10 text-white font-medium">
            View All
        </div>
      </div>
    </div>
  )
}



