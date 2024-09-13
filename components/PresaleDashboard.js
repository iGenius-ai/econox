import React, { useState, useEffect } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { ChevronDown } from 'lucide-react';
import TokenInput from './parts/TokenInput';

const PresaleDashboard = () => {
  const { open } = useWeb3Modal();
  const [selectedToken, setSelectedToken] = useState('SOL');
  const [timeLeft, setTimeLeft] = useState({});
  const [percentage, setPercentage] = useState(0);

  const handleTokenSelect = (token) => {
    setSelectedToken(token);
  };

  useEffect(() => {
    const targetDate = new Date("2024-09-14T23:50:00"); // Replace with your target date
    const countdownInterval = setInterval(() => {
      const now = new Date();
      const timeRemaining = targetDate - now;

      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        setTimeLeft({});
        setPercentage(100);
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });

        const totalTime = targetDate - new Date("2024-08-24T13:08:00"); // Start date for the countdown
        setPercentage(100 - (timeRemaining / totalTime) * 100);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
  <div className="border custom-size bg-[#101118] border-[#213a57] shadow-[#213a57] overflow-hidden rounded-lg w-full sm:w-96 max-w-md min-w-80 mx-auto text-white shadow-lg">
    <div>
      <div className="space-y-3 p-6 bg-[#1a1b23] rounded-b-2xl">
        <div className="text-center">
          <p className="text-sm text-purple-300">Stage - Phase 1</p>
          <h2 className="text-lg sm:text-xl font-bold mb-2">Presale is live</h2>
          <p className="text-xs text-gray-400">EX Coin is Registered Company</p>
        </div>

        <div className="bg-[#272833] rounded-full h-3 w-full">
          <div className="bg-[#0b6477] h-3 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>

        <p className="text-[10px] text-right text-gray-400">
          {timeLeft.days !== undefined
          ? `Until Next price: ${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`
          : 'Presale Ended. Next price: $0.5'}
        </p>

        <div className="space-y-2 text-sm max-w-2xl">
          <p>Wallet Address: <span className="text-purple-300">Unlock wallet</span></p>
          <p>Your Purchased EXCOIN: 0</p>
          <p>Listing Price: $0.2</p>
          <p>USDT Raised: $12722.058</p>
        </div>
      </div>

      <div className="space-y-4 p-6 pt-2">
        <div className="text-center text-lg font-semibold my-4">1 EXCOIN = $0.02</div>
        <div className="flex justify-between space-x-2 mb-4">
          {['SOL', 'USDT'].map((method) => (
            <button
              key={method}
              className={`flex-1 bg-[#3a3b46] border ${
              selectedToken === method ? 'border-[#0b6477] bg-[#0B6477]' : 'border-transparent'
              } hover:bg-[#0B6477] text-white font-bold py-2 px-4 rounded-lg transition duration-300`}
              onClick={() => handleTokenSelect(method)}
            >
              {method}
            </button>
          ))}
        </div>

        {/* <div className="flex flex-col justify-between items-center rounded-lg">
          <TokenInput label="From" tokenLabel={selectedToken === 'SOL' ? 'SOL' : 'USDT'} IconComponent={selectedToken === 'SOL' ? '/solana.png' : '/usdt.png'} />
          <div className="flex justify-center my-2">
            <div className="bg-[#0b6477] p-2 rounded-full">
              <ChevronDown className="text-white" size={16} />
            </div>
          </div>
          <TokenInput label="To" tokenLabel="EXC" IconComponent="/coin.svg" />
        </div> */}

        <button
        onClick={() => open({ view: 'Connect' })}
        className="w-full bg-[#0b6477] hover:bg-[#0b6477] text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  </div>
  );
};

export default PresaleDashboard;