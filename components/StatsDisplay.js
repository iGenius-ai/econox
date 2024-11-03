import React from 'react';
import { Users, Download, Wallet, Globe } from 'lucide-react';

const StatsItem = ({ Icon, value, label }) => (
  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0d1321] to-[#152238] w-[47%] md:w-[24%] p-6 py-8 md:py-12">
    {/* Animated border gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-[#0051ff] to-emerald-400 opacity-75 blur-md animate-border-flow" />
    
    {/* Inner content container */}
    <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-[#0d1321] to-[#152238]" />
    
    {/* Moving gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-[#0051ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />
    
    <div className="relative flex flex-col items-center justify-center text-center z-10">
      <div className="p-3 rounded-xl bg-emerald-400/10 mb-4 group-hover:bg-emerald-400/20 transition-colors duration-300">
        <Icon className="w-8 h-8 md:w-10 md:h-10 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" strokeWidth={1.5} />
      </div>
      
      <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mt-2 mb-1">
        {value}
      </h3>
      
      <p className="text-sm md:text-base text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">
        {label}
      </p>
    </div>
  </div>
);

const StatsDisplay = () => {
  const stats = [
    { Icon: Users, value: '4M+', label: 'Registered Users' },
    { Icon: Download, value: '1M+', label: 'PlayStore Downloads' },
    { Icon: Wallet, value: '97M+', label: 'Distributed (ENX)' },
    { Icon: Globe, value: '123+', label: 'Countries' },
  ];

  return (
    <div className="w-full py-10 px-2 md:px-4">
      <div className="container mx-auto">
        {/* Add header section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Our Global Impact
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Empowering millions worldwide through our growing ecosystem
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {stats.map((stat, index) => (
            <StatsItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsDisplay;