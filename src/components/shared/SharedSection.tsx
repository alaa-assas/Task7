import { title } from 'process';
import React from 'react'
interface SharedSectionProps {
  items: React.ReactNode[];
  sectionClass: string; 
  title: string;
  classStyle: string;
}

const SharedSection : React.FC<SharedSectionProps> = ({items, sectionClass, title, classStyle}) => {
  return (
        <section className={`px-[13.020833%] ${sectionClass}`}>
            {
                title && <h2 className='text-[32px] font-extrabold [line-height:100%] text-secondary pb-16'>
                            {title}
                        </h2>
            }
          
          <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${classStyle}`}>
            {items}
          </div>
        </section>
  )
}

export default SharedSection
