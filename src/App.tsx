import { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Bot, Cloud, Cpu, Rocket, Terminal, MessageSquare, Workflow, PhoneCall, HeadphonesIcon, UserCircle, ExternalLink, Code, ShieldCheck, Zap, Layers, Check, Mail, MapPin, Github, Twitter } from 'lucide-react';
import ServiceDetail from './pages/ServiceDetail';
import FeatureDetail from './pages/FeatureDetail';
import AISolutionDetail from './pages/AISolutionDetail';
import AboutPage from './pages/About';
import PitchPage from './pages/Pitch';
import BrandPage from './pages/Brand';

type Page = 'home' | 'about' | 'brand' | 'pitch' | { type: 'service', id: string } | { type: 'feature', id: string } | { type: 'ai-solution', id: string };

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    if (typeof currentPage === 'object') {
      if (currentPage.type === 'service') {
        return <ServiceDetail id={currentPage.id} onBack={() => navigateTo('home')} />;
      }
      if (currentPage.type === 'feature') {
        return <FeatureDetail id={currentPage.id} onBack={() => navigateTo('home')} />;
      }
      if (currentPage.type === 'ai-solution') {
        return <AISolutionDetail id={currentPage.id} onBack={() => navigateTo('home')} />;
      }
    }

    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'brand':
        return <BrandPage />;
      case 'pitch':
        return <PitchPage />;
      case 'home':
      default:
        return (
          <main className="flex-grow">
            <Hero />
            <AboutPreview navigateTo={navigateTo} />
            <Services onServiceClick={(id) => navigateTo({ type: 'service', id })} />
            <WhyChooseUs onFeatureClick={(id) => navigateTo({ type: 'feature', id })} />
            <AISolutions onSolutionClick={(id) => navigateTo({ type: 'ai-solution', id })} />
            <PortfolioPreview />
            <PricingPlans />
            <BrandPreview navigateTo={navigateTo} />
            <StrategyPitchPreview navigateTo={navigateTo} />
            <ContactSection />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar navigateTo={navigateTo} currentPage={currentPage} />
      {renderPage()}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}

