import React from 'react';
import { Layers, Shield, Zap, Box, Code, Cpu } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Multi-Assistant Support",
    description: "Supports Claude Code, GitHub Copilot, Gemini, Antigravity, and Codex out of the box.",
    icon: Cpu
  },
  {
    title: "75+ Guidelines",
    description: "Comprehensive coverage across 12 categories including Security, API Design, and Performance.",
    icon: Shield
  },
  {
    title: "Interactive CLI Wizard",
    description: "Professional setup wizard with smart defaults, back navigation, and auto-detection.",
    icon: Zap
  },
  {
    title: "Hooks & Sub-Agents",
    description: "Auto-generates verification agents and hooks specifically for Claude Code workflows.",
    icon: Code
  },
  {
    title: "Architecture Aware",
    description: "Tailors guidelines for Microservices, Hexagonal, Modular Monoliths, and Event-Driven systems.",
    icon: Layers
  },
  {
    title: "Zero Dependencies",
    description: "Self-contained binary with all guideline data embedded. Works completely offline.",
    icon: Box
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Everything you need
            </span>{" "}
            to make your project AI-ready
          </h2>
          <p className="text-textGray max-w-2xl mx-auto text-lg">
            Standardize your AI assistant's context with professional-grade configuration files.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-card rounded-xl p-6 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#0f172a] flex items-center justify-center mb-4 border border-white/10 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-textGray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};