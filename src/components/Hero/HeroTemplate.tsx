interface HeroTemplateProps {
  items: React.ReactNode; 
  title: string;
  desc: string;
  bgUrl: string;
}

const HeroTemplate : React.FC<HeroTemplateProps> = ({items, title, desc, bgUrl }) => { 

  return (
    <div className={`h-screen relative w-full bg-[#00000033] bg-cover bg-center ${bgUrl}`}>
      <div className="absolute inset-0 bg-[#00000033] flex flex-col items-center justify-center z-10 h-full">
        <div className="flex flex-col items-center justify-center gap-3 md:gap-6">
          <h2 className="text-white text-xl md:text-3xl lg:text-6xl [line-height:100%] text-center w-[80%] lg:w-[940px] font-podcast">
            {title}
          </h2>
          <p className="text-white text-sm md:tex-xl lg:text-2xl [line-height:100%] font-bold text-center w-[80%] lg:w-[940px] ">
            {desc}
          </p>
          {items}
        </div>
      </div>
    </div>
  )
}

export default HeroTemplate
