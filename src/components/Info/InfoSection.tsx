import { InfoData } from '@/data/InfoData'
import React from 'react'
import InfoCard from './InfoCard'
import SharedSection from '../shared/SharedSection'

const InfoSection = () => {
      const InfoCards = InfoData.map(item => <InfoCard data={item} key={item.id} />);
  
  return (
    <SharedSection 
      items={InfoCards} 
      title='' 
      sectionClass='py-20 bg-cover bg-center bg-[url(/images/info/bg-section.png)]' 
      classStyle='gap-5' />
  )
}

export default InfoSection
