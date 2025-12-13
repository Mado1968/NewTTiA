import React from 'react';
import { X, ArrowRight, BrainCircuit, Check } from 'lucide-react';
import { ScatterItem } from '../types';
import { Contact } from './Contact';

interface DetailModalProps {
  item: ScatterItem | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const { contentType, contentData } = item;

  // Render different content based on type
  const renderContent = () => {
    switch (contentType) {
      case 'service':
        return (
          <div className="space-y-6">
            <div className="w-12 h-1 bg-ttia-green mb-4"></div>
            <h2 className="text-4xl font-display font-bold mb-4 leading-tight">{contentData.title}</h2>
            <p className="text-lg font-light opacity-80 leading-relaxed font-sans">{contentData.description}</p>
            <div className="flex gap-2 mt-8">
               {contentData.tags.map((tag: string) => (
                 <span key={tag} className="px-3 py-1 border border-white/20 rounded-full text-xs font-mono uppercase tracking-widest text-ttia-green">
                   {tag}
                 </span>
               ))}
            </div>
          </div>
        );

      case 'pricing':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-start">
               <div>
                  <div className="w-12 h-1 bg-ttia-orange mb-4"></div>
                  <h2 className="text-3xl font-display font-bold">{contentData.name}</h2>
               </div>
               <div className="text-right">
                  <div className="text-4xl font-mono text-ttia-green">{contentData.price}</div>
                  {contentData.price !== 'Custom' && <div className="text-xs opacity-50 uppercase tracking-widest">per project</div>}
               </div>
            </div>
            
            <ul className="space-y-4 py-6 border-t border-white/10">
              {contentData.features.map((f: string, i: number) => (
                <li key={i} className="flex items-center gap-3 font-light">
                  <Check size={16} className="text-ttia-green" />
                  {f}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 bg-white text-ttia-black font-bold uppercase tracking-widest hover:bg-ttia-orange hover:text-white transition-colors">
              Select Plan
            </button>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-6">
            <BrainCircuit size={48} className="text-ttia-cream mb-4" />
            <h2 className="text-3xl font-display font-bold">{contentData.title}</h2>
            <p className="text-xl leading-relaxed font-serif italic text-ttia-cream/90">
              "{contentData.text}"
            </p>
            <div className="pt-8 flex gap-8">
               <div className="text-center">
                 <div className="text-3xl font-mono text-ttia-green">50+</div>
                 <div className="text-xs opacity-50 uppercase tracking-widest">Clients</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-mono text-ttia-orange">24/7</div>
                 <div className="text-xs opacity-50 uppercase tracking-widest">Uptime</div>
               </div>
            </div>
          </div>
        );

      case 'contact':
        return <Contact />;

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-white/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Card */}
      <div className="relative w-full max-w-2xl bg-ttia-black text-ttia-cream shadow-2xl p-8 md:p-12 overflow-hidden animate-[float_0.3s_ease-out]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors group"
        >
          <X className="group-hover:rotate-90 transition-transform" />
        </button>

        {/* Decorative Grid on Card */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ttia-green via-ttia-orange to-ttia-green"></div>
        <div className="absolute bottom-4 right-4 text-[10px] font-mono opacity-20 rotate-0">
           ID: {item.id.toUpperCase()} <br/>
           COORD: {item.x.toFixed(0)}:{item.y.toFixed(0)}
        </div>

        {/* Content */}
        <div className="relative z-10">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
