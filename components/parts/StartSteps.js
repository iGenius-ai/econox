import React from "react"

const StartSteps = ({ number, text }) => (
  <div className={`flex items-center justify-center flex-row`}>
    <div className={`flex items-center justify-center w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="font-bold text-[20px] text-white">0{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-lg text-[#b0b0b0] leading-[32px]">{text}</p>
  </div>
);

export default StartSteps;
