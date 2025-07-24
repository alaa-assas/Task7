import React from 'react'

interface ButtonCustomProps {
   type: "submit" | "reset" | "button" | undefined;
   label: string;
   classBtnExtra: string;
   onClick?: () => void;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({ type, label, classBtnExtra, onClick} ) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`[line-height:100%] bg-primary font-semibold 
        text-white text-base md:text-xl px-3.5 lg:px-6 py-2.5 rounded-[50px] m-0 border border-primary
        transform hover:text-primary hover:bg-white transition-all duration-300 ease-out
       ${classBtnExtra}`}>
        {label}
    </button>
  )
}

export default ButtonCustom
