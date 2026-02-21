import { motion } from 'framer-motion';
import { Smartphone, Globe, Bot, Cloud, Zap, Cpu, Rocket, Monitor, Code2 } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <Smartphone />, title: "Mobile App Development", desc: "Native and cross-platform mobile experiences that engage users." },
    { icon: <Globe />, title: "Website Design & Dev", desc: "Modern, responsive, and high-performance web applications." },
    { icon: <Bot />, title: "AI Agent Development", desc: "Intelligent autonomous agents to automate complex tasks." },
    { icon: <Cloud />, title: "SaaS Product Dev", desc: "End-to-end software as a service architecture and building." },
    { icon: <Cpu />, title: "Automation Solutions", desc: "Streamlining workflows to save time and reduce human error." },
    { icon: <Zap />, title: "Digital Transformation", desc: "Modernizing legacy systems for the digital-first era." },
    { icon: <Monitor />, title: "UI/UX Design", desc: "User-centric interfaces that are intuitive and visually striking." },
    { icon: <Code2 />, title: "Cloud & API Integration", desc: "Connecting systems seamlessly with robust cloud architectures." },
    { icon: <Rocket />, title: "Startup Tech Consulting", desc: "Strategic guidance for startups to build scalable MVP and beyond." },
  ];

  return (
    <section id="services" className="py-20 bg-dark-surface relative border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Full-Stack <span className="text-neon-purple">Capabilities</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive technology solutions designed for startups, enterprises, and digital creators.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-bg border border-dark-border p-6 rounded-xl hover:border-neon-blue/50 transition-colors group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center text-neon-blue mb-4 group-hover:bg-neon-blue/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
              <div className="flex items-center text-neon-purple text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <span className="ml-1">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
