import { Rating } from '@/types/AboutType';
import Counter from './Counter';

const RatingCards = ({data} : {data : Rating[]}) => { 

  return (
    <div className='flex flex-wrap items-center gap-12'>
       {
        data.map((item,index) => (
          <div key={index} className='max-w-20'>
            <Counter target={item.rate} suffix="+" />
            <p className='leading-6 text-secondary/60'>{item.desc}</p>
          </div>
        ))
       }
    </div>
  )
}

export default RatingCards
