'use client';

import React, { useState, useEffect } from 'react';
import { modal, useAppKit, useAppKitAccount } from '@reown/appkit/react';
import { ChevronDown } from 'lucide-react';
import TokenInput from './parts/TokenInput';
import { useDisconnect } from 'wagmi';
import Image from 'next/image';

const PresaleDashboard = () => {
  const [selectedToken, setSelectedToken] = useState('SOL');
  const [timeLeft, setTimeLeft] = useState({});
  const [percentage, setPercentage] = useState(0);
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();
  const { disconnect } = useDisconnect();

  const connectWallet = async () => {
    open({
      view: "Connect",
    });
  };

  const disconnectWallet = async () => {
    await disconnect();
  };

  const handleTokenSelect = (token) => {
    setSelectedToken(token);
  };

  useEffect(() => {
    const targetDate = new Date("2024-09-14T23:50:00");
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

        const totalTime = targetDate - new Date("2024-08-24T13:08:00");
        setPercentage(100 - (timeRemaining / totalTime) * 100);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="bg-[#0A0A1F]/90 backdrop-blur-xl border border-emerald-500/10 rounded-2xl overflow-hidden w-full max-w-lg shadow-2xl">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="space-y-4 p-6 bg-gradient-to-b from-[#131327] to-[#0A0A1F]">
          <div className="text-center space-y-2">
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium">
              Stage - Phase 1
            </div>
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#D4AF37] to-blue-500">
              Presale is Live
            </h2>
            <p className="text-sm text-gray-400">EX Coin is Registered Company</p>
          </div>

          {/* Progress Bar */}
          <div className="relative">
            <div className="h-2 bg-[#131327] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-400 to-[#D4AF37] transition-all duration-300"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p className="mt-2 text-right text-xs text-gray-400">
              {timeLeft.days !== undefined
                ? `Until Next price: ${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`
                : 'Presale Ended. Next price: $0.5'}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-gray-400">Wallet Address: 
                <span className="ml-2 text-emerald-400">Unlock wallet</span>
              </p>
              <p className="text-gray-400">Your Purchased ENX: 
                <span className="ml-2 text-white">0</span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">Listing Price: 
                <span className="ml-2 text-[#D4AF37]">$0.2</span>
              </p>
              <p className="text-gray-400">USDT Raised: 
                <span className="ml-2 text-[#D4AF37]">$12,722.06</span>
              </p>
            </div>
          </div>
        </div>

        {/* Swap Section */}
        <div className="space-y-6 p-6">
          <div className="text-center">
            <span className="text-lg font-medium text-white">1 ENX = </span>
            <span className="text-lg font-bold text-[#D4AF37]">$0.02</span>
          </div>

          {/* Token Selection */}
          <div className="flex gap-3">
            {['SOL', 'USDT'].map((token) => (
              <button
                key={token}
                onClick={() => handleTokenSelect(token)}
                className={`flex-1 py-3 px-4 rounded-xl shadow-lg font-semibold transition-all duration-300 ${
                  selectedToken === token
                    ? 'bg-gradient-to-r from-emerald-400 to-[#D4AF37] text-black'
                    : 'bg-[#131327] text-gray-400 hover:bg-[#1a1b23]'
                }`}
              >
                {token}
              </button>
            ))}
          </div>

          {/* Token Swap Interface */}
          <div className="space-y-4">
            <TokenInput 
              tokenLabel={selectedToken === 'SOL' ? 'SOL' : 'USDT'} 
              IconComponent={selectedToken === 'SOL' ? '/solana.png' : '/usdt.png'} 
            />
            <div className="flex justify-center">
              <div className="p-2 rounded-full bg-gradient-to-r from-emerald-400 to-[#D4AF37]">
                <ChevronDown className="text-black" size={20} />
              </div>
            </div>
            <TokenInput tokenLabel="ENX" IconComponent="/enx.jpg" />
          </div>

          {/* Connect Button */}
          <button
            onClick={!isConnected ? connectWallet : disconnectWallet}
            className="w-full py-4 px-6 rounded-xl font-semibold text-black transition-all duration-300 bg-gradient-to-r from-emerald-400 to-[#D4AF37] hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02]"
          >
            {!isConnected 
              ? "Connect Wallet" 
              : `Disconnect (${address?.substring(0,5)}...${address?.substring(address.length - 5)})`
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresaleDashboard;
