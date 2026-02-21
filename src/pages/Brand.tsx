const Brand = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Brand <span className="text-neon-blue">Identity</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Innovative, Smart, Futuristic, Professional, Developer-Friendly.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <img src="/logo-concept.png" alt="Dear Coder Logo Concept" className="rounded-2xl border border-dark-border w-full shadow-2xl glow-box-blue sticky top-32" />
          </div>
          
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-dark-border pb-4">The Logo Concept</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                The logo embodies the intersection of human intellect and artificial intelligence. Abstract geometric shapes form code brackets that seamlessly transition into a stylized brain motif. The dark background highlights the glowing neon blue and purple accents, representing our focus on modern, cutting-edge technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-dark-surface p-8 rounded-2xl border border-dark-border">
                <h3 className="text-xl text-white font-semibold mb-6">Color Palette</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#050505] border border-gray-700 shadow-lg"></div>
                    <div>
                      <p className="text-white font-medium">Void Black</p>
                      <p className="text-gray-500 font-mono text-sm">#050505</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#111111] border border-gray-700 shadow-lg"></div>
                    <div>
                      <p className="text-white font-medium">Surface Dark</p>
                      <p className="text-gray-500 font-mono text-sm">#111111</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.5)]"></div>
                    <div>
                      <p className="text-white font-medium">Neon Blue</p>
                      <p className="text-gray-500 font-mono text-sm">#00f0ff</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#b026ff] shadow-[0_0_15px_rgba(176,38,255,0.5)]"></div>
                    <div>
                      <p className="text-white font-medium">Neon Purple</p>
                      <p className="text-gray-500 font-mono text-sm">#b026ff</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-surface p-8 rounded-2xl border border-dark-border">
                <h3 className="text-xl text-white font-semibold mb-6">Typography</h3>
                <div className="space-y-8">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Primary Font</p>
                    <p className="font-sans text-3xl text-white font-bold">Inter</p>
                    <p className="font-sans text-gray-500 mt-2">Aa Bb Cc Dd Ee Ff Gg 0123456789</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Code / Accent Font</p>
                    <p className="font-mono text-2xl text-neon-blue">JetBrains Mono</p>
                    <p className="font-mono text-gray-500 mt-2">Aa Bb Cc Dd Ee Ff 0123456789</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-dark-surface to-dark-bg p-8 rounded-2xl border border-dark-border">
              <h3 className="text-xl text-white font-semibold mb-6">Official Taglines</h3>
              <div className="flex flex-col gap-4">
                <div className="p-4 border border-dark-border rounded-lg bg-dark-bg">
                  <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">"Code the Future"</p>
                </div>
                <div className="p-4 border border-dark-border rounded-lg bg-dark-bg">
                  <p className="text-xl font-bold text-white">"Where Ideas Become Technology"</p>
                </div>
                <div className="p-4 border border-dark-border rounded-lg bg-dark-bg">
                  <p className="text-xl font-bold text-gray-300">"Build Smart. Scale Fast."</p>
                </div>
                <div className="p-4 border border-dark-border rounded-lg bg-dark-bg">
                  <p className="text-xl font-bold text-neon-blue font-mono">"AI Powered Development"</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <a 
                href="https://wa.me/9472762864?text=Hi%20Dear%20Coder,%20I%20love%20your%20brand%20identity.%20Let's%20build%20something!" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-gradient-neon text-white px-8 py-3 rounded-md font-bold hover:opacity-90 transition-opacity"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
