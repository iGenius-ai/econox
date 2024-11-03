import React from 'react';
import { Check, Clock, HourglassIcon } from 'lucide-react';

const roadmapData = [
  {
    title: 'Project Announcement',
    description: 'Confirmed start of the Econox Project',
    percentage: 0,
    status: 'In Progress',
  },
  {
    title: 'Econox Mining',
    description: 'Launch of Community platform which is a web-based application for our community.',
    percentage: 20,
    status: 'Completed',
  },
  {
    title: 'Econox Token Presale',
    description: 'General waitlist distributed across the community for conducting CLT token presale of the allocated 2 million CLT',
    percentage: 40,
    status: 'In Progress',
  },
  {
    title: 'Econox Mining',
    description: 'Launch of the Econox app for Android and IOS - Implement mining to Facilitate token distribution and grow the community into millions',
    percentage: 60,
    status: 'Completed',
  },
  {
    title: 'Public Econox Token Sale - ICO',
    description: 'General Public sale of allocated 15 Million CLT tokens, sold in three phases: Phase 1 - 5 Million CLT ($0.09), Phase 2 - 5 Million CLT ($0.12), Phase 3 - 5 Million CLT ($0.15)',
    percentage: 80,
    status: 'Upcoming',
  },
];

const StatusIcon = ({ status }) => {
  switch (status) {
    case 'Completed':
      return <Check className="w-5 h-5 text-emerald-400" />;
    case 'In Progress':
      return <Clock className="w-5 h-5 text-amber-400 animate-pulse" />;
    default:
      return <HourglassIcon className="w-5 h-5 text-blue-400" />;
  }
};

const RoadmapItem = ({ title, description, percentage, status, index }) => (
  <div className="relative group">
    {/* Connection line */}
    <div className="absolute top-1/2 w-full h-0.5 bg-gradient-to-r from-emerald-400/20 via-blue-400/20 to-emerald-400/20" />
    
    {/* Card */}
    <div className="relative w-72 transition-transform duration-300 group-hover:-translate-y-2">
      {/* Percentage circle */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
        <div className="relative">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-400 to-blue-400 animate-pulse" />
          <div className="absolute inset-0.5 rounded-full bg-[#0d1321] flex items-center justify-center">
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              {percentage}%
            </span>
          </div>
        </div>
      </div>

      {/* Content card */}
      <div className="mt-8 p-6 pb-10 rounded-xl bg-gradient-to-b from-[#152238] to-[#0d1321] border border-emerald-400/10 relative overflow-hidden group">
        {/* Animated border gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-blue-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Status badge */}
        <div className={`absolute bottom-2 right-2 flex items-center gap-2 rounded-full px-3 py-1 ${
          status === 'Completed' ? 'bg-emerald-400/20 text-emerald-400' :
          status === 'In Progress' ? 'bg-amber-400/20 text-amber-400' :
          'bg-blue-400/20 text-blue-400'
        }`}>
          <StatusIcon status={status} />
          <span className="text-xs">{status}</span>
        </div>

        <h3 className="text-xl mt-4 font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-2 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const Roadmap = () => {
  return (
    <div className="w-full pt-16 pb-8 px-2 md:px-4 overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 text-transparent bg-clip-text mb-4">
            Our Project Roadmap
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400" />
        </div>

        {/* Roadmap timeline */}
        <div className="relative overflow-x-auto pb-8">
          <div className="flex gap-8 min-w-max px-8">
            {roadmapData.map((item, index) => (
              <RoadmapItem key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;