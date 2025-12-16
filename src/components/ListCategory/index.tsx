'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { Index as Title } from './../Title'
import { Index as Category } from './../Category'
import { Props as CategoryProps } from '@/src/types/Category'

type Props = {
  title: {
    text: string
    subtext: string
  }
  category: CategoryProps[]
}

export function Index({ title, category }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  return (
    <section className="container mt-10 pb-20 border-b-[1px] border-gray-300">
      <div className="flex flex-col gap-8">
        <Title
          text={title.text}
          subtext={title.subtext}
          next={() => emblaApi?.scrollNext()}
          previous={() => emblaApi?.scrollPrev()}
        />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {category.map((item, index) => (
              <Category key={index} data={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
