import React from 'react';
import Image from 'next/image';

const StatsItem = ({ icon, value, label }) => (
  <div className="bg-[#213a57] relative overflow-hidden border border-[#213a57] stats-group rounded-lg p-6 py-6 md:py-10 w-[47%] md:w-[24%] flex flex-col items-center justify-center text-center group">
    <Image src={icon} width={100} height={100} alt='Person' className='w-[45px] z-10' />
    <h3 className="text-xl md:text-3xl custom-size font-bold text-white mt-5 mb-1 z-10">{value}</h3>
    <p className="text-sm md:text-base text-gray-400 z-10">{label}</p>
  </div>
);

const StatsDisplay = () => {
  const stats = [
    { icon: '/man.png', value: '4M+', label: 'Registered Users' },
    { icon: '/downloading.png', value: '1M+', label: 'PlayStore Downloads' },
    { icon: '/finance.png', value: '97M+', label: 'Distributed (EXCOIN)' },
    { icon: '/planet-earth.png', value: '123+', label: 'Countries' },
  ];

  return (
    <div className="flex flex-col py-10 sm:flex-row justify-center items-center container mx-auto">
      <div className="flex justify-between flex-wrap w-full gap-4">
        {stats.map((stat, index) => (
          <StatsItem key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default StatsDisplay;