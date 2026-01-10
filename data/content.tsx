import React from 'react';
import { ScatterItem } from '../types';

export const scatterItems: ScatterItem[] = [
  // --- SERVICES ---
  {
    id: 'srv-mcp',
    x: 60,
    y: 35,
    size: 1.2,
    speed: 0.4,
    shape: 'square',
    label: 'MCP Servers & Skills',
    contentType: 'service',
    rotation: 15,
    isFilled: true,
    contentData: {
      title: 'MCP & Skills -- Context',
      description: 'We build Model Context Protocol servers that empower your AI agents to interact safely and efficiently with your data and tools.',
      tags: ['AI', 'Infrastructure', 'Protocol']
    }
  },
  {
    id: 'srv-trans',
    x: 35,
    y: 55,
    size: 1.5,
    speed: 0.2,
    shape: 'arch',
    label: 'Custom GPT',
    contentType: 'service',
    isFilled: true,
    contentData: {
      title: 'Custom GPT',
      description: 'We define all the pourposes, limits and way to work of your GPT.',
      tags: ['Strategy', 'Modernization']
    }
  },
  {
    id: 'srv-integ',
    x: 65,
    y: 75,
    size: 1.1,
    speed: 0.6,
    shape: 'circle',
    label: 'Automation',
    contentType: 'service',
    isFilled: false,
    contentData: {
      title: 'Automation',
      description: 'We create automations form simple tasks to reposts, and analysis.',
      tags: ['Automation', 'Orchestration']
    }
  },
  
  // --- PRICING ---
  {
    id: 'price-start',
    x: 40,
    y: 120,
    size: 0.8,
    speed: 0.3,
    shape: 'triangle',
    label: 'Chat Bot',
    contentType: 'service',
    isFilled: true,
    rotation: -15,
    contentData: {
      name: 'Chat bots for automate responses by mail or by phone',
      price: '',
      features: ['Basic MCP Server Setup', 'Initial Consultation', 'Standard Support', '1 Month Maintenance']
    }
  },
  {
    id: 'price-pro',
    x: 55,
    y: 140,
    size: 1.3,
    speed: 0.5,
    shape: 'hex',
    label: 'Pro Plan',
    contentType: 'pricing',
    isFilled: true,
    contentData: {
      name: 'Professional',
      price: '$2,450',
      features: ['Advanced MCP Server Architecture', 'Digital Strategy Roadmap', 'Priority Support', 'Full API Integration'],
      recommended: true
    }
  },

  // --- ABOUT ---
  {
    id: 'about-us',
    x: 45,
    y: 90,
    size: 1.8,
    speed: 0.15,
    shape: 'rect-v',
    label: 'Who We Are',
    contentType: 'about',
    isFilled: true,
    contentData: {
      title: 'The Philosophy',
      text: "TTiA was founded on a simple premise: Technology should amplify human potential, not replace it. We are a team of engineers, strategists, and designers dedicated to building the backbone of the next digital era."
    }
  },

  // --- CONTACT ---
  {
    id: 'contact-main',
    x: 50,
    y: 180,
    size: 2,
    speed: 0.1,
    shape: 'arch',
    label: 'Get In Touch',
    contentType: 'contact',
    rotation: 90,
    isFilled: true,
    contentData: {}
  },

  // --- DECORATIVE / FILLER SHAPES ---
  { id: 'dec-1', x: 32, y: 5, size: 0.5, speed: 0.8, shape: 'cross', contentType: 'decorative' },
  { id: 'dec-2', x: 68, y: 10, size: 0.6, speed: 0.9, shape: 'circle', contentType: 'decorative' },
  { id: 'dec-3', x: 42, y: 25, size: 0.4, speed: 0.2, shape: 'square', contentType: 'decorative', rotation: 45 },
  { id: 'dec-4', x: 38, y: 160, size: 0.7, speed: 0.7, shape: 'triangle', contentType: 'decorative', rotation: 180 },
  { id: 'dec-5', x: 58, y: 100, size: 0.5, speed: 0.4, shape: 'rect-h', contentType: 'decorative', rotation: 180 },
  { id: 'dec-6', x: 30, y: 130, size: 0.6, speed: 0.6, shape: 'hex', contentType: 'decorative', rotation: 180 },
  { id: 'dec-7', x: 70, y: 50, size: 0.4, speed: 0.3, shape: 'cross', contentType: 'decorative',rotation: 180  },
  { id: 'dec-8', x: 48, y: 80, size: 0.3, speed: 1.2, shape: 'circle', contentType: 'decorative', isFilled: true },
];
