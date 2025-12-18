import { Props as title } from "@/src/types/Title"
import { Index as TitleMini } from "../TitleMini"
import { Props as product } from "@/src/types/NewProductInfo"
import { Index as CardArival } from "../CardNewArival"
type Props = {
    title: title
}
export function Index({ title }: Props) {
    return (
        <section className="container pb-32">
            <div className="flex flex-col gap-6">
                <TitleMini text={title.text} subtext={title.subtext} />
                <div className="grid grid-cols-4 grid-rows-2 gap-6 h-[37.5rem] *:rounded-sm">
                    <CardArival img="/new-product/p01.png" title="Playstation" subtitle="Black and White version of the PS5 coming out on sale." model={1}/>
                    <CardArival img="/new-product/p02.png" title="Women’s Collections" subtitle="Featured woman collections that give you another vibe." model={2}/>
                    <CardArival img="/new-product/p03.png" title="Speakers" subtitle="Amazon wireless speakers." />
                    <CardArival img="/new-product/p04.png" title="Perfume" subtitle="GUCCI INTENSE OUD EDP."/>

                </div>

            </div>
        </section>
    )
}