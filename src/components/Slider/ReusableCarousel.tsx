'use client';

import React, { useState, useEffect } from 'react';
import Sliderbtn from './Sliderbtn';

interface ReusableCarouselProps {
  items: React.ReactNode[];
  sectionClass: string; 
  title: string;
  classStyle: string;
  slidesPerView?: {
    sm: number;
    md: number;
    lg: number;
  };
}

const ReusableCarousel: React.FC<ReusableCarouselProps> = ({ items, title, classStyle,  slidesPerView = { sm: 1, md: 2, lg: 4 }, sectionClass }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(1);

  const goToPrevious = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentSlide - slidesToShow;
    setCurrentSlide(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentSlide === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + slidesToShow;
    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setSlidesToShow(slidesPerView.lg);
      } else if (window.matchMedia('(min-width: 768px)').matches) {
        setSlidesToShow(slidesPerView.md);
      } else {
        setSlidesToShow(slidesPerView.sm);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);
  const visibleItems = items.slice(currentSlide, currentSlide + slidesToShow);
  return (
    <section className={`max-w-[1920px] mx-auto px-[10.020833%] pt-28 ${sectionClass}`}>
      <div className='flex flex-wrap justify-between pb-[60px] gap-5'>
        <h2 className='text-xl md:text-[32px] font-extrabold leading-none text-secondary'>{title}</h2>
        <div className='flex gap-5'>
          <Sliderbtn onClick={goToPrevious} direction="prev" disabled={currentSlide === 0}/>
          <Sliderbtn onClick={goToNext} direction="next" disabled={currentSlide >= items.length - slidesToShow}/>
        </div>
      </div>

       <div className={classStyle}>
         {visibleItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </section>
  );
};

export default ReusableCarousel;