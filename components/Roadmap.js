import Image from 'next/image';
import React from 'react';

const roadmapData = [
  {
    title: 'Project Announcement',
    description: 'Confirmed start of the Econox Project',
    percentage: 0,
    status: 'In Progress',
  },
  {
    title: 'Econox Mining',
    description: 'Launch of Community platform which is a web- based application for our community.',
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

const RoadmapItem = ({ title, description, percentage, status, index }) => (
  <div className={`relative roadmap flex flex-col w-1/4`}>
    <div className={`flex flex-col justify-center items-center w-[150px] -ml-[58px]`}>
      <div className="w-20 h-20 rounded-full flex items-center justify-center custom-size bg-[#363645] font-semibold text-[#0AD1C8] text-center mb-5 text-3xl">
        {percentage} 
        <span className='text-base'>%</span>
      </div>
      <p className={`rounded-full py-1 px-2 text-sm text-center ${
        status === 'Completed' ? 'bg-green-500' :
        status === 'In Progress' ? 'bg-yellow-500' :
        'bg-blue-500'
      }`}>{status}</p>
    </div>
    <div className="w-full px-14 py-16 mt-5 float-left overflow-hidden h-[295px] relative">
      <div className='absolute left-0 top-0 h-full z-[1]'>
        <Image alt="Pin Icon" loading="lazy" width={10} height={10} decoding="async" className='pin text-transparent w-auto h-auto' src="/round-pin.svg"/>
      </div>
      <p className='text-lg font-bold mb-3'>{title}</p>
      <div>{description}</div>
    </div>
  </div>
);

const Roadmap = () => {
  return (
    <div className="w-full py-12 overflow-hidden mb-10">
      <h2 className="text-3xl font-bold text-center text-white">Econox Project Roadmap</h2>
      <div className="float-left w-full overflow-x-auto overflow-y-hidden py-10 px-10 relative mt-4 mb-5 scroll-smooth roadmap-box">
        <div className="float-left w-[1840px] relative mx-auto flex z-40 h-[30rem]">
          {roadmapData.map((item, index) => (
            <RoadmapItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;