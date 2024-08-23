import React from 'react';
import { Shield, PiggyBank, TrendingUp, Lock } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon }) => (
  <div className="glassmorphism rounded-xl p-6 sm:p-10 py-12 sm:py-16 flex items-center justify-between h-full">
    <div>
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm md:text-lg flex-grow">{description}</p>
    </div>
    <div className="">
      <Icon className="text-[#0b6477] w-20 h-20 sm:w-28 sm:h-28" color={"#45DFB1"} />
    </div>
  </div>
);

const FeatureCardsGrid = () => {
  const features = [
    {
      title: "Reliable Support",
      description: "24/7 assistance for swift issue resolution.",
      icon: Shield
    },
    {
      title: "Fast Transactions",
      description: "Seamless operations with minimal delays.",
      icon: TrendingUp
    },
    {
      title: "Low Fees",
      description: "Competitive rates to maximize your returns.",
      icon: PiggyBank
    },
    {
      title: "Robust Security",
      description: "Advanced measures to protect your assets and data.",
      icon: Lock
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h2 className='font-bold text-3xl sm:text-4xl text-center mb-10 mt-4'>Our Great Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeatureCardsGrid;