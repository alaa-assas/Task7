'use client'

import React, { useState } from 'react';

interface Tab {
  label: string | React.ReactNode;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const HeroTabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="w-full bg-[#FFFFFF33] p-2.5 md:p-5 rounded-2xl">
      {/* Tab Headers */}
      <div className="flex ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${index == 0 ? 'rounded-tl-xl' : '' } ${index == tabs.length-1 ? 'rounded-tr-xl' : '' } px-4 py-2 font-medium text-sm cursor-pointer ${
              activeTab === index
                ? ' text-primary bg-white '
                : 'text-white hover:text-primary bg-[#FFFFFF66] '
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-b-xl rounded-tr-xl w-full">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default HeroTabs;