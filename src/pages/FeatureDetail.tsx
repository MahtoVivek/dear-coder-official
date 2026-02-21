import { Layers, Zap, Bot, ShieldCheck, ArrowLeft, Check } from 'lucide-react';

const featureDetails = {
  "full-stack-expertise": {
    title: "Full-Stack Expertise",
    icon: <Layers className="w-12 h-12 text-neon-blue" />,
    description: "From frontend UI/UX to complex backend architectures and cloud deployments, we handle the entire tech lifecycle in-house.",
    keyPoints: [
      "Frontend Development: React, Next.js, Tailwind CSS, Framer Motion",
      "Backend Architecture: Node.js, Python, Serverless, Microservices",
      "Database Management: PostgreSQL, MongoDB, Redis, Supabase",
      "Cloud Infrastructure: AWS, Google Cloud, Vercel, Docker",
      "UI/UX Design: Figma, Wireframing, Prototyping, User Testing"
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
  },
  "innovation-first": {
    title: "Innovation First",
    icon: <Zap className="w-12 h-12 text-neon-blue" />,
    description: "We don't just use standard templates. We build custom, modern solutions utilizing the latest frameworks to keep you ahead of the curve.",
    keyPoints: [
      "Modern Tech Stack: Always utilizing the latest stable frameworks",
      "Custom Solutions: Tailor-made architecture for your specific business needs",
      "Performance Optimization: Lightning-fast load times and seamless interactions",
      "Continuous R&D: Exploring new technologies to provide better solutions",
      "Agile Methodology: Fast iterations and continuous delivery"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
  },
  "ai-native-approach": {
    title: "AI-Native Approach",
    icon: <Bot className="w-12 h-12 text-neon-blue" />,
    description: "We integrate AI and automation into the core of your products, giving your business a massive competitive advantage.",
    keyPoints: [
      "LLM Integration: OpenAI, Anthropic, Open-source models",
      "Custom AI Agents: Autonomous bots for specific business tasks",
      "Workflow Automation: Connecting tools to save hundreds of manual hours",
      "Predictive Analytics: Using machine learning to forecast trends",
      "NLP & Chatbots: Human-like conversational interfaces"
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
  },
  "reliable-scalable": {
    title: "Reliable & Scalable",
    icon: <ShieldCheck className="w-12 h-12 text-neon-blue" />,
    description: "Clean code, robust architecture, and enterprise-grade security ensure your applications run smoothly as you scale.",
    keyPoints: [
      "Enterprise Security: Best practices in data protection and encryption",
      "Scalable Architecture: Systems designed to handle millions of users",
      "Clean Codebases: Maintainable, well-documented, and tested code",
      "24/7 Monitoring: Proactive issue detection and resolution",
      "Automated CI/CD: Safe and reliable deployment pipelines"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000"
  }
};

const FeatureDetail = ({ id, onBack }: { id: string, onBack: () => void }) => {
  const feature = featureDetails[id as keyof typeof featureDetails];

  if (!feature) return <div>Feature not found</div>;

  return (
    <div className="pt-32 pb-20 min-h-screen bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-400 hover:text-neon-blue mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-6">{feature.icon}</div>
            <h1 className="text-4xl font-bold text-white mb-6">{feature.title}</h1>
            <p className="text-xl text-gray-400 mb-8">{feature.description}</p>
            
            <div className="bg-dark-surface p-8 rounded-2xl border border-dark-border mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Points & Capabilities</h3>
              <ul className="space-y-4">
                {feature.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href={`https://wa.me/9472762864?text=${encodeURIComponent(`Hi Dear Coder, I am interested in your ${feature.title} capabilities.`)}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-gradient-neon text-white px-8 py-3 rounded-md font-bold hover:opacity-90 transition-opacity"
            >
              Discuss Your Project
            </a>
          </div>
          
          <div>
            <img 
              src={feature.image} 
              alt={feature.title} 
              className="rounded-xl border border-dark-border w-full h-full min-h-[400px] object-cover shadow-2xl glow-box-blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetail;