const Navbar = ({ navigateTo, currentPage }: { navigateTo: (page: Page) => void, currentPage: Page }) => (
  <nav className="fixed w-full z-50 top-0 border-b border-dark-border bg-dark-bg/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <button onClick={() => navigateTo('home')} className="flex items-center gap-2">
          <Terminal className="w-8 h-8 text-neon-blue" />
          <span className="font-mono font-bold text-xl tracking-tighter text-white">
            Dear<span className="text-neon-purple">Coder</span>_
          </span>
        </button>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            <button 
              onClick={() => navigateTo('about')} 
              className={`${currentPage === 'about' ? 'text-neon-blue' : 'text-gray-300'} hover:text-neon-blue transition-colors px-3 py-2 rounded-md text-sm font-medium`}
            >
              About
            </button>
            <button 
              onClick={() => navigateTo('home')} 
              className={`${currentPage === 'home' ? 'text-neon-blue' : 'text-gray-300'} hover:text-neon-blue transition-colors px-3 py-2 rounded-md text-sm font-medium`}
            >
              Services
            </button>
            <button 
              onClick={() => navigateTo('brand')} 
              className={`${currentPage === 'brand' ? 'text-neon-blue' : 'text-gray-300'} hover:text-neon-blue transition-colors px-3 py-2 rounded-md text-sm font-medium`}
            >
              Brand
            </button>
            <button 
              onClick={() => navigateTo('pitch')} 
              className={`${currentPage === 'pitch' ? 'text-neon-blue' : 'text-gray-300'} hover:text-neon-blue transition-colors px-3 py-2 rounded-md text-sm font-medium`}
            >
              Pitch
            </button>
            <a href={`https://wa.me/9472762864?text=${encodeURIComponent("Hi Dear Coder, I'm interested in starting a project with you!")}`} target="_blank" rel="noopener noreferrer" className="bg-gradient-neon text-white px-5 py-2.5 rounded-md text-sm font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              Start Building
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/40 via-dark-bg/80 to-dark-bg"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px] animate-[pulse_4s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-[pulse_6s_ease-in-out_infinite_reverse]"></div>
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark-border bg-dark-surface/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse shadow-[0_0_10px_rgba(0,240,255,0.8)]"></span>
          <span className="text-sm font-mono text-gray-300">Dear Coder • Technology Partner</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          AI Powered App & <br className="hidden md:block" />
          <span className="text-gradient-neon">Website Development Company</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
          We build smart apps, modern websites, and AI automation solutions for startups and businesses.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`https://wa.me/9472762864?text=${encodeURIComponent("Hi Dear Coder, I want to get started with a project.")}`} target="_blank" rel="noopener noreferrer" className="bg-gradient-neon text-white px-8 py-4 rounded-md font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            Get Started <Rocket className="w-5 h-5" />
          </a>
          <a href={`https://wa.me/9472762864?text=${encodeURIComponent("Hi Dear Coder, I would like to book a free consultation.")}`} target="_blank" rel="noopener noreferrer" className="border border-dark-border bg-dark-surface hover:border-neon-purple/50 text-white px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center gap-2">
            Book Free Consultation
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const AboutPreview = ({ navigateTo }: { navigateTo: (page: Page) => void }) => (
  <section id="about" className="py-20 bg-dark-bg relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Empowering through <span className="text-neon-blue">Intelligent Technology</span></h2>
          <p className="text-gray-400 mb-6 text-lg leading-relaxed">
            <strong className="text-white">Dear Coder</strong> is a full-stack technology company dedicated to transforming businesses. We don't just write code; we architect the future. Our focus is on automation, artificial intelligence, and scalable solutions that drive digital transformation.
          </p>
          
          <button 
            onClick={() => navigateTo('about')}
            className="text-neon-blue font-medium hover:text-white transition-colors flex items-center gap-2"
          >
            Learn more about us <span>→</span>
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-neon rounded-xl blur opacity-20"></div>
          <img src="/workspace.png" alt="Modern Tech Workspace" className="relative rounded-xl border border-dark-border w-full shadow-2xl" />
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = ({ onServiceClick }: { onServiceClick: (id: string) => void }) => {
  const services = [
    { id: "mobile-app-development", icon: <Smartphone className="w-6 h-6" />, title: "App Development", desc: "Native & cross-platform mobile experiences for iOS and Android." },
    { id: "website-design-dev", icon: <Globe className="w-6 h-6" />, title: "Website Design", desc: "Modern, responsive, and high-performance web applications." },
    { id: "ai-agent-development", icon: <Bot className="w-6 h-6" />, title: "AI Agent Solutions", desc: "Intelligent autonomous agents to automate complex workflows." },
    { id: "automation-solutions", icon: <Cpu className="w-6 h-6" />, title: "Automation Systems", desc: "Streamlining operations to save time and reduce human error." },
    { id: "cloud-api-integration", icon: <Cloud className="w-6 h-6" />, title: "Cloud Integration", desc: "Connecting systems seamlessly with robust cloud architectures." },
    { id: "startup-tech-consulting", icon: <Rocket className="w-6 h-6" />, title: "Startup Tech Consulting", desc: "Strategic guidance to build scalable MVPs and navigate growth." },
  ];

  return (
    <section id="services" className="py-24 bg-dark-surface relative border-y border-dark-border overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our <span className="text-neon-blue">Services</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Comprehensive technology solutions designed for startups, enterprises, and digital creators.</p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              onClick={() => onServiceClick(service.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer relative"
            >
              {/* Card Background & Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-border/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full bg-dark-bg border border-dark-border p-8 rounded-2xl hover:border-neon-blue/30 transition-all duration-300 transform group-hover:-translate-y-1 shadow-lg group-hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)]">
                
                {/* Icon Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-xl bg-dark-surface border border-dark-border flex items-center justify-center text-neon-blue group-hover:text-white group-hover:bg-neon-blue group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full border border-dark-border flex items-center justify-center text-gray-500 group-hover:border-neon-blue group-hover:text-neon-blue transition-colors">
                    <span className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">→</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = ({ onFeatureClick }: { onFeatureClick: (id: string) => void }) => {
  const features = [
    {
      id: "full-stack-expertise",
      icon: <Layers className="w-8 h-8" />,
      title: "Full-Stack Expertise",
      desc: "From frontend UI/UX to complex backend architectures and cloud deployments, we handle the entire tech lifecycle in-house."
    },
    {
      id: "innovation-first",
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation First",
      desc: "We don't just use standard templates. We build custom, modern solutions utilizing the latest frameworks like React and Next.js."
    },
    {
      id: "ai-native-approach",
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Native Approach",
      desc: "We integrate AI and automation into the core of your products, giving your business a massive competitive advantage."
    },
    {
      id: "reliable-scalable",
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Reliable & Scalable",
      desc: "Clean code, robust architecture, and enterprise-grade security ensure your applications run smoothly as you scale."
    }
  ];

  return (
    <section className="py-24 bg-dark-bg border-y border-dark-border relative overflow-hidden">
      {/* Background abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Why Choose <span className="text-neon-blue">Dear Coder</span>?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">We are more than just an agency; we are your dedicated technical partners committed to your success.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              onClick={() => onFeatureClick(feature.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row gap-6 p-8 rounded-2xl bg-dark-surface/30 border border-dark-border hover:border-neon-purple/50 hover:bg-dark-surface/80 transition-all group cursor-pointer"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center text-neon-purple group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(176,38,255,0.2)] group-hover:bg-neon-purple/10 transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-purple transition-colors">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4 flex-grow">{feature.desc}</p>
                <div className="inline-flex items-center text-neon-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                  View key points <span className="ml-2">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AISolutions = ({ onSolutionClick }: { onSolutionClick: (id: string) => void }) => {
  const solutions = [
    { id: "ai-chatbot-development", icon: <MessageSquare className="w-8 h-8" />, title: "AI Chatbot Development", desc: "Custom LLM-powered chatbots that understand context, handle complex queries, and integrate with your existing data." },
    { id: "business-automation-ai", icon: <Workflow className="w-8 h-8" />, title: "Business Automation AI", desc: "Smart agents that automate repetitive tasks, data entry, and internal workflows to multiply your team's productivity." },
    { id: "whatsapp-ai-bot", icon: <PhoneCall className="w-8 h-8" />, title: "WhatsApp AI Bot", desc: "Engage customers 24/7 directly on WhatsApp with intelligent bots capable of sales, booking, and answering FAQs." },
    { id: "customer-support-ai", icon: <HeadphonesIcon className="w-8 h-8" />, title: "Customer Support AI", desc: "Level up your helpdesk with AI that instantly resolves tier-1 tickets and seamlessly hands over complex issues to humans." },
    { id: "personal-ai-assistant", icon: <UserCircle className="w-8 h-8" />, title: "Personal AI Assistant", desc: "Bespoke AI assistants trained on your personal or company knowledge base to help you research, write, and analyze." },
  ];

  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden border-b border-dark-border">
      {/* Background styling */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-5 mix-blend-screen"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:flex md:justify-between md:items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/5 mb-4">
              <Bot className="w-4 h-4 text-neon-blue" />
              <span className="text-xs font-mono text-neon-blue uppercase tracking-wider">Next-Gen Intelligence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Solutions by <span className="text-neon-blue">Dear Coder</span></h2>
            <p className="text-gray-400 text-lg">We build custom AI infrastructure that transforms how your business operates, communicates, and scales.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <a href={`https://wa.me/9472762864?text=${encodeURIComponent("Hi Dear Coder, I want to integrate AI into my business.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md font-bold hover:bg-gray-200 transition-colors">
              Build an AI Bot <Bot className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              onClick={() => onSolutionClick(solution.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl border border-dark-border bg-dark-surface/50 backdrop-blur-sm hover:border-neon-blue/50 transition-colors group flex flex-col cursor-pointer ${index === 0 ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-dark-surface to-dark-bg relative overflow-hidden' : ''}`}
            >
              {index === 0 && <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-[50px] pointer-events-none"></div>}
              
              <div className="w-16 h-16 rounded-2xl bg-dark-bg border border-dark-border flex items-center justify-center text-neon-blue mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                {solution.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">{solution.title}</h3>
              <p className="text-gray-400 leading-relaxed flex-grow mb-6">{solution.desc}</p>
              
              <div className="inline-flex items-center gap-2 text-neon-blue font-medium opacity-0 group-hover:opacity-100 transition-all mt-auto w-fit">
                View capabilities <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioPreview = () => {
  const projects = [
    {
      title: "FinTech Dashboard AI",
      category: "SaaS & AI",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      tech: ["React", "Node.js", "OpenAI", "AWS"],
      desc: "An intelligent financial dashboard that predicts cash flow using machine learning and provides natural language querying of financial data."
    },
    {
      title: "HealthTrack Mobile",
      category: "App Development",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
      tech: ["React Native", "Firebase", "HealthKit"],
      desc: "A cross-platform mobile application that aggregates health data from wearables to provide personalized AI-driven health insights."
    },
    {
      title: "AutoCRM Bot",
      category: "Automation AI",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
      tech: ["Python", "LangChain", "WhatsApp API"],
      desc: "An autonomous WhatsApp bot that handles lead qualification, books meetings directly into calendars, and syncs with Salesforce."
    }
  ];

  return (
    <section className="py-24 bg-dark-surface border-b border-dark-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Featured <span className="text-neon-purple">Work</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">A selection of recent projects showcasing our expertise in app development, web design, and AI integration.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-dark-bg border border-dark-border hover:border-neon-purple/50 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(176,38,255,0.1)] flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-dark-bg/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-dark-bg/80 backdrop-blur-md border border-dark-border rounded-full text-xs font-mono text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{project.desc}</p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-dark-surface border border-dark-border rounded text-xs text-gray-300 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <a 
                  href={`https://wa.me/9472762864?text=${encodeURIComponent(`Hi Dear Coder, I saw your ${project.title} project and I'd like to build something similar.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-lg border border-dark-border bg-dark-surface hover:bg-neon-purple hover:text-white hover:border-neon-purple transition-all flex items-center justify-center gap-2 text-sm font-bold text-gray-300 group-hover:text-white"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo / Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingPlans = () => {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for early-stage startups and small businesses needing a digital presence.",
      price: "Custom",
      features: [
        "Landing Page / Simple Website",
        "Basic Mobile App (MVP)",
        "Standard UI/UX Design",
        "Basic SEO Optimization",
        "1 Month Free Support"
      ],
      cta: "Start Basic",
      popular: false
    },
    {
      name: "Professional",
      desc: "Ideal for growing companies needing scalable apps and AI automation.",
      price: "Custom",
      features: [
        "Full-Stack Web Application",
        "Cross-Platform Mobile App",
        "Basic AI Chatbot Integration",
        "Workflow Automation Scripts",
        "Advanced Analytics Dashboard",
        "3 Months Free Support"
      ],
      cta: "Go Professional",
      popular: true
    },
    {
      name: "Enterprise",
      desc: "For large organizations requiring complex architecture and deep AI integration.",
      price: "Custom",
      features: [
        "Enterprise SaaS Architecture",
        "Custom LLM & AI Agents",
        "Legacy System Modernization",
        "Advanced Cloud Infrastructure",
        "Dedicated Engineering Team",
        "24/7 Priority Support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-dark-bg border-b border-dark-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Flexible <span className="text-neon-blue">Pricing</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Every project is unique. We offer custom-tailored packages based on your specific technical requirements and scale.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-2xl border ${plan.popular ? 'border-neon-purple bg-dark-surface/80 shadow-[0_0_30px_rgba(176,38,255,0.15)] transform md:-translate-y-4' : 'border-dark-border bg-dark-surface/30'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-neon text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm h-10">{plan.desc}</p>
              </div>
              
              <div className="mb-8 pb-8 border-b border-dark-border">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-gray-500 ml-2">/ project</span>
              </div>
              
              <ul className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-neon-purple' : 'text-neon-blue'}`} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/9472762864?text=${encodeURIComponent(`Hi Dear Coder, I am interested in the ${plan.name} package.`)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-lg font-bold flex justify-center items-center transition-all ${plan.popular ? 'bg-gradient-neon text-white hover:opacity-90' : 'bg-dark-bg border border-dark-border text-white hover:border-neon-blue'}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BrandPreview = ({ navigateTo }: { navigateTo: (page: Page) => void }) => (
  <section id="brand" className="py-20 bg-dark-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Brand <span className="text-neon-blue">Identity</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Innovative, Smart, Futuristic, Professional, Developer-Friendly.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <img src="/logo-concept.png" alt="Dear Coder Logo Concept" className="rounded-xl border border-dark-border w-full shadow-lg glow-box-blue" />
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">The Logo Concept</h3>
            <p className="text-gray-400">
              The logo embodies the intersection of human intellect and artificial intelligence. Abstract geometric shapes form code brackets that seamlessly transition into a stylized brain motif.
            </p>
            <button 
              onClick={() => navigateTo('brand')}
              className="mt-4 text-neon-blue font-medium hover:text-white transition-colors flex items-center gap-2"
            >
              View full brand guidelines <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StrategyPitchPreview = ({ navigateTo }: { navigateTo: (page: Page) => void }) => (
  <section id="pitch" className="py-20 bg-dark-surface border-t border-dark-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Marketing Strategy */}
        <div className="bg-dark-bg p-8 rounded-2xl border border-dark-border">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-8 h-8 text-neon-purple" />
            <h2 className="text-2xl font-bold text-white">Marketing Strategy</h2>
          </div>
          
          <div className="space-y-6 text-gray-400">
            <p>Positioned as a premium, developer-friendly technology partner that bridges the gap between complex AI/Cloud technologies and practical business applications.</p>
            <button 
              onClick={() => navigateTo('pitch')}
              className="text-neon-purple font-medium hover:text-white transition-colors flex items-center gap-2"
            >
              Read full strategy <span>→</span>
            </button>
          </div>
        </div>

        {/* Startup Pitch */}
        <div className="bg-gradient-to-br from-dark-bg to-dark-surface p-8 rounded-2xl border border-neon-blue/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 blur-3xl rounded-full"></div>
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <Rocket className="w-8 h-8 text-neon-blue" />
            <h2 className="text-2xl font-bold text-white">The Startup Pitch</h2>
          </div>
          
          <div className="space-y-6 text-gray-300 relative z-10">
            <p className="text-lg italic border-l-2 border-neon-blue pl-4">
              "The digital landscape is evolving faster than ever. Businesses are struggling to integrate AI, automate workflows, and build scalable platforms. That's where we come in."
            </p>
            
            <button 
              onClick={() => navigateTo('pitch')}
              className="mt-4 w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              View Full Pitch Deck
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-dark-surface border-t border-dark-border relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Let's Build <span className="text-neon-purple">Together</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Ready to transform your ideas into reality? Get in touch with our team today.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info & Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-dark-bg p-8 rounded-2xl border border-dark-border shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-8">Direct Contact</h3>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/9472762864" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-dark-border bg-dark-surface hover:border-neon-blue/50 hover:bg-dark-surface/80 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">WhatsApp Chat</p>
                    <p className="text-gray-400 text-sm">Fastest response time</p>
                  </div>
                  <div className="ml-auto text-gray-500 group-hover:text-neon-blue transition-colors">→</div>
                </a>

                <a 
                  href="mailto:hello@dearcoder.in" 
                  className="flex items-center gap-4 p-4 rounded-xl border border-dark-border bg-dark-surface hover:border-neon-purple/50 hover:bg-dark-surface/80 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email Us</p>
                    <p className="text-gray-400 text-sm">hello@dearcoder.in</p>
                  </div>
                  <div className="ml-auto text-gray-500 group-hover:text-neon-purple transition-colors">→</div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-dark-border bg-dark-surface">
                  <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Global Remote</p>
                    <p className="text-gray-400 text-sm">Available worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 p-8 rounded-2xl border border-dark-border text-center">
              <h3 className="text-xl font-bold text-white mb-3">Not sure where to start?</h3>
              <p className="text-gray-400 mb-6 text-sm">Book a 30-minute discovery call to discuss your technical needs.</p>
              <a 
                href={`https://wa.me/9472762864?text=${encodeURIComponent("Hi Dear Coder, I would like to book a free 30-minute consultation.")}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md font-bold hover:bg-gray-200 transition-colors"
              >
                Book Free Consultation <PhoneCall className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-dark-bg p-8 rounded-2xl border border-dark-border shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              // Prevent default, open WhatsApp with form data
              const formData = new FormData(e.target as HTMLFormElement);
              const name = formData.get('name');
              const service = formData.get('service');
              const message = formData.get('message');
              const waText = `Hi Dear Coder, my name is ${name}. I am interested in ${service}. Message: ${message}`;
              window.open(`https://wa.me/9472762864?text=${encodeURIComponent(waText)}`, '_blank');
            }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">Interested Service</label>
                <select 
                  id="service" 
                  name="service"
                  className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors appearance-none"
                >
                  <option value="App Development">App Development</option>
                  <option value="Website Design">Website Design</option>
                  <option value="AI Solutions">AI Solutions</option>
                  <option value="Startup Consulting">Startup Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-neon text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Send Message <Rocket className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Footer = ({ navigateTo }: { navigateTo: (page: Page) => void }) => (
  <footer className="bg-dark-bg border-t border-dark-border py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <button onClick={() => navigateTo('home')} className="flex items-center gap-2 mb-4 md:mb-0">
          <Terminal className="w-6 h-6 text-neon-blue" />
          <span className="font-mono font-bold text-lg tracking-tighter text-white">
            Dear<span className="text-neon-purple">Coder</span>_
          </span>
        </button>
        
        <div className="flex gap-6 text-sm text-gray-500 font-mono">
          <a href="https://x.com/VivekAr83386839" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors flex items-center gap-2">
            <Twitter className="w-4 h-4" /> Twitter
          </a>
          <a href="https://github.com/MahtoVivek" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors flex items-center gap-2">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="https://wa.me/9472762864" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors flex items-center gap-2">
            <MessageSquare className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Dear Coder. Build Smart. Scale Fast.
      </div>
    </div>
  </footer>
);

export default App;
