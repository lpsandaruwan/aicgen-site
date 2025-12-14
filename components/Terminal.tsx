import React, { useState, useEffect } from 'react';

export const Terminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const steps = [
    { text: "> navigate to project...", delay: 500 },
    { text: "> aicgen init", delay: 1500 },
    { text: "✔  Analyzing project structure...", delay: 2500, color: "text-blue-400" },
    { text: "? Select AI Assistant › Claude Code", delay: 3500, color: "text-primary" },
    { text: "? Choose Architecture › Modular Monolith", delay: 4500, color: "text-primary" },
    { text: "✔  Configuration generated successfully!", delay: 5500, color: "text-success" },
    { text: "  + .claude/settings.json", delay: 6000, color: "text-textGray" },
    { text: "  + .claude/guidelines/architecture.md", delay: 6200, color: "text-textGray" },
    { text: "  + .claude/agents/checker.md", delay: 6400, color: "text-textGray" },
    { text: "> Ready to code.", delay: 7000, color: "text-white" }
  ];

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    
    // Reset loop
    const runAnimation = () => {
      setLines([]);
      steps.forEach((step) => {
        const timeout = setTimeout(() => {
          setLines((prev) => [...prev, step.text]);
        }, step.delay);
        timeouts.push(timeout);
      });
    };

    runAnimation();
    const loop = setInterval(runAnimation, 9000);

    return () => {
      clearInterval(loop);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden bg-[#1e1b4b] border border-[#8b5cf6]/30 shadow-2xl shadow-primary/10 font-mono text-sm relative">
      <div className="bg-[#0f172a]/80 px-4 py-2 flex items-center space-x-2 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <div className="ml-2 text-xs text-textGray">bash — aicgen</div>
      </div>
      <div className="p-4 h-[300px] overflow-y-auto">
        {lines.map((line, idx) => (
          <div key={idx} className={`${steps[idx]?.color || 'text-gray-300'} mb-1`}>
            {line}
          </div>
        ))}
        <div className="animate-pulse inline-block w-2 h-4 bg-primary align-middle ml-1"></div>
      </div>
    </div>
  );
};