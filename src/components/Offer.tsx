import Image from "next/image"
import ButtonCustom from "./shared/ButtonCustom"


const Offer = () => {
    
    return (
        <div className='max-w-[1920px] mx-auto relative px-[13.020833%] py-16 bg-cover bg-center bg-[url(/images/info/bg-section.png)]'>
           
           <Image 
                className='inline-block md:absolute z-10 bottom-0 right-[13.020833%]'
                src={'/images/offer/img.png'}
                alt='customer' 
                width={400} height={600} />

           <div className="bg-[#FFFFFF4D] p-8 flex flex-col gap-8 items-center justify-start rounded-[50px] max-w-full md:max-w-[35.211267%]">
                <h2 className="font-extraboldtext-base md:text-[32px] [line-height:100%] text-secondary text-center">Get Special Offers for Organizations</h2>
                <p className="text-sm md:text-lg leading-6 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <ButtonCustom type={undefined} label="View our Tour Packages" classBtnExtra="" />
           </div>
        </div>
    )
}

export default Offer
