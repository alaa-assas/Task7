'use client';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

interface SliderbtnProps {
  onClick: () => void;
  disabled?: boolean;
  direction: 'prev' | 'next';
}

const Sliderbtn: React.FC<SliderbtnProps> = ({ onClick, disabled, direction }) => {
  return (
    <button
      onClick={onClick}
      className="text-white hover:text-secondary bg-primary rounded-full shadow p-4 hover:bg-gray-100 focus:outline-none z-10"
      style={{ [direction === 'prev' ? 'left' : 'right']: '1rem' }}
      aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} Slide`}
      disabled={disabled}
    >
      {direction === 'prev' ? <GrPrevious /> : <GrNext />}
    </button>
  );
};

export default Sliderbtn;