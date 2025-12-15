import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa"
import { Index as Line } from '@/src/components/Line'
import { BiHeart, BiSearch } from "react-icons/bi"
import { CgShoppingCart } from "react-icons/cg"
export function Header() {
    return (
        <>
            <div className="bg-black p-2">
                <section className="container relative flex items-center justify-center">
                    <div className="flex items-center gap-2">
                        <p className="text-gray-300">
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        </p>
                        <span className="text-white font-medium">ShopNow</span>
                    </div>

                    <p className="absolute right-0 text-gray-300 font-extralight">
                        English
                    </p>
                </section>
            </div>

            <header className="border-b-[1px] border-gray-300 w-full p-4 pt-8">
                <section className="container flex items-center justify-between">
                    <h1 className="text-3xl font-bold cursor-pointer">Exclusive</h1>

                    <nav>
                        <ul className="flex items-center gap-4 text-lg">
                            <Line text={["Home", "Contact", "About", "Sign up"]} />
                        </ul>
                    </nav>

                    <div className="flex items-center justify-between gap-5">
                        <form className="flex items-center bg-gray-200 p-2 rounded-lg gap-1">
                            <input
                                type="text"
                                aria-label="Search products"
                                placeholder="What are you looking for?"
                                className="outline-none bg-transparent text-gray-600 placeholder:text-sm"
                            />
                            <BiSearch size={21} />
                        </form>
                        <div className="flex items-center justify-between gap-2">
                            <BiHeart size={25} className="cursor-pointer"/>
                            <CgShoppingCart size={25} className="cursor-pointer"/>
                        </div>
                    </div>
                </section>
            </header>
        </>

    )
}

