import { Index as TitleMini } from '@/src/components/TitleMini'
import { Index as Card } from '../Card'
import { Props as product } from '@/src/types/CardProduct'
import { useState } from 'react'
type Props = {
    title: {
        text: string
        subtext: string
    }
    products: product[]
}
export function Index({ title, products }: Props) {
    const [state, setState] = useState(false)

    return (
        <section className='container pb-20'>
            <div className='flex flex-col gap-6'>
                <TitleMini
                    text={title.text}
                    subtext={title.subtext}
                />
                <div className='flex flex-col gap-20'>
                    <div className='flex justify-between'>
                        {
                            products.filter((e, index) => index < 5).slice(0, 5).map((item, index) => (
                                <Card key={index} data={item} indice={index} />
                            ))
                        }
                    </div>
                    <div className='flex justify-between'>
                        {
                            products.filter((e, index) => index > 5).slice(0, 5).map((item, index) => (
                                <Card key={index} data={item} indice={index} />
                            ))
                        }
                    </div>
                </div>
                <button onMouseOut={() => setState(false)} onMouseOver={() => setState(true)} className={`self-center w-60 flex items-center capitalize text-lg text-white font-medium rounded-lg cursor-pointer  justify-center h-16 mt-10  ${state ? "bg-[#DB4444]/80" : "bg-red-10"} `}>
                    view all products
                </button>
            </div>
        </section>
    )
}