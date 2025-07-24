'use client';

import React from 'react';

interface SelectInputProps {
  label: string;
  icon: React.ReactNode;
  options: { value: string; label: string }[];
  id: string;
  placeholder?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ label, icon, options, id, placeholder = "Choose..." }) => {
  return (
    <div className="flex flex-col gap-1.5 py-2 md:py-4 px-3 md:px-8">
      <div className="flex gap-1.5 items-center">
        {icon}
        <span className="font-semibold [line-height:100%] text-sm md:text-lg">{label}</span>
      </div>
      <select
        id={id}
        name={id}
        className="text-sm md:text-lg [line-height:100%] text-secondary/80 bg-transparent"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;