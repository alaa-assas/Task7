import { PopularType } from '@/types/PopularType'
import Image from 'next/image'
import React from 'react'
import ButtonCustom from '../shared/ButtonCustom'

const Popular = ({data}: {data : PopularType}) => {
  return (
    <div className="border border-[#EFEFEF] rounded-3xl overflow-hidden">
      <Image className='w-full transform hover:scale-110 transition-transform duration-300 ease-out'
       src={data.img} 
       alt={"img popular"} 
       width={340} 
       height={340} />
      <div className='p-6 flex flex-col gap-4'>
        <p className='text-base md:text-xl [line-height:100%] font-extrabold text-secondary'>{data.package}</p>
        <p className='text-2xl md:text-5xl [line-height:100%] font-bold text-primary'>
          <sup className='text-base md:text-xl font-normal text-secondary/50 pr-1.5'>€</sup>
          {data.price}
          <sub className='text-base md:text-xl font-normal text-secondary/50'>/day</sub>
        </p>
        {
          data.features.map((item,index) => (
              <div className='flex gap-6' key={index}>
                  <Image src={item.icon} alt={"icon feature"} width={24} height={24} />
                  <p className='text-sm md:text-lg [line-height:100%] text-secondary'>{item.name}</p>
              </div>
          ))
        }
        <button
      className={`[line-height:100%] bg-white font-semibold border border-primary
        text-primary text-base md:text-xl px-3.5 lg:px-6 py-2.5 rounded-[50px] m-0 
        transform hover:text-white hover:bg-primary transition-all duration-300 ease-out`}>
        Book Now
    </button>
      </div>

    </div>
  )
}

export default Popular
