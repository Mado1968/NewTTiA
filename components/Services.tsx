import React from 'react';
import { Server, Lightbulb, Layers, Code2, Zap, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'MCP Server Design',
    description: 'We build Model Context Protocol servers that empower your AI agents to interact safely and efficiently with your data and tools.',
    icon: <Server className="w-8 h-8" />,
  },
  {
    title: 'Digital Transformation',
    description: 'Strategic consulting to modernize your legacy systems, improving operational efficiency through cutting-edge digital solutions.',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: 'Third-Party Integration',
    description: 'Seamlessly connect and orchestrate disparate software solutions into a unified, powerful ecosystem.',
    icon: <Layers className="w-8 h-8" />,
  },
  {
    title: 'Custom Development',
    description: 'Tailor-made software solutions designed to address the unique challenges of your specific industry niche.',
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    title: 'Tech Consulting',
    description: 'Expert guidance on technology stacks, architecture, and scalability to future-proof your business.',
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    title: 'Security & Compliance',
    description: 'Ensuring your digital assets and server infrastructures meet rigorous security standards and protocols.',
    icon: <ShieldCheck className="w-8 h-8" />,
  }
];

export const Services: React.FC = () => {
  return (
    <div className="bg-ttia-darker py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-ttia-cream mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-ttia-orange mx-auto rounded-full mb-6"></div>
          <p className="text-ttia-cream/60 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business infrastructure and capability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-ttia-dark rounded-2xl border border-ttia-cream/5 hover:border-ttia-green/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-ttia-darker rounded-xl flex items-center justify-center text-ttia-green mb-6 group-hover:bg-ttia-green group-hover:text-ttia-dark transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-ttia-cream mb-3">{service.title}</h3>
              <p className="text-ttia-cream/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};