'use client';

import { useEffect, useState } from 'react';

export default function GlobalLoader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (hasVisited) {
      setShowLoader(false);
    } else {
      const timer = setTimeout(() => {
        setShowLoader(false);
        sessionStorage.setItem('hasVisited', 'true');
      }, 1500); 

      return () => clearTimeout(timer);
    }
  }, []);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-[59] flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-primary border-b-transparent"></div>
        <p className="text-lg font-semibold text-secondary">Loading...</p>
      </div>
    </div>
  );
}