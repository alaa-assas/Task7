import ReusableCarousel from '../Slider/ReusableCarousel';
import DestinantionsCard from './DestinantionsCard';
import { DestinantionsData } from '@/data/DestinantionsData';

export default function Destinantions() {
    
  const Cards = DestinantionsData.map(faq => <DestinantionsCard key={faq.id} data={faq} />);

  return (
      <ReusableCarousel items={Cards} 
        title="Explore Our Popular Destinantions" 
        sectionClass=''
        classStyle='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
        slidesPerView={{ sm: 1, md: 2, lg: 4 }}
       />
  );
}