type Props = {
  text: string[]
}

export function Index({ text }: Props) {
  return (
    <>
      {text.map((li, index) => (
        <li className=" capitalize font-medium cursor-pointer text-gray-800 border-b-2 border-transparent hover:border-gray-300" key={index}>{li}</li>
      ))}
    </>
  )
}


