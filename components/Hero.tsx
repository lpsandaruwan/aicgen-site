import React from 'react';
import { Terminal as TerminalWindow } from './Terminal';
import { ArrowRight, Github } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/10 via-secondary/5 to-transparent blur-3xl -z-10" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] -z-10 animate-blob" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-success mr-2 animate-pulse" />
            v1.1.0 is now available
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            AI Config Generator
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-2">
              for better coding
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-textGray mb-10 leading-relaxed">
            Makes your project AI-ready in seconds with tailored instruction files for Claude Code, GitHub Copilot, and Gemini.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#installation"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <a 
              href="https://github.com/lpsandaruwan/aicgen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-lg border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-medium text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              <Github className="mr-2 h-5 w-5" /> View on GitHub
            </a>
          </div>
        </div>

        {/* Terminal Demo */}
        <div className="relative mx-auto max-w-4xl">
            {/* Glow effect behind terminal */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30"></div>
            <TerminalWindow />
        </div>

        {/* Supported By Logos (Simulated with text/icons for now as no assets provided) */}
        <div className="mt-20 pt-10 border-t border-white/5">
            <p className="text-center text-textGray text-sm uppercase tracking-widest mb-8">Supported Assistants</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos - styling text to look like logos */}
               <span className="font-bold text-xl text-white flex items-center gap-2"><div className="w-3 h-3 bg-[#d97757] rounded-full"></div>Claude</span>
               <span className="font-bold text-xl text-white flex items-center gap-2"><div className="w-3 h-3 bg-white rounded-full"></div>Copilot</span>
               <span className="font-bold text-xl text-white flex items-center gap-2"><div className="w-3 h-3 bg-[#4285f4] rounded-full"></div>Gemini</span>
               <span className="font-bold text-xl text-white flex items-center gap-2"><div className="w-3 h-3 bg-purple-500 rounded-full"></div>Codex</span>
            </div>
        </div>
      </div>
    </section>
  );
};