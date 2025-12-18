import { Props } from "@/src/types/Input";

export function Index ({name,type = "text",placeholder,Icon}:Props) {
    return (
        <label className="border-b-2  border-gray-400 w-full mb-5 flex items-center justify-between">
            <input className="outline-none p-2" name={name} placeholder={placeholder} type={type} />
            {
                Icon &&
                <Icon />
            }   
        </label>
    )
}