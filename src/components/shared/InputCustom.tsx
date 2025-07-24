import React from 'react'

interface InputCustomProps {
   id: string;
   label: string;
   type: string;
   placeholder: string;
}

const InputCustom: React.FC<InputCustomProps> = ({ id, label, type, placeholder} ) => {
  return (
    <div>
        <label htmlFor="email"
            className="block font-semibold [line-height:100%] text-secondary/60 pb-2.5 text-sm md:text-lg">
            {label}
        </label>
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="text-sm md:text-base block w-full border border-secondary2/40 rounded-lg px-3 md:px-6 py-3 placeholder:[line-height:100%] placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
    </div>
  )
}

export default InputCustom
