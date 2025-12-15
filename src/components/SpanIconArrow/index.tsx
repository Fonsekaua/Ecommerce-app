import { IconType } from "react-icons"

type Props = {
    Icon: IconType
}
export function Index({Icon}: Props) {
  return (
      <span className="w-10 h-10 flex bg-gray-300 cursor-pointer text-gray-600 hover:text-gray-700 hover:bg-gray-400 transition-all hover:transition-all items-center justify-center rounded-full">
        <Icon />
    </span>
  )
}