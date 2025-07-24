'use client';

import { IoIosSearch } from 'react-icons/io';

const SearchButton: React.FC = () => {
  return (
    <button className="text-white bg-primary w-full 
      h-full p-3 md:p-6 rounded-xl
      flex items-center justify-center
      transform hover:text-primary hover:bg-white hover:border-primary hover:border transition-all duration-300 ease-out
    ">
      <IoIosSearch className="w-4 md:w-8 h-4 md:h-8" />
    </button>
  );
};

export default SearchButton;