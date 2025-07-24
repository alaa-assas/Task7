import HeroTemplate from "./HeroTemplate"

const SubHero = () => { 

  return (
    <HeroTemplate  
      bgUrl="sub-hero"
      title="Our team cares about your full relax"
      desc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
      items={
        <button className="hover:bg-primary hover:border-primary [line-height:100%] text-white border border-white text-xl font-semibold py-3.5 px-6 rounded-full transition duration-300">
          View our Tour Packages
        </button>
      } 
    />
  )
}

export default SubHero
