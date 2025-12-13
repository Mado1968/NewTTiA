import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$950',
    features: [
      'Basic MCP Server Setup',
      'Initial Consultation',
      'Standard Support',
      '1 Month Maintenance',
      'Basic Integration'
    ],
  },
  {
    name: 'Professional',
    price: '$2,450',
    features: [
      'Advanced MCP Server Architecture',
      'Digital Strategy Roadmap',
      'Priority Support',
      '3 Months Maintenance',
      'Full API Integration',
      'Security Audit'
    ],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Enterprise-grade Infrastructure',
      'Dedicated Dev Team',
      '24/7 Priority Support',
      'Annual Maintenance Plan',
      'Custom AI Model Training',
      'On-premise Deployment Options'
    ],
  },
];

export const Prices: React.FC = () => {
  return (
    <div className="bg-ttia-dark py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
             <h2 className="text-4xl font-display font-bold text-ttia-cream mb-4">Investment Plans</h2>
             <p className="text-ttia-cream/60">
               Transparent pricing tailored to your project's scale and complexity.
             </p>
          </div>
          <div className="hidden md:block">
             <span className="text-ttia-orange font-mono text-sm">Prices are indicative starting points</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                tier.recommended 
                  ? 'bg-ttia-darker border-ttia-orange shadow-2xl transform md:-translate-y-4 z-10' 
                  : 'bg-ttia-dark border-ttia-cream/10 hover:border-ttia-green/30'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ttia-orange text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-xl font-bold mb-2 ${tier.recommended ? 'text-ttia-orange' : 'text-ttia-cream'}`}>
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-ttia-cream">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-ttia-cream/40 text-sm">/project</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-ttia-cream/70 text-sm">
                    <Check size={16} className={tier.recommended ? 'text-ttia-orange' : 'text-ttia-green'} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 ${
                  tier.recommended 
                    ? 'bg-ttia-orange text-white hover:bg-ttia-orange/90' 
                    : 'bg-ttia-cream/10 text-ttia-cream hover:bg-ttia-cream hover:text-ttia-dark'
                }`}
              >
                Choose Plan
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};