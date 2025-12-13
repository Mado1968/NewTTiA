import React from 'react';
import { BrainCircuit, Twitter, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ttia-darker border-t border-ttia-cream/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-ttia-orange rounded-full text-ttia-dark">
                 <BrainCircuit size={18} />
              </div>
              <span className="text-xl font-bold font-display tracking-wider text-ttia-cream">
                TTiA
              </span>
            </div>
            <p className="text-ttia-cream/40 text-sm leading-relaxed">
              Empowering businesses through intelligent server architecture and digital strategy.
            </p>
          </div>

          <div>
            <h4 className="text-ttia-cream font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-ttia-cream/60">
              <li><a href="#about" className="hover:text-ttia-green transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-ttia-green transition-colors">Careers</a></li>
              <li><a href="#privacy" className="hover:text-ttia-green transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-ttia-cream font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-ttia-cream/60">
              <li><a href="#services" className="hover:text-ttia-green transition-colors">MCP Servers</a></li>
              <li><a href="#services" className="hover:text-ttia-green transition-colors">Consulting</a></li>
              <li><a href="#services" className="hover:text-ttia-green transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-ttia-cream font-bold mb-6">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-ttia-dark rounded-full text-ttia-cream/60 hover:text-ttia-orange hover:bg-ttia-cream transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-ttia-dark rounded-full text-ttia-cream/60 hover:text-ttia-orange hover:bg-ttia-cream transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-ttia-dark rounded-full text-ttia-cream/60 hover:text-ttia-orange hover:bg-ttia-cream transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ttia-cream/5 pt-8 text-center text-xs text-ttia-cream/30">
          <p>&copy; {new Date().getFullYear()} TTiA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};