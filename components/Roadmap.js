import React from 'react';

const roadmapData = [
  {
    title: 'Project Announcement',
    description: 'Confirmed start of the Econox Project',
    percentage: 20,
    status: 'In Progress',
  },
  {
    title: 'Community Building',
    description: 'Launch of Community platform which is a web- based application for our community.',
    percentage: 40,
    status: 'Completed',
  },
  {
    title: 'Econox Token Presale',
    description: 'General waitlist distributed across the community for conducting CLT token presale of the allocated 2 million CLT',
    percentage: 60,
    status: 'In Progress',
  },
  {
    title: 'Econox Mining',
    description: 'Launch of the Econox app for Android and IOS - Implement mining to Facilitate token distribution and grow the community into millions',
    percentage: 80,
    status: 'Completed',
  },
  {
    title: 'Public Econox Token Sale - ICO',
    description: 'General Public sale of allocated 15 Million CLT tokens, sold in three phases: Phase 1 - 5 Million CLT ($0.09), Phase 2 - 5 Million CLT ($0.12), Phase 3 - 5 Million CLT ($0.15)',
    percentage: 100,
    status: 'Upcoming',
  },
];

const RoadmapItem = ({ title, description, percentage, status, index }) => (
  <div className={`flex ${index % 2 === 0 ? 'flex-col' : 'flex-col-reverse'} items-center w-64 mx-4 md:mx-8`}>
    <div className={`w-full p-4 bg-gray-800 rounded-lg shadow-lg ${index % 2 === 0 ? 'mb-4' : 'mt-4'}`}>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
        {percentage}%
      </div>
      <div className="w-1 h-16 bg-gray-600" />
      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
        status === 'Completed' ? 'bg-green-500' :
        status === 'In Progress' ? 'bg-yellow-500' :
        'bg-blue-500'
      } text-white`}>
        {status}
      </div>
    </div>
  </div>
);

const Roadmap = () => {
  return (
    <div className="w-full py-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Econox Project Roadmap</h2>
      <div className="overflow-x-auto pb-8">
        <div className="flex justify-start items-center min-w-max px-4 md:px-8">
          {roadmapData.map((item, index) => (
            <RoadmapItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;