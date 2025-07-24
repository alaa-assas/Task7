import { DestinantionType } from '@/types/DestinantionType'
import Image from 'next/image'
import { FaCalendarAlt } from "react-icons/fa";
import { LiaUsersSolid } from "react-icons/lia";

const DestinantionsCard = ({data} : {data : DestinantionType}) => { 

  return (
    <div className='flex flex-col'>
        {data.img && (
        <Image 
            className='pb-4 w-full md:w-[330px]'
            src={data.img}
            alt='Destinantions popular' 
            width={330} height={404} />
        )}
        <div className='flex flex-col gap-3'>
            <p className='[line-height:100%] font-bold text-2xl text-secondary'>{data.title}</p>
            <p className='font-semibold text-lg [line-height:100%] text-secondary'>
                from <span className='text-primary text-2xl font-extrabold'>{data.price}</span>
            </p>
            <div className='flex justify-between'>
                <div className='flex items-center gap-1.5 text-primary'>
                    <FaCalendarAlt width={24} height={24}/>
                    <span className='font-semibold [line-height:100%]'>{data.day}</span>
                </div>
                <div className='flex items-center gap-1.5 text-primary'>
                    <LiaUsersSolid  width={24} height={24}/>
                    <span className='font-semibold [line-height:100%]'>{data.nPerson}</span>
                </div>
            </div>
            <p className='text-lg leading-6'>
                {data.desc}
            </p>
            
        </div> 
    </div>
  )
}

export default DestinantionsCard
