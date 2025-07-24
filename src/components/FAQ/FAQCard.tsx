import { CustomType } from '@/types/CustomType'
import Image from 'next/image'

const FAQCard = ({data} : {data : CustomType}) => { 

  return (
    <div className='p-[30px] border border-[#EFEFEF] rounded-3xl flex flex-col items-center 
        hover:shadow-xl 
        hover:shadow-primary 
        transform hover:-translate-y-2 
        transition-all 
        duration-300 
        ease-out'>
        {data.img && (
        <Image 
            className='pb-4'
            src={data.img}
            alt='customer' 
            width={80} height={80} />
        )}
        <p>{data.title}</p>
        <div className='flex flex-col gap-2.5'>
            <Image 
                src={'/images/FAQ/quote.svg'}
                alt='customer' 
                width={40} height={28} />
            <p className='pl-5'>
                {data.desc}
            </p>
            <Image 
                className='self-end'
                src={'/images/FAQ/quote.svg'}
                alt='customer' 
                width={40} height={28} />
        </div>
        
    </div>
  )
}

export default FAQCard
