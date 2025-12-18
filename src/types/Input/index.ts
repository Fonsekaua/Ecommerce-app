import { IconType } from "react-icons"

export type Props = {
    name: string
    placeholder: string
    type?: "text" | "password" | "number" | "email"
    Icon?: IconType
}