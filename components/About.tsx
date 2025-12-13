import React from 'react';
import { Users, Target, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-ttia-cream text-ttia-dark py-24">
       <div className="container mx-auto px-6">
         <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-4xl font-display font-bold mb-6">Who We Are</h2>
               <p className="text-lg leading-relaxed mb-6 opacity-80">
                 TTiA was founded on a simple premise: <span className="font-bold">Technology should amplify human potential, not replace it.</span>
               </p>
               <p className="text-lg leading-relaxed mb-8 opacity-80">
                 We are a team of engineers, strategists, and designers dedicated to building the backbone of the next digital era. Specializing in MCP (Model Context Protocol) servers, we enable AI to truly understand and act upon your unique business data.
               </p>

               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-4 bg-white/50 rounded-lg">
                     <Users className="text-ttia-orange mb-2" size={32} />
                     <span className="font-bold text-2xl">50+</span>
                     <span className="text-sm opacity-60">Happy Clients</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-white/50 rounded-lg">
                     <Target className="text-ttia-green mb-2" size={32} />
                     <span className="font-bold text-2xl">100%</span>
                     <span className="text-sm opacity-60">Project Success</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-white/50 rounded-lg">
                     <TrendingUp className="text-ttia-dark mb-2" size={32} />
                     <span className="font-bold text-2xl">24/7</span>
                     <span className="text-sm opacity-60">Support</span>
                  </div>
               </div>
            </div>
            
            <div className="relative">
               <div className="aspect-square rounded-full overflow-hidden border-8 border-ttia-dark/5 shadow-2xl relative z-10">
                  <img 
                    src="https://picsum.photos/800/800?grayscale" 
                    alt="Office meeting" 
                    className="w-full h-full object-cover"
                  />
               </div>
               {/* Decorative Elements matching the design vibe */}
               <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-ttia-orange rounded-full -translate-y-10 translate-x-10 opacity-20 z-0"></div>
               <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-ttia-green rounded-full translate-y-10 -translate-x-10 opacity-20 z-0"></div>
            </div>
         </div>
       </div>
    </div>
  );
};