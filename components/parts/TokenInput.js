import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const TokenInput = ({ label, IconComponent, tokenLabel }) => {
  return (
    <div className="bg-[#272833] rounded-xl">
      <div className="flex justify-between items-center p-3">
        <input
          type="text"
          className="bg-transparent text-white text-xl font-medium w-full focus:outline-none"
          placeholder="0"
        />
        <div className="flex items-center bg-[#4a4b56] rounded-full p-1 pr-2 gap-x-1">
          <div
            className="flex items-center overflow-hidden rounded-full"
          >
            <Image src={IconComponent} width={40} height={40} alt={IconComponent} />
          </div>
          <p className="text-[#f5f5f5] text-sm">{tokenLabel}</p>
        </div>
      </div>
    </div>
  );
};

export default TokenInput;