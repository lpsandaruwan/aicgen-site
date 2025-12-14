import React from 'react';
import { Folder, FileText, FileJson } from 'lucide-react';

export const OutputPreview: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b]/20 to-[#0f172a]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Crystal Clear <span className="text-primary">Configuration</span>
            </h2>
            <p className="text-textGray mb-8 text-lg">
              aicgen doesn't just create empty files. It generates a complete, structured, and opinionated configuration ecosystem tailored to your specific architecture and language.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Language-specific best practices",
                "Architecture-aware folder structures",
                "Automated agent instructions",
                "Consistent coding standards"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-300">
                  <div className="h-2 w-2 rounded-full bg-success shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Representation of Output */}
          <div className="bg-card border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            <div className="flex border-b border-white/5 bg-[#0f172a]/50">
              <div className="px-4 py-3 text-sm font-medium text-white border-b-2 border-primary">Claude Code</div>
              <div className="px-4 py-3 text-sm font-medium text-textGray hover:text-white cursor-pointer">GitHub Copilot</div>
              <div className="px-4 py-3 text-sm font-medium text-textGray hover:text-white cursor-pointer">Gemini</div>
            </div>
            
            <div className="p-6 font-mono text-sm">
                <div className="flex items-center space-x-2 text-primary mb-2">
                    <FileText size={16} />
                    <span>CLAUDE.md</span>
                </div>
                <div className="pl-4 border-l border-white/10 ml-2 space-y-2">
                    <div className="flex items-center space-x-2 text-gray-300">
                        <Folder size={16} className="text-secondary" />
                        <span>.claude/</span>
                    </div>
                    <div className="pl-6 space-y-2">
                         <div className="flex items-center space-x-2 text-gray-400">
                            <FileJson size={16} />
                            <span>settings.json</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300">
                            <Folder size={16} className="text-secondary" />
                            <span>guidelines/</span>
                        </div>
                        <div className="pl-6 space-y-1 text-gray-500">
                             <div>├── language.md</div>
                             <div>├── architecture.md</div>
                             <div>├── testing.md</div>
                             <div>└── security.md</div>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300 pt-1">
                            <Folder size={16} className="text-secondary" />
                            <span>agents/</span>
                        </div>
                        <div className="pl-6 text-gray-500">
                             <div>└── guideline-checker.md</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};