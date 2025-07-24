import { PopularData } from '@/data/PopularData'
import React from 'react'
import Popular from './Popular'
import SharedSection from '../shared/SharedSection';

const PopularSection = () => {
    const popularCards = PopularData.map(item => <Popular data={item} key={item.id} />);

  return (
    <SharedSection
      items={popularCards} 
      title='The Most Popular Packages' 
      sectionClass='pt-28' 
      classStyle='gap-6' />
  )
}

export default PopularSection
