import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const TokenInput = ({ label, IconComponent }) => {
  return (
    <div className="bg-[#272833] rounded-xl">
      <div className="flex justify-between bg-[#10111881] p-4 py-3 items-center">
        <span className="text-gray-400 text-sm">{label}</span>
        <span className="text-gray-400 text-sm">Max 50%</span>
      </div>
      <div className="flex justify-between items-center p-4">
        <input
          type="text"
          className="bg-transparent text-white text-2xl font-bold w-full focus:outline-none"
          placeholder="0"
        />
        <div
          className="flex items-center bg-[#4a4b56] rounded-full overflow-hidden"
        >
          <Image src={IconComponent} width={35} height={35} alt={label} />
        </div>
      </div>
    </div>
  );
};

export default TokenInput;