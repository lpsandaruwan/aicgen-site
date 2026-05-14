import React from 'react';
import { Layers, Shield, Zap, Box, Code, Cpu, ArrowRight } from 'lucide-react';
import { Feature } from '../types';
import { SITE_DATA } from '../config/site-data';

const featureCards: Feature[] = [
  {
    title: SITE_DATA.features.multiAssistant.title,
    description: SITE_DATA.features.multiAssistant.description,
    icon: Cpu,
  },
  {
    title: SITE_DATA.features.guidelines.title,
    description: SITE_DATA.features.guidelines.description,
    icon: Shield,
  },
  {
    title: SITE_DATA.features.interactiveCLI.title,
    description: SITE_DATA.features.interactiveCLI.description,
    icon: Zap,
  },
  {
    title: SITE_DATA.features.hooksSubAgents.title,
    description: SITE_DATA.features.hooksSubAgents.description,
    icon: Code,
  },
  {
    title: SITE_DATA.features.architectureAware.title,
    description: SITE_DATA.features.architectureAware.description,
    icon: Layers,
  },
  {
    title: SITE_DATA.features.zeroDependencies.title,
    description: SITE_DATA.features.zeroDependencies.description,
    icon: Box,
  },
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

        {/* SDLC Workflows — featured full-width card */}
        <div className="mb-8 relative group rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent p-8 hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="lg:w-72 shrink-0">
              <div className="inline-flex items-center px-2 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-medium mb-3">
                New in v{SITE_DATA.version}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">SDLC Workflow Commands</h3>
              <p className="text-textGray text-sm leading-relaxed">
                {SITE_DATA.stats.workflows} slash commands injected into every generated config. Structured delivery from requirements to PR — with web research and infrastructure preference built in.
              </p>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SITE_DATA.sdlcWorkflow.commands.map((cmd, i) => (
                  <div key={i} className="bg-[#0f172a]/80 rounded-lg p-3 border border-white/5 hover:border-primary/30 transition-colors">
                    <div className="font-mono text-primary text-sm font-semibold mb-1">{cmd.name}</div>
                    <div className="text-textGray text-xs leading-relaxed">{cmd.description}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center text-xs text-textGray">
                <span className="font-mono text-primary/70">/spec</span>
                <ArrowRight className="h-3 w-3 mx-1 text-white/20" />
                <span className="font-mono text-primary/70">/research</span>
                <ArrowRight className="h-3 w-3 mx-1 text-white/20" />
                <span className="font-mono text-primary/70">/plan</span>
                <ArrowRight className="h-3 w-3 mx-1 text-white/20" />
                <span className="font-mono text-primary/70">/build</span>
                <ArrowRight className="h-3 w-3 mx-1 text-white/20" />
                <span className="font-mono text-primary/70">/check</span>
                <ArrowRight className="h-3 w-3 mx-1 text-white/20" />
                <span className="font-mono text-primary/70">/ship</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regular feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl p-6 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#0f172a] flex items-center justify-center mb-4 border border-white/10 group-hover:border-primary/50 transition-all duration-300">
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
