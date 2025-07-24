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
    const newIndex = isFirstSlide ? items.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentSlide === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
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

  return (
    <section className={`px-[13.020833%] pt-28 ${sectionClass}`}>
      <div className='flex flex-wrap justify-between pb-[60px] gap-5'>
        <h2 className='text-[32px] font-extrabold leading-none text-secondary'>{title}</h2>
        <div className='flex gap-5'>
          <Sliderbtn onClick={goToPrevious} direction="prev" />
          <Sliderbtn onClick={goToNext} direction="next" />
        </div>
      </div>

       <div className={classStyle}>
        {Array.from({ length: slidesToShow }).map((_, index) => {
          const itemIndex = currentSlide * slidesToShow + index;
          return itemIndex < items.length ? (
            <div key={index}>
              {items[itemIndex]}
            </div>
          ) : null;
        })}
      </div>
    </section>
  );
};

export default ReusableCarousel;