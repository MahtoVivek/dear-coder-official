import { MessageSquare, Workflow, PhoneCall, HeadphonesIcon, UserCircle, ArrowLeft, Check } from 'lucide-react';

const solutionDetails = {
  "ai-chatbot-development": {
    title: "AI Chatbot Development",
    icon: <MessageSquare className="w-12 h-12 text-neon-blue" />,
    description: "Custom LLM-powered chatbots that understand context, handle complex queries, and integrate seamlessly with your existing data sources.",
    keyPoints: [
      "RAG (Retrieval-Augmented Generation) for accurate, company-specific answers",
      "Context-aware memory for long-running, natural conversations",
      "Multi-language support for global customer bases",
      "Deep integration with your internal databases and APIs",
      "Comprehensive analytics dashboard for conversation insights"
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
  },
  "business-automation-ai": {
    title: "Business Automation AI",
    icon: <Workflow className="w-12 h-12 text-neon-blue" />,
    description: "Smart agents that automate repetitive tasks, data entry, and internal workflows to multiply your team's productivity and eliminate human error.",
    keyPoints: [
      "Custom Python scripts and AI-driven data extraction (OCR)",
      "Automated CRM updating and data syncing across platforms",
      "Intelligent document parsing and categorization",
      "Scheduled reporting and anomaly detection",
      "Seamless integration with Zapier, Make, and custom webhooks"
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
  },
  "whatsapp-ai-bot": {
    title: "WhatsApp AI Bot",
    icon: <PhoneCall className="w-12 h-12 text-neon-blue" />,
    description: "Engage customers 24/7 directly on WhatsApp with intelligent bots capable of sales, booking, and answering FAQs in natural language.",
    keyPoints: [
      "Official WhatsApp Business API integration",
      "Automated lead qualification and data collection",
      "Direct appointment scheduling and calendar syncing",
      "Product catalog browsing and payment link generation",
      "Rich media support (images, documents, voice notes)"
    ],
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=1000"
  },
  "customer-support-ai": {
    title: "Customer Support AI",
    icon: <HeadphonesIcon className="w-12 h-12 text-neon-blue" />,
    description: "Level up your helpdesk with AI that instantly resolves tier-1 tickets and seamlessly hands over complex issues to human agents.",
    keyPoints: [
      "Integration with Zendesk, Intercom, Freshdesk, and more",
      "Instant resolution for up to 70% of common customer queries",
      "Intelligent ticket routing based on sentiment and urgency",
      "Automated refund processing and order tracking",
      "Continuous learning from past human agent responses"
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000"
  },
  "personal-ai-assistant": {
    title: "Personal AI Assistant",
    icon: <UserCircle className="w-12 h-12 text-neon-blue" />,
    description: "Bespoke AI assistants trained on your personal or company knowledge base to help you research, write, and analyze faster than ever.",
    keyPoints: [
      "Trained exclusively on your documents, emails, and notes",
      "Voice and text interfaces for seamless interaction",
      "Automated email drafting in your specific tone of voice",
      "Meeting transcription and automated action-item generation",
      "Strict data privacy and localized deployment options"
    ],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000"
  }
};

const AISolutionDetail = ({ id, onBack }: { id: string, onBack: () => void }) => {
  const solution = solutionDetails[id as keyof typeof solutionDetails];

  if (!solution) return <div>Solution not found</div>;

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
            <div className="mb-6">{solution.icon}</div>
            <h1 className="text-4xl font-bold text-white mb-6">{solution.title}</h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">{solution.description}</p>
            
            <div className="bg-dark-surface p-8 rounded-2xl border border-dark-border mb-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Capabilities & Highlights</h3>
              <ul className="space-y-4">
                {solution.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href={`https://wa.me/9472762864?text=${encodeURIComponent(`Hi Dear Coder, I am interested in building a ${solution.title} solution. Can we discuss?`)}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-gradient-neon text-white px-8 py-3 rounded-md font-bold hover:opacity-90 transition-opacity"
            >
              Build this AI Solution
            </a>
          </div>
          
          <div>
            <img 
              src={solution.image} 
              alt={solution.title} 
              className="rounded-xl border border-dark-border w-full h-full min-h-[400px] object-cover shadow-2xl glow-box-blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutionDetail;
