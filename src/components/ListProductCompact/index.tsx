import useEmblaCarousel from 'embla-carousel-react'
import { Index as TitleCompact } from './../TitleCompact'
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
    const filteredProducts = products
        .filter(p => p.discount < 25)
        .slice(0,5)
    return (
        <section className='container pb-16 pt-10'>
            <div className='flex flex-col gap-6'>
                <TitleCompact
                    text={title.text}
                    subtext={title.subtext}
                    next={() => emblaApi?.scrollNext()}
                    previous={() => emblaApi?.scrollPrev()}
                />
                <div className='overflow-hidden' ref={emblaRef}>
                    <div className='flex items-center justify-between'>
                        {filteredProducts.map((item, index) => (
                            <Card key={item.name} data={item} indice={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}