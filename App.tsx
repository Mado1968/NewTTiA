import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GeometricShape } from './components/GeometricShape';
import { DetailModal } from './components/DetailModal';
import { scatterItems } from './data/content';
import { ScatterItem } from './types';

// Helper to generate deterministic "random" numbers based on ID string
// to avoid hydration mismatches or jitters on re-render.
const getPseudoRandom = (id: string) => {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const float = (Math.abs(hash) % 100) / 100;
  return float;
};

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedItem, setSelectedItem] = useState<ScatterItem | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-[300vh] selection:bg-ttia-orange selection:text-white">
      <Navbar />

      {/* Main Scatter Field */}
      <main className="relative w-full overflow-hidden" ref={containerRef}>
        
        {/* Fixed Background Elements */}
        <div className="fixed top-20 left-10 text-xs font-mono text-gray-400 rotate-90 origin-top-left pointer-events-none z-0">
           GRID SYSTEM V.4.0 // TTIA_ARCH
        </div>

        {/* --- HERO SECTION (Separated) --- */}
        <div className="absolute top-[15vh] left-1/2 -translate-x-1/2 text-center z-20 w-full max-w-4xl px-4 pointer-events-none">
          <div className="font-mono text-ttia-orange text-xs tracking-[0.3em] mb-4 animate-[fadeIn_1s_ease-out]">
              SYSTEM ARCHITECTS
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold text-ttia-black leading-[0.85] tracking-tighter animate-[slideUp_1s_ease-out]">
            Transforming Intelligence<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ttia-green to-ttia-dark">
              into Action
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 font-light mx-auto max-w-lg animate-[slideUp_1.2s_ease-out]">
            We build the digital nervous system for modern enterprises.
          </p>
          <div className="mt-8 text-xs font-mono text-gray-400 animate-pulse">
            SCROLL TO EXPLORE 
          </div>
        </div>

        {/* --- GEOMETRIC SHAPES LOOP --- */}
        {scatterItems.map((item) => {
          // Calculate Parallax Transform
          const yOffset = scrollY * item.speed;
          
          // Deterministic random values for floating animation
          const randomVal = getPseudoRandom(item.id);
          const duration = 4 + (randomVal * 4); // Between 4s and 8s
          const delay = randomVal * -5; // Negative delay to start at random points in cycle

          return (
            <div
              key={item.id}
              className="absolute z-10 group"
              style={{
                top: `${item.y}vh`, // Use Viewport Height for vertical spacing
                left: `${item.x}%`, 
                transform: `translateY(${-yOffset}px) rotate(${item.rotation || 0}deg) scale(${item.size})`,
                cursor: item.contentType !== 'decorative' ? 'pointer' : 'default',
              }}
              onClick={() => {
                 if (item.contentType !== 'decorative') {
                   setSelectedItem(item);
                 }
              }}
            >
                {/* 
                  Wrapper for float animation. 
                  Separated from parallax transform to avoid conflicts.
                */}
                <div 
                  className="animate-float"
                  style={{ 
                    animationDuration: `${duration}s`,
                    animationDelay: `${delay}s`
                  }}
                >
                   <GeometricShape 
                     shape={item.shape} 
                     isFilled={item.isFilled}
                     className={item.contentType !== 'decorative' ? 'shape-shadow shape-hover' : 'opacity-20'}
                   />
                   
                   {/* Label on Hover */}
                   {item.label && (
                     <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                       <span className="bg-ttia-black text-white text-xs font-mono px-2 py-1 shadow-lg">
                         {item.label}
                       </span>
                     </div>
                   )}
                </div>
            </div>
          );
        })}

        {/* Padding for scroll */}
        <div className="h-[20vh]" style={{ marginTop: '220vh' }}></div>
      </main>

      {/* Modal Overlay */}
      {selectedItem && (
        <DetailModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}

      <div className="relative z-20 bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default App;
