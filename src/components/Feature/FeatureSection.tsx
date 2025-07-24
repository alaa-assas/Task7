import { FeatureData } from '@/data/FeatureData'
import React from 'react'
import Feature from './Feature'
import SharedSection from '../shared/SharedSection'

const FeatureSection = () => {
      const featureCards = FeatureData.map(item => <Feature data={item} key={item.id} />);

  return (
    <SharedSection 
          items={featureCards} 
          title='' 
          sectionClass='pb-16 pt-28' 
          classStyle='gap-8' />
  )
}

export default FeatureSection
