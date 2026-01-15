import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Installation } from './components/Installation';
import { OutputPreview } from './components/OutputPreview';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <OutputPreview />
        <Installation />
        
        {/* Statistics Section */}
        <section className="py-16 border-t border-white/5 bg-[#1e1b4b]/30">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div className="text-4xl font-bold text-primary mb-2">91</div>
                    <div className="text-textGray text-sm uppercase tracking-wider">Guidelines</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-secondary mb-2">12</div>
                    <div className="text-textGray text-sm uppercase tracking-wider">Categories</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-primary mb-2">9</div>
                    <div className="text-textGray text-sm uppercase tracking-wider">Languages</div>
                </div>
                 <div>
                    <div className="text-4xl font-bold text-secondary mb-2">5</div>
                    <div className="text-textGray text-sm uppercase tracking-wider">Assistants</div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;