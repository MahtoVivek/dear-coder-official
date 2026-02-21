import { Globe, Rocket } from 'lucide-react';

const Pitch = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Startup <span className="text-neon-blue">Pitch & Strategy</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Our go-to-market strategy and core value proposition.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Marketing Strategy */}
          <div className="bg-dark-bg p-8 rounded-2xl border border-dark-border">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-neon-purple" />
              <h2 className="text-2xl font-bold text-white">Marketing Strategy</h2>
            </div>
            
            <div className="space-y-8 text-gray-400">
              <div>
                <h3 className="text-white font-semibold mb-3 text-lg border-b border-dark-border pb-2">Target Audience</h3>
                <p>Startups seeking MVPs, established businesses needing digital transformation, entrepreneurs with tech ideas, educational institutes requiring platforms, and digital creators needing automation.</p>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-3 text-lg border-b border-dark-border pb-2">Positioning</h3>
                <p>Positioned as a premium, developer-friendly technology partner that bridges the gap between complex AI/Cloud technologies and practical business applications.</p>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-3 text-lg border-b border-dark-border pb-2">Channels</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Content Marketing:</strong> Tech blogs, open-source contributions, and AI tutorials.</li>
                  <li><strong>Social Media:</strong> Twitter/X (developer community), LinkedIn (B2B leads).</li>
                  <li><strong>Community Building:</strong> Hosting hackathons, webinars, and a Discord server for tech enthusiasts.</li>
                  <li><strong>Partnerships:</strong> Collaborating with startup incubators and VC firms.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Startup Pitch */}
          <div className="bg-gradient-to-br from-dark-bg to-dark-surface p-8 rounded-2xl border border-neon-blue/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 blur-3xl rounded-full"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <Rocket className="w-8 h-8 text-neon-blue" />
              <h2 className="text-2xl font-bold text-white">The Startup Pitch</h2>
            </div>
            
            <div className="space-y-8 text-gray-300 relative z-10">
              <p className="text-xl italic border-l-4 border-neon-blue pl-6 py-2 bg-dark-bg/50 rounded-r-lg">
                "The digital landscape is evolving faster than ever. Businesses are struggling to integrate AI, automate workflows, and build scalable platforms. That's where we come in."
              </p>
              
              <div className="bg-dark-bg/50 p-6 rounded-xl border border-dark-border">
                <h3 className="text-white font-semibold mb-2 text-lg">The Problem</h3>
                <p>Companies waste time and resources trying to stitch together disparate technologies, lacking the unified architecture needed for true AI and automation integration.</p>
              </div>
              
              <div className="bg-dark-bg/50 p-6 rounded-xl border border-dark-border">
                <h3 className="text-white font-semibold mb-2 text-lg">The Solution</h3>
                <p><strong>Dear Coder</strong> provides end-to-end technology solutions. We don't just build websites or apps; we build intelligent ecosystems. From cloud infrastructure to AI agents, we provide a unified approach to digital transformation.</p>
              </div>
              
              <div className="bg-dark-bg/50 p-6 rounded-xl border border-dark-border">
                <h3 className="text-white font-semibold mb-2 text-lg">The Opportunity</h3>
                <p>With businesses rapidly adopting AI, our "Automation First, AI Powered" approach positions us perfectly to capture the growing demand for smart, scalable tech infrastructure.</p>
              </div>
              
              <a 
                href={`https://wa.me/9472762864?text=${encodeURIComponent(`Hi Dear Coder, I would like to request your full Startup Pitch Deck.`)}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-6 block text-center w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Request Full Pitch Deck
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
