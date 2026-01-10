import React from 'react';
import { ArrowRight, Cpu, Globe, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-ttia-dark pt-20">
      {/* Background Geometry */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ttia-darker rounded-full -translate-y-1/4 translate-x-1/4 opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-ttia-green rounded-full translate-y-1/3 -translate-x-1/3 opacity-5 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-ttia-orange rounded-full opacity-10 blur-2xl pointer-events-none animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ttia-darker border border-ttia-cream/10 text-xs font-bold tracking-widest text-ttia-orange">
            <Zap size={14} className="fill-current" />
            DIGITAL ACCELERATION
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Transforming <br/>
            <span className="text-ttia-green">Intelligence</span> into <br/>
            <span className="text-ttia-orange">Action</span>
          </h1>
          
          <p className="text-lg md:text-xl text-ttia-cream/80 max-w-lg leading-relaxed">
            We architect high-performance MCP servers and drive digital transformation strategies for forward-thinking businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#services"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-ttia-cream text-ttia-dark font-bold rounded-lg hover:bg-ttia-orange hover:text-white transition-all"
            >
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-ttia-cream/30 text-ttia-cream rounded-lg hover:border-ttia-green hover:text-ttia-green transition-all"
            >
              Consultation
            </a>
          </div>
        </div>

        {/* Visual Element - Abstract Dashboard/Server Representation */}
        <div className="relative hidden md:block h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-ttia-darker to-ttia-dark rounded-2xl border border-ttia-cream/10 shadow-2xl p-8 flex flex-col justify-between overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-700">
            
            {/* Fake Interface Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-ttia-orange"></div>
                <div className="w-3 h-3 rounded-full bg-ttia-cream"></div>
                <div className="w-3 h-3 rounded-full bg-ttia-green"></div>
              </div>
              <div className="text-xs font-mono text-ttia-cream/40">mcp-server-v2.0.4</div>
            </div>

            {/* Abstract Data Viz */}
            <div className="space-y-6 font-mono text-sm">
              <div className="flex justify-between items-center border-b border-ttia-cream/10 pb-2">
                <span className="text-ttia-cream/60">Server Status</span>
                <span className="text-ttia-green flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-ttia-green animate-pulse"></span> Active</span>
              </div>
              <div className="flex justify-between items-center border-b border-ttia-cream/10 pb-2">
                 <span className="text-ttia-cream/60">Protocol</span>
                 <span className="text-ttia-orange">MCP/JSON-RPC</span>
              </div>
              
              <div className="p-4 bg-ttia-dark/50 rounded border border-ttia-cream/5 mt-4">
                <code className="text-xs text-ttia-green block mb-1">// Initializing context bridge...</code>
                <code className="text-xs text-ttia-cream block mb-1">Loading modules [Transformation, AI, Logic]</code>
                <code className="text-xs text-ttia-orange block"> System ready.</code>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute top-1/2 right-10 p-4 bg-ttia-orange rounded-xl shadow-lg transform -translate-y-1/2 translate-x-1/2">
                <Cpu size={32} className="text-ttia-dark" />
            </div>
            <div className="absolute bottom-10 left-10 p-4 bg-ttia-green rounded-xl shadow-lg transform translate-y-1/2 -translate-x-1/2">
                <Globe size={32} className="text-ttia-dark" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};