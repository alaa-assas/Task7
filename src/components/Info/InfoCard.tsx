import { InfoType } from '@/types/InfoType';
import Image from 'next/image'

const InfoCard = ({data} : {data : InfoType}) => { 

  return (
    <div className='p-[30px] bg-[#FFFFFF4D] rounded-3xl flex flex-col 
      items-center w-full hover:shadow-xl 
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
                width={60} height={60} />
        )}
        <p className='text-center font-semibold [line-height:100%] text-xl'>{data.info}</p>
    </div>
  )
}

export default InfoCard
