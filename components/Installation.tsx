import React, { useState, useEffect } from 'react';
import { Copy, Check, Download, Terminal } from 'lucide-react';
import { InstallPlatform } from '../types';

export const Installation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<InstallPlatform>('npm');
  const [copied, setCopied] = useState(false);

  // Auto-detect platform
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('win')) setActiveTab('windows');
    else if (ua.includes('mac')) setActiveTab('mac');
    else if (ua.includes('linux')) setActiveTab('linux');
    else setActiveTab('npm');
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs: { id: InstallPlatform; label: string }[] = [
    { id: 'npm', label: 'npm (Rec.)' },
    { id: 'windows', label: 'Windows' },
    { id: 'mac', label: 'macOS' },
    { id: 'linux', label: 'Linux' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'npm':
        return (
          <div className="space-y-4">
            <div className="bg-[#0f172a] rounded-lg p-4 border border-white/10 relative group">
              <div className="text-textGray text-sm mb-2"># Install globally</div>
              <code className="text-primary font-mono text-sm sm:text-base block">npm install -g @aicgen/aicgen</code>
              <button 
                onClick={() => handleCopy('npm install -g @aicgen/aicgen')}
                className="absolute right-4 top-4 p-2 rounded hover:bg-white/10 text-textGray hover:text-white transition-colors"
                aria-label="Copy command"
              >
                {copied ? <Check size={18} className="text-success" /> : <Copy size={18} />}
              </button>
            </div>
            <div className="bg-[#0f172a] rounded-lg p-4 border border-white/10 relative group">
              <div className="text-textGray text-sm mb-2"># Or use via npx (no install)</div>
              <code className="text-secondary font-mono text-sm sm:text-base block">npx @aicgen/aicgen init</code>
              <button 
                 onClick={() => handleCopy('npx @aicgen/aicgen init')}
                 className="absolute right-4 top-4 p-2 rounded hover:bg-white/10 text-textGray hover:text-white transition-colors"
                 aria-label="Copy command"
              >
                 <Copy size={18} />
              </button>
            </div>
          </div>
        );
      case 'windows':
        return (
          <div className="text-center py-6">
             <a 
              href="https://github.com/lpsandaruwan/aicgen/releases/latest"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            >
              <Download className="mr-2" size={20} />
              Download Windows Installer (.exe)
            </a>
            <p className="mt-4 text-textGray text-sm">Includes automatic PATH configuration.</p>
          </div>
        );
      case 'mac':
        return (
            <div className="text-center py-6">
             <a 
              href="https://github.com/lpsandaruwan/aicgen/releases/latest"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-background font-medium hover:bg-gray-100 transition-colors"
            >
              <Download className="mr-2" size={20} />
              Download macOS Package (.pkg)
            </a>
            <p className="mt-4 text-textGray text-sm">Standard macOS installer signed & notarized.</p>
          </div>
        );
      case 'linux':
        return (
          <div className="space-y-4">
             <div className="bg-[#0f172a] rounded-lg p-4 border border-white/10 font-mono text-sm">
                <div className="text-gray-500 mb-2"># Debian / Ubuntu</div>
                <div className="flex justify-between items-center">
                    <span className="text-green-400">sudo dpkg -i aicgen_amd64.deb</span>
                </div>
             </div>
             <div className="bg-[#0f172a] rounded-lg p-4 border border-white/10 font-mono text-sm">
                <div className="text-gray-500 mb-2"># RedHat / Fedora</div>
                <div className="flex justify-between items-center">
                    <span className="text-red-400">sudo rpm -i aicgen_x86_64.rpm</span>
                </div>
             </div>
             <div className="text-center mt-4">
                <a href="https://github.com/lpsandaruwan/aicgen/releases/latest" className="text-primary hover:text-secondary underline underline-offset-4 text-sm">
                    View all Linux releases on GitHub
                </a>
             </div>
          </div>
        );
    }
  };

  return (
    <section id="installation" className="py-20 bg-[#0b1021]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Install Anywhere</h2>
          <p className="text-textGray">Choose your preferred installation method.</p>
        </div>

        <div className="bg-card rounded-2xl p-2 md:p-8 border border-white/5 shadow-xl">
          <div className="flex flex-wrap justify-center space-x-2 mb-8 border-b border-white/10 pb-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors relative top-[1px] ${
                  activeTab === tab.id
                    ? 'text-primary border-b-2 border-primary bg-[#0f172a]'
                    : 'text-textGray hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="min-h-[200px] flex flex-col justify-center">
             {renderContent()}
          </div>
        </div>

        {/* Quick Start for CLI visual */}
        <div className="mt-16 text-center">
             <p className="text-textGray mb-4 uppercase tracking-wider text-xs font-semibold">Quick Start</p>
             <div className="inline-block p-[1px] rounded-lg bg-gradient-to-r from-primary to-secondary">
                <div className="bg-[#0f172a] rounded-lg px-8 py-4 flex items-center space-x-3">
                    <Terminal size={20} className="text-secondary" />
                    <span className="font-mono text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        aicgen init
                    </span>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};