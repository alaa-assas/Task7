import { GiWorld } from "react-icons/gi";
import { FaUsers , FaCalendarDays} from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { MdTour } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { TabConfig } from "@/types/tabsConfig";

export const tabConfig: TabConfig[] = [
  {
    label: 'Public Tours',
    icon: <GiWorld className="w-3 md:w-6 h-3 md:h-6" />,
    fields: [
      {
        id: 'people',
        label: 'Number of people',
        icon: <FaUsers className="w-3 md:w-6 h-3 md:h-6" />,
        placeholder: 'Choose number',
        options: [
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
        ],
      },
      {
        id: 'date',
        label: 'Date',
        icon: <FaCalendarDays className="w-3 md:w-6 h-3 md:h-6" />,
        placeholder: 'Choose Date',
        options: [
          { value: '5/5/2025', label: 'May 5, 2025' },
          { value: '6/6/2025', label: 'June 6, 2025' },
          { value: '7/7/2025', label: 'July 7, 2025' },
        ],
      },
      {
        id: 'time',
        label: 'Time',
        icon: <IoTimeOutline className="w-3 md:w-6 h-3 md:h-6" />,
        placeholder: 'Choose Time',
        options: [
          { value: '9:00 AM', label: '9:00 AM' },
          { value: '12:00 PM', label: '12:00 PM' },
          { value: '9:00 PM', label: '9:00 PM' },
        ],
      },
      {
        id: 'tour',
        label: 'Tour',
        icon: <MdTour className="w-3 md:w-6 h-3 md:h-6" />,
        placeholder: 'Select Tour',
        options: [
          { value: 'tour1', label: 'Historic City Tour' },
          { value: 'tour2', label: 'Night Adventure' },
        ],
      },
      {
        id: 'transportation',
        label: 'Transportation',
        icon: <FaCarAlt className="w-3 md:w-6 h-3 md:h-6" />,
        placeholder: 'Select Transportation',
        options: [
          { value: 'car', label: 'Car' },
          { value: 'bus', label: 'Bus' },
          { value: 'bike', label: 'Bike' },
        ],
      },
    ],
  },
  {
    label: 'Private Tours',
    icon: <FaUsers className="w-3 md:w-6 h-3 md:h-6" />,
    fields: [
      {
        id: 'private-people',
        label: 'Group Size',
        icon: <FaUsers className="w-3 md:w-6 h-3 md:h-6" />,
        placeholder: 'Enter group size',
        options: []
      },
      {
        id: 'private-date',
        label: 'Preferred Date',
        icon: <FaCalendarDays className="w-3 md:w-6 h-3 md:h-6" />,
        placeholder: 'Choose Date',
        options: [
          { value: '5/5/2025', label: 'May 5, 2025' },
          { value: '6/6/2025', label: 'June 6, 2025' },
        ],
      },
      {
        id: 'transportation',
        label: 'Transportation',
        icon: <FaCarAlt className="w-3 md:w-6 h-3 md:h-6" />,
        placeholder: 'Select Transportation',
        options: [
          { value: 'car', label: 'Car' },
          { value: 'bus', label: 'Bus' },
          { value: 'bike', label: 'Bike' },
        ],
      },
    ],
  },
];