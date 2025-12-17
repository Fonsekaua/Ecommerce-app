import { useState } from 'react'
import {Index as TimerReaming} from './../TimerRemaining'
export function Index () {
    const [state,setState] = useState(true)
    return (
        <section className="container pb-20">
            <div className=" flex place-items-center justify-around rounded-sm bg-black p-12">
                <div className='flex flex-col gap-10 items-start'>
                     <small className="text-base font-semibold text-green-400">
                        Categories
                     </small>
                     <h1 className="text-white text-5xl font-semibold">
                        Enhance Your <br /> Music Experience
                     </h1>
                    <div className='flex items-center gap-2'>
                        <TimerReaming timer={23} type='hours' />
                        <TimerReaming timer={6} type='days' />
                        <TimerReaming timer={59} type='minutes' />
                        <TimerReaming timer={35} type='seconds' />
                    </div>
                    <button onMouseOut={()=>setState(true)} onMouseOver={()=> setState(false)} className={`rounded-xs cursor-pointer w-44 h-14 ${state?"bg-[#00FF66]":"bg-[#00FF66]/90"} text-white font-medium text-base capitalize`}>
                        buy now!
                    </button>
                </div>
               
                    <div className='relative flex items-center justify-center'>
                        <div className='absolute w-full h-full inset-0 bg-gradient-to-br 
              from-gray-400/50 via-gray-500/40 to-transparent 
              blur-3xl scale-100'>
                        </div>
                        <img className='relative z-10 object-contain' src="/banner/banner-02.png" alt="" />
                    </div>
               
            </div>
        </section>
    )
}