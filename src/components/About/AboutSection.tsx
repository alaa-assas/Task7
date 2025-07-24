import { AboutType } from '@/types/AboutType'
import Image from 'next/image'
import RatingCards from './RatingCards'


const AboutSection = ({ data , width, height} : { data : AboutType, width: number, height: number}) => {

  return (
    <div className='max-w-[1920px] mx-auto px-[13.020833%] py-28 grid grid-cols-1 md:grid-cols-2 gap-4'>
      <Image src={data.img}
        alt='about company'
        width={width}
        height={height}/>
        
        <div className='flex flex-col justify-center'>
          <p className='font-semibold [line-height:100%] text-sm md:text-base text-secondary/60 pb-1.5'>{data.subTitle}</p>
          <h3 className='font-extrabold [line-height:100%] text-xl md:text-[32px] text-secondary pb-8'>{data.title}</h3>
          <p className='leading-8 text-sm md:text-lg text-secondary pb-8'>{data.desc}</p>
          <RatingCards data={data.rating} />
        </div>
    </div>
  )
}

export default AboutSection
