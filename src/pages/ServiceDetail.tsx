import { Smartphone, Globe, Bot, Cloud, Zap, Cpu, Rocket, Monitor, Code2, ArrowLeft } from 'lucide-react';

const serviceDetails = {
  "mobile-app-development": {
    title: "Mobile App Development",
    icon: <Smartphone className="w-12 h-12 text-neon-blue" />,
    description: "We build native and cross-platform mobile experiences that engage users and drive business growth. From concept to App Store deployment, we handle the entire lifecycle of mobile application development.",
    features: ["iOS & Android Native Apps", "React Native & Flutter", "UI/UX Optimization", "App Store Deployment"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
  },
  "website-design-dev": {
    title: "Website Design & Dev",
    icon: <Globe className="w-12 h-12 text-neon-blue" />,
    description: "Modern, responsive, and high-performance web applications tailored to your specific needs. We utilize the latest frameworks like React and Next.js to ensure your site is fast, accessible, and SEO-friendly.",
    features: ["Custom React/Next.js Apps", "E-commerce Platforms", "CMS Integration", "SEO Optimization"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
  },
  "ai-agent-development": {
    title: "AI Agent Development",
    icon: <Bot className="w-12 h-12 text-neon-blue" />,
    description: "Intelligent autonomous agents designed to automate complex tasks and enhance user interactions. We integrate cutting-edge Large Language Models (LLMs) to create custom AI solutions for customer support, data analysis, and internal workflows.",
    features: ["Custom LLM Integration", "Automated Customer Support", "Data Analysis Agents", "Workflow Automation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
  },
  "saas-product-dev": {
    title: "SaaS Product Dev",
    icon: <Cloud className="w-12 h-12 text-neon-blue" />,
    description: "End-to-end software as a service architecture, building scalable and secure cloud-based products. We help you build multi-tenant architectures with robust subscription management and API integrations.",
    features: ["Multi-tenant Architecture", "Subscription Management", "Cloud Infrastructure", "API Development"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
  },
  "automation-solutions": {
    title: "Automation Solutions",
    icon: <Cpu className="w-12 h-12 text-neon-blue" />,
    description: "Streamlining your business workflows to save time, reduce human error, and increase efficiency. We implement Robotic Process Automation (RPA) and custom scripts to handle repetitive tasks.",
    features: ["Business Process Automation", "RPA Integration", "Custom Scripts", "Data Pipeline Automation"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
  },
  "digital-transformation": {
    title: "Digital Transformation",
    icon: <Zap className="w-12 h-12 text-neon-blue" />,
    description: "Modernizing legacy systems and processes for the digital-first era. We guide organizations through the complex journey of adopting cloud technologies and optimizing their digital strategy.",
    features: ["Legacy System Migration", "Cloud Adoption", "Digital Strategy", "Process Optimization"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    icon: <Monitor className="w-12 h-12 text-neon-blue" />,
    description: "Creating user-centric interfaces that are intuitive, accessible, and visually striking. Our design process relies heavily on user research, wireframing, and building comprehensive design systems.",
    features: ["Wireframing & Prototyping", "User Research", "Visual Design", "Design Systems"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000"
  },
  "cloud-api-integration": {
    title: "Cloud & API Integration",
    icon: <Code2 className="w-12 h-12 text-neon-blue" />,
    description: "Connecting disparate systems seamlessly with robust cloud architectures and custom APIs. We architect microservices on AWS, GCP, or Azure and build secure REST or GraphQL APIs.",
    features: ["REST/GraphQL APIs", "Third-party Integrations", "AWS/GCP/Azure", "Microservices"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000"
  },
  "startup-tech-consulting": {
    title: "Startup Tech Consulting",
    icon: <Rocket className="w-12 h-12 text-neon-blue" />,
    description: "Strategic technical guidance for startups to build scalable MVPs and navigate growth. We act as your fractional CTO, helping you select the right tech stack and build a solid technical architecture from day one.",
    features: ["Technical Architecture", "MVP Development", "Technology Stack Selection", "Scaling Strategies"],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
  }
};

const ServiceDetail = ({ id, onBack }: { id: string, onBack: () => void }) => {
  const service = serviceDetails[id as keyof typeof serviceDetails];

  if (!service) return <div>Service not found</div>;

  return (
    <div className="pt-32 pb-20 min-h-screen bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-400 hover:text-neon-blue mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-6">{service.icon}</div>
            <h1 className="text-4xl font-bold text-white mb-6">{service.title}</h1>
            <p className="text-xl text-gray-400 mb-8">{service.description}</p>
            
            <h3 className="text-2xl font-semibold text-white mb-4">Key Capabilities</h3>
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-300">
                  <span className="text-neon-purple mr-3">▹</span> {feature}
                </li>
              ))}
            </ul>

            <a 
              href={`https://wa.me/9472762864?text=${encodeURIComponent(`Hi Dear Coder, I am interested in your ${service.title} service. Can we discuss a project?`)}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-10 inline-block bg-gradient-neon text-white px-8 py-3 rounded-md font-bold hover:opacity-90 transition-opacity"
            >
              Discuss Your Project
            </a>
          </div>
          
          <div>
            <img 
              src={service.image} 
              alt={service.title} 
              className="rounded-xl border border-dark-border w-full h-[400px] object-cover shadow-2xl glow-box-blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
