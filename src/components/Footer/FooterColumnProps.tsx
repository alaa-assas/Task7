'use client';

import Link from 'next/link';
import { LinkItem } from '@/types/Link';

interface FooterColumnProps {
  title: string;
  links: LinkItem[];
  isSocial?: boolean;
  isContact?: boolean;
}

export default function FooterColumn({ title, links, isSocial, isContact }: FooterColumnProps) {
  return (
    <div>
      <h3 className={`pb-5 text-white font-extrabold text-xl leading-[30px] ${isSocial? 'lg:text-center' : ''}`}>
        {title}
      </h3>

      {isSocial ? (
        <ul className="flex flex-wrap justify-center gap-5">
          {links?.map((item, index) => (
            <li
              key={index}
              className="bg-primary rounded-full p-1.5 transform hover:-translate-y-2 transition-all duration-300 ease-out"
            >
              <Link href={item.path} aria-label={item.name}>
                {item.icons}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {links?.map((item, index) => (
            <li
              key={index}
              className={`pb-2.5 text-white font-semibold text-lg leading-[30px] ${
                isContact ? 'flex items-center gap-3.5' : ''
              }`}
            >
              {isContact && item.icons}
              <Link
                href={item.path}
                className="hover:underline hover:underline-offset-8 hover:text-primary transition-transform duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}