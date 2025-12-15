import { Index as Line } from '@/src/components/Line'
import { FaApple, FaArrowRight } from 'react-icons/fa'
import {Index as Title} from '@/src/components/Title'
import {Index as Card} from '@/src/components/CardsProducts'
import { products } from '@/src/data/product'
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
        <section className='container'>
            <div className='flex flex-col gap-6'>
                    <Title text='Today´s' subtext="Flash Sales" />
                    <Card data={products} />
                        <button className='self-center w-60 flex items-center capitalize text-lg text-white font-medium rounded-lg cursor-pointer  justify-center h-16 mt-10 bg-red-10'>
                            view all products
                        </button>
                    
            </div>
        </section>
      </>
    )
}