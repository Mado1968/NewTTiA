import React from 'react';
import { BrainCircuit } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed w-full top-0 z-40 py-6 pointer-events-none">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo - Pointer events auto to allow clicking */}
        <a href="#" className="flex items-center gap-2 pointer-events-auto bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-gray-100 shadow-sm">
          <div className="relative w-8 h-8 flex items-center justify-center bg-ttia-black rounded-full text-white">
             <BrainCircuit size={18} />
          </div>
          <span className="text-lg font-bold font-mono tracking-tighter text-ttia-black">
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
