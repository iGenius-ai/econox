import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useWeb3Modal } from '@web3modal/wagmi/react';
// import { ChevronDown } from 'lucide-react';

const PresaleDashboard = () => {
  const { open } = useWeb3Modal();
  const [fromToken, setFromToken] = useState('SOL');
  const [toToken, setToToken] = useState('RAY');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a1b23] rounded-lg p-6 max-w-md mx-auto text-white shadow-lg"
    >
      <div className="space-y-4">
        <TokenInput label="From" token={fromToken} setToken={setFromToken} />
        <div className="flex justify-center">
          <div className="bg-[#6366f1] p-2 rounded-full">
            {/* <ChevronDown className="text-white" /> */}
          </div>
        </div>
        <TokenInput label="To" token={toToken} setToken={setToToken} />
        <button
          onClick={() => open({ view: 'Connect' })}
          className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold py-3 px-4 rounded-xl transition duration-300"
        >
          Connect Wallet
        </button>
      </div>
    </motion.div>
  );
};

const TokenInput = ({ label, token, setToken }) => {
  return (
    <div className="bg-[#272833] rounded-xl p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-400 text-sm">{label}</span>
        <span className="text-gray-400 text-sm">Max 50%</span>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          className="bg-transparent text-white text-2xl font-bold w-full focus:outline-none"
          placeholder="0"
        />
        <button
          onClick={() => setToken(token)}
          className="flex items-center bg-[#3a3b46] hover:bg-[#4a4b56] rounded-xl px-3 py-2 transition duration-300"
        >
          <span className="mr-2">{token}</span>
          {/* <ChevronDown size={16} /> */}
        </button>
      </div>
      <div className="text-right text-gray-400 text-sm mt-2">~$0</div>
    </div>
  );
};

export default PresaleDashboard;