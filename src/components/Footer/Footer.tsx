'use client';

import Image from 'next/image';
import { LinkItemList } from '@/types/Link';
import React from 'react';
import FooterColumn from './FooterColumnProps';

interface FooterProps {
  columns: {
    links: LinkItemList;
    type?: 'default' | 'contact' | 'social';
  }[];
  logoSrc: string;
  logoAlt: string;
  year: string;
}

const Footer: React.FC<FooterProps> = ({ columns, logoSrc, logoAlt, year }) => {
  return (
    <footer className="row-start-3 flex flex-wrap items-start justify-start px-[13.020833%] bg-[#333333] py-10">
      {/* Logo */}
      <div className="grid grid-cols-5 pb-8 border-b border-white/10 w-full">
        <Image src={logoSrc} alt={logoAlt} width={130} height={130} />
      </div>

      {/* Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-1.5 py-8 border-b border-white/10 w-full">
        {columns.map((col, index) => {
          const isWide = index === 0 || index === 3; // First and Contacts take 2 cols
          const isSocial = col.type === 'social';
          const isContact = col.type === 'contact';

          return (
            <div
              key={index}
              className={isWide ? 'col-span-1 lg:col-span-2' : 'col-span-1'}
            >
              <FooterColumn
                title={col.links.title}
                links={col.links.links}
                isSocial={isSocial}
                isContact={isContact}
              />
            </div>
          );
        })}
      </div>

      {/* Copyright */}
      <div className="flex flex-wrap items-center justify-center pt-8 w-full">
        <p className="text-center leading-6 text-white">{year}</p>
      </div>
    </footer>
  );
};

export default Footer;