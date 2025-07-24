import { FAQData } from '@/data/FAQData';
import FAQCard from './FAQCard';
import ReusableCarousel from '../Slider/ReusableCarousel';

export default function FAQSection() {
  const faqCards = FAQData.map(faq => <FAQCard key={faq.id} data={faq} />);

  return (
      <ReusableCarousel 
        items={faqCards} 
        sectionClass='pb-40'
        title="Happy Customers Say" 
        classStyle='flex gap-4' 
        slidesPerView={{ sm: 1, md: 2, lg: 2 }}
        />
  );
}