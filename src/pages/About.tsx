import { motion } from 'framer-motion';
import { Zap, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About <span className="text-neon-blue">Dear Coder</span></h1>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              <strong className="text-white">Dear Coder</strong> is a full-stack technology company dedicated to transforming businesses. We don't just write code; we architect the future. Our focus is on automation, artificial intelligence, and scalable solutions that drive digital transformation.
            </p>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Founded on the principle that technology should simplify life and business operations, we bridge the gap between complex engineering and practical business applications.
            </p>
            
            <div className="space-y-8 mb-10">
              <div className="bg-dark-surface p-6 rounded-xl border border-dark-border">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
                  <Zap className="text-neon-purple w-6 h-6" /> Our Vision
                </h3>
                <p className="text-gray-400">To empower businesses and individuals through intelligent technology, automation, and AI-driven solutions.</p>
              </div>
              
              <div className="bg-dark-surface p-6 rounded-xl border border-dark-border">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
                  <CheckCircle2 className="text-neon-blue w-6 h-6" /> Core Values
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 font-mono text-sm">
                  <li className="flex items-center gap-3 bg-dark-bg p-3 rounded-lg border border-dark-border"><span className="text-neon-blue">→</span> Innovation</li>
                  <li className="flex items-center gap-3 bg-dark-bg p-3 rounded-lg border border-dark-border"><span className="text-neon-blue">→</span> Quality Coding</li>
                  <li className="flex items-center gap-3 bg-dark-bg p-3 rounded-lg border border-dark-border"><span className="text-neon-blue">→</span> Client Trust</li>
                  <li className="flex items-center gap-3 bg-dark-bg p-3 rounded-lg border border-dark-border"><span className="text-neon-blue">→</span> Automation First</li>
                  <li className="flex items-center gap-3 bg-dark-bg p-3 rounded-lg border border-dark-border md:col-span-2"><span className="text-neon-blue">→</span> AI Powered Future</li>
                </ul>
              </div>
            </div>

            <a 
              href="https://wa.me/9472762864?text=Hi%20Dear%20Coder,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-gradient-neon text-white px-8 py-3 rounded-md font-bold hover:opacity-90 transition-opacity"
            >
              Contact Our Team
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-neon rounded-xl blur opacity-20"></div>
            <img src="/workspace.png" alt="Modern Tech Workspace" className="relative rounded-xl border border-dark-border w-full shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
