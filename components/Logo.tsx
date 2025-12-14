import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-auto" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="aicgen logo"
    >
      {/* Three cyan glowing dots */}
      <circle cx="10" cy="15" r="4" className="fill-[#06b6d4] drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
      <circle cx="10" cy="30" r="4" className="fill-[#06b6d4] drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
      <circle cx="10" cy="45" r="4" className="fill-[#06b6d4] drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />

      {/* Flowing lines */}
      <path d="M14 15 C 30 15, 40 25, 55 25" stroke="url(#lineGradient1)" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 30 C 30 30, 40 30, 55 30" stroke="url(#lineGradient2)" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 45 C 30 45, 40 35, 55 35" stroke="url(#lineGradient3)" strokeWidth="2" strokeLinecap="round" />

      {/* Document Icon */}
      <rect x="55" y="10" width="30" height="40" rx="4" className="fill-[#1e1b4b] stroke-[#8b5cf6] stroke-2" />
      
      {/* Code lines inside doc */}
      <line x1="62" y1="20" x2="78" y2="20" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="62" y1="28" x2="72" y2="28" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="62" y1="36" x2="75" y2="36" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

      {/* Page Fold */}
      <path d="M77 10 L 85 10 L 85 18 L 77 10 Z" className="fill-[#8b5cf6] opacity-50" />

      {/* Success Dot */}
      <circle cx="78" cy="44" r="2" className="fill-[#10b981]" />

      {/* Gradients */}
      <defs>
        <linearGradient id="lineGradient1" x1="14" y1="15" x2="55" y2="25" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="lineGradient2" x1="14" y1="30" x2="55" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="lineGradient3" x1="14" y1="45" x2="55" y2="35" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  );
};