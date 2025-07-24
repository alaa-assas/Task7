import React from 'react'
import BookForm from './BookForm'
import Image from 'next/image'

const BookSection = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 bg-[url('/images/info/bg-section.png')] px-[13.020833%] py-16 bg-cover bg-center min-h-[600px]">
      <div className="w-full">
        <h2 className='font-extrabold [line-height:100%] text-3xl text-secondary mb-9 text-center'>Book Now Bike</h2>
        <BookForm />
      </div>

  <div className="hidden md:block"></div> 
  
    <Image
    className='hidden md:inline-block md:absolute z-10 md:bottom-[50%] lg:bottom-[-30px] right-[10.020833%] md:w-[37.70833%]'
      src="/images/Book/bikePicture.png"
      alt="customer"
      width={724}
      height={542}
    />
  </div>
  )
}

export default BookSection
