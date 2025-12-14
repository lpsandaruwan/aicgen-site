import React from 'react';
import { Github, Twitter } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1021] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
                <Logo className="h-8 w-auto" />
                <span className="ml-2 text-xl font-bold text-white">aicgen</span>
            </div>
            <p className="text-textGray text-sm max-w-xs">
              Configuration generator for AI coding assistants. Make your project AI-ready in seconds.
            </p>
          </div>

          <div className="flex space-x-6">
            <a 
                href="https://github.com/lpsandaruwan/aicgen" 
                className="text-textGray hover:text-white transition-colors"
                aria-label="GitHub"
            >
              <Github size={24} />
            </a>
             <a 
                href="https://www.npmjs.com/package/@aicgen/aicgen" 
                className="text-textGray hover:text-white transition-colors font-bold text-xl tracking-tighter"
                aria-label="NPM"
            >
              npm
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-textGray">
          <p>© {new Date().getFullYear()} Lahiru Sandaruwan. MIT License.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
             <span className="px-2 py-1 rounded bg-white/5 text-xs">v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};