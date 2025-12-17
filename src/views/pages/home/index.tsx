'use client'
import { Index as Line } from '@/src/components/Line'
import { FaApple, FaArrowRight, FaCamera, FaGamepad, FaHeadphones, FaPhone } from 'react-icons/fa'
import { Index as ListCard } from '@/src/components/ListProduct'
import { Index as ListCategory } from '@/src/components/ListCategory'
import { Index as ListCardCompact } from '@/src/components/ListProductCompact'
import { Index as BannerDiscont } from '@/src/components/BannerProductBestDiscount'
import { Index as ListCardNotCompact } from '@/src/components/ListProductNotCompact'
import { Index as NewArival } from '@/src/components/NewProductArrival'
import { products } from '@/src/data/product'
import { FaComputer } from 'react-icons/fa6'
import { BsSmartwatch } from 'react-icons/bs'
export default function HomePage() {
    return (
        <>
            <section className="container flex mb-20 justify-between items-start h-fit ">
                <nav className='border-r-[1px] w-[15rem] border-gray-300 pt-8 pr-15'>
                    <ul className='w-fit flex flex-col items-start gap-2'>
                        <Line text={[
                            "Woman’s Fashion",
                            "Men’s Fashion",
                            "Electronics",
                            "Home & Lifestyle",
                            "Medicine",
                            "Sports & Outdoor",
                            "Baby’s & Toys",
                            "Groceries & Pets",
                            "Health & Beauty"
                        ]} />
                    </ul>
                </nav>
                <div className="mt-8 ml-15 flex-1">
                    <div className='bg-black flex justify-around rounded-sm'>
                        <div className='text-white flex flex-col justify-center gap-10'>
                            <span className='text-gray-300 flex items-center'>
                                <FaApple size={50} color='white' />
                                <p className='text-lg'>iPhone 14 series</p>
                            </span>
                            <p className='w-fit text-5xl font-medium'>
                                Up to 10%
                                <br />
                                off Voucher
                            </p>
                            <span className='text-gray-200 cursor-pointer font-medium border-b-2 border-transparent transition-all hover:transition-all hover:border-gray-400 flex justify-between items-center w-fit gap-2'>
                                <p>Shop Now</p>
                                <FaArrowRight size={20} />
                            </span>
                        </div>

                        <img src="./banner/banner-01.png" alt="" />

                    </div>
                </div>
            </section>
            <ListCard title={{ text: "Today’s", subtext: "Flash Sales" }} products={products} />
            <ListCategory
                title={{
                    text: "Categories",
                    subtext: "Browse By Category"
                }}
                category={[
                    { name: "Phones", Icon: FaPhone },
                    { name: "Computers", Icon: FaComputer },
                    { name: "SmartWatches", Icon: BsSmartwatch },
                    { name: "Camera", Icon: FaCamera },
                    { name: "Headphones", Icon: FaHeadphones },
                    { name: "Gaming", Icon: FaGamepad },
                    { name: "Phones", Icon: FaPhone },
                    { name: "Computers", Icon: FaComputer },
                    { name: "SmartWatches", Icon: BsSmartwatch },
                    { name: "Camera", Icon: FaCamera },
                    { name: "Headphones", Icon: FaHeadphones },
                    { name: "Gaming", Icon: FaGamepad }
                ]} />
                <ListCardCompact title={{ text: "This Month", subtext: "Best Selling Products" }} products={products} />
                <BannerDiscont />
                <ListCardNotCompact title={{text:"Our Products",subtext:"Explore Our Products"}} products={products} />
                <NewArival title={{text:'Featured',subtext:'New Arrival'}} />
        </>
    )
}