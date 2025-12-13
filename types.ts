import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
  isError?: boolean;
}

// New Types for Scatter Design
export type ShapeType = 'square' | 'circle' | 'triangle' | 'rect-h' | 'rect-v' | 'arch' | 'cross' | 'hex';

export type ContentType = 'service' | 'pricing' | 'about' | 'contact' | 'hero' | 'decorative';

export interface ScatterItem {
  id: string;
  x: number; // Percentage 0-100
  y: number; // approx px or vh
  size: number; // scale multiplier
  speed: number; // Parallax speed factor
  shape: ShapeType;
  label?: string; // Hover label
  contentType: ContentType;
  contentData?: any; // Data to show in modal
  rotation?: number;
  isFilled?: boolean;
}
