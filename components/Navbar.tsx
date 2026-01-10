import React from 'react';


export const Navbar: React.FC = () => {
  return (
    <header className="fixed w-full top-0 z-40 py-6 pointer-events-none">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo - Pointer events auto to allow clicking */}
        <a href="#" className="flex items-center gap-2 ">
          <div className="relative w-8 h-8 flex items-center justify-center bg-ttia-white rounded-full text-white">
            {<img src="/assets/ttia_New_2026.png" alt="Logo"/>/* Logo */}
          </div>
          <span className="text-lg font-bold font-mono tracking-tighter text-ttia-white color-white ">
            TTiA
          </span>
        </a>

        {/* Minimal indicator */}
        <div className="hidden md:block font-mono text-xs text-ttia-black/40">
           EST. 2024 / MCP_PROTOCOLS
        </div>
      </div>
    </header>
  );
};
