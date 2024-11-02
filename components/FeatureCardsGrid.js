import React from 'react';
import { Shield, Wallet, Zap, Headphones, BanknoteIcon, LockIcon } from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0d1321] to-[#152238] p-8">
    {/* Animated border */}
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700" />
    
    {/* Glow effect */}
    <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-400/10 via-blue-400/10 to-emerald-400/10 blur-md opacity-0 group-hover:opacity-100 transition-all duration-700" />
    
    {/* Content container */}
    <div className="relative z-10">
      {/* Icon container with animated background */}
      <div className="relative w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg rotate-0 group-hover:rotate-180 transition-transform duration-700" />
        <div className="absolute inset-[1px] bg-[#0d1321] rounded-lg flex items-center justify-center">
          <Icon className="w-8 h-8 text-emerald-400 group-hover:text-blue-400 transition-colors duration-300" strokeWidth={1.5} />
        </div>
      </div>

      {/* Text content */}
      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        {title}
      </h3>
      
      <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-blue-500/5 transition-colors duration-700" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/5 transition-colors duration-700" />
    </div>
  </div>
);

const FeatureCardsGrid = () => {
  const features = [
    {
      Icon: Headphones,
      title: "24/7 Support",
      description: "Access round-the-clock assistance with our dedicated support team, ensuring your queries are resolved swiftly and efficiently."
    },
    {
      Icon: Zap,
      title: "Lightning Fast",
      description: "Experience seamless transactions with minimal latency, powered by cutting-edge blockchain technology for optimal performance."
    },
    {
      Icon: Wallet,
      title: "Low Fees",
      description: "Enjoy competitive transaction rates and minimal gas fees, maximizing your returns while maintaining network security."
    },
    {
      Icon: Shield,
      title: "Bank-Grade Security",
      description: "Rest assured with our military-grade encryption and multi-layer security protocols protecting your assets and data."
    },
    {
      Icon: BanknoteIcon,
      title: "Smart Investing",
      description: "Access sophisticated trading tools and real-time market insights to make informed investment decisions."
    },
    {
      Icon: LockIcon,
      title: "Self-Custody",
      description: "Maintain complete control over your digital assets with secure, non-custodial wallet solutions."
    }
  ];

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            Powerful Features
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500" />
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the future of finance with our comprehensive suite of Web3 features
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCardsGrid;