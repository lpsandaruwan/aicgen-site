import React from 'react';
import { Terminal, Settings, FileCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
    const steps = [
        {
            id: 1,
            title: "Run Init",
            description: "Navigate to your project root and run the initialization command.",
            icon: Terminal,
            command: "aicgen init"
        },
        {
            id: 2,
            title: "Configure",
            description: "Select your AI assistant and architecture pattern via the interactive wizard.",
            icon: Settings,
            command: "Select Assistant › Claude"
        },
        {
            id: 3,
            title: "Generated",
            description: "Get a tailored set of guidelines, rules, and hook configurations instantly.",
            icon: FileCheck,
            command: "✔ Config Generated"
        }
    ];

  return (
    <section id="how-it-works" className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                <p className="text-textGray">Zero friction setup. From terminal to AI-ready in seconds.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 z-0"></div>

                {steps.map((step) => (
                    <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-2xl bg-[#1e1b4b] border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
                            <step.icon size={40} className="text-primary group-hover:text-secondary transition-colors" />
                        </div>
                        <div className="bg-white/5 rounded px-3 py-1 mb-4 text-xs font-mono text-primary/80 border border-white/5">
                            {step.command}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                        <p className="text-textGray max-w-xs">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};