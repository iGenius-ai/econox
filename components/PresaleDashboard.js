import React, { useState, useEffect } from 'react';
import { modal, useAppKit, useAppKitAccount } from '@reown/appkit/react';
import { ChevronDown } from 'lucide-react';
import TokenInput from './parts/TokenInput';
import { useDisconnect } from 'wagmi';

// Function to truncate the address
const truncateAddress = (address) => {
  if (!address) return '';
  const start = address.slice(0, 6);
  const end = address.slice(-4);
  return `${start}...${end}`;
};

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
    <div className="border custom-size bg-[#101118] border-[#213a57] shadow-[#213a57] overflow-hidden rounded-lg w-full max-w-lg min-w-80 mx-auto text-white shadow-lg">
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
            <p>Your Purchased ENX: 0</p>
            <p>Listing Price: $0.2</p>
            <p>USDT Raised: $12722.058</p>
          </div>
        </div>

        <div className="space-y-4 p-6 pt-2">
          <div className="text-center text-lg font-semibold my-4">1 ENX = $0.02</div>
          <div className="flex justify-between space-x-2 mb-4">
            {['SOL', 'USDT'].map((method) => (
              <button
                key={method}
                className={`flex-1 border ${
                  selectedToken === method ? 'border-[#0b6477] bg-[#0B6477]' : 'border-transparent bg-[#3a3b46]'
                } hover:bg-[#0B6477] text-white font-bold py-2 px-4 rounded-lg transition duration-300`}
                onClick={() => handleTokenSelect(method)}
              >
                {method}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-4 rounded-lg">
            <TokenInput 
              tokenLabel={selectedToken === 'SOL' ? 'SOL' : 'USDT'} 
              IconComponent={selectedToken === 'SOL' ? '/solana.png' : '/usdt.png'} 
            />
            <div className="flex flex-col items-center">
              <div className="bg-[#0b6477] p-2 rounded-full">
                <ChevronDown className="text-white" size={16} />
              </div>
            </div>
            <TokenInput tokenLabel="ENX" IconComponent="/enx.jpg" />
          </div>

          <button
            onClick={!isConnected ? connectWallet : disconnectWallet}
            className="w-full bg-[#0b6477] hover:bg-[#0b6477] text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
          >
              {!isConnected ? "Connect Wallet" : `Disconnect (${(address ?? "").substring(0,5)}...${(address ?? "").substring((address??"").length - 5,(address??"").length)})`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresaleDashboard;
