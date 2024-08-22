import Image from 'next/image';
import React from 'react';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex-col sm:max-w-[250px] min-w-[210px]">
    <div className={`flex items-center justify-center w-[70px] h-[70px] rounded-[24] bg-[#323f5d]`}>
      <Image width={200} height={200} src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h2 className="mt-[26px] font-bold text-xl leading-[30px] text-white">{title}</h2>
    <p className="flex-1 mt-[16px] font-normal text-lg text-[#b0b0b0] leading-[32px]">{subtitle}</p>
  </div>
);

export default NewFeatures;
