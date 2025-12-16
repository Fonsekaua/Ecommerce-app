import useEmblaCarousel from 'embla-carousel-react'
import { Index as Title } from './../Title'
import { Index as Card } from '../Card'
import { Props as product } from '@/src/types/CardProduct'
    type Props = {
        title: {
            text: string
            subtext: string
        }
        products: product[]
    }
export function Index({ title, products }: Props) {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
    return (
        <section className='container pb-16 border-b-[1px] border-gray-300'>
            <div className='flex flex-col gap-6'>
                <Title
                    text={title.text}
                    subtext={title.subtext}
                    next={() => emblaApi?.scrollNext()}
                    previous={() => emblaApi?.scrollPrev()}
                />
                <div className='overflow-hidden' ref={emblaRef}>
                    <div className='flex gap-4'>
                        {
                            products.filter(e => e.discount > 25).map((item, index) => (
                                <Card key={index} data={item} indice={index} />
                            ))
                        }
                    </div>
                </div>
                <button className='self-center w-60 flex items-center capitalize text-lg text-white font-medium rounded-lg cursor-pointer  justify-center h-16 mt-10 bg-red-10'>
                    view all products
                </button>
            </div>
        </section>
    )
}