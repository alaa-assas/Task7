import { CustomType } from '@/types/CustomType'
import Image from 'next/image'
import React from 'react'

const Feature = ({data}: {data : CustomType}) => {
  return (
    <div className="">
      <Image className='w-full pb-5 
      transform hover:scale-110 
         transition-transform 
         duration-300 
         ease-out' src={data.img} alt={"img feature"} width={330} height={300} />
      <p className='text-2xl [line-height:100%] font-bold text-secondary pb-4'>{data.title}</p>
      <p className='text-lg leading-6 text-secondary'>{data.desc}</p>
    </div>
  )
}

export default Feature
