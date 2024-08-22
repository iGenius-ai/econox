import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { ChevronDown } from 'lucide-react';

const PresaleDashboard = () => {
  const { open } = useWeb3Modal();
  const [paymentAmount, setPaymentAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border bg-[#101118] border-[#213a57] shadow-[#213a57] overflow-hidden rounded-lg w-full sm:w-96 max-w-md min-w-80 mx-auto text-white shadow-lg"
    >
      <div>
        <div className="space-y-4 p-6 bg-[#1a1b23] rounded-b-2xl">
          <div className="text-center">
            <p className="text-sm text-purple-300">Stage - Phase 1</p>
            <h2 className="text-xl font-bold mb-2">Presale is live</h2>
            <p className="text-xs text-gray-400">EX Coin is Registered Company</p>
          </div>

          <div className="bg-[#272833] rounded-full h-4 w-full">
            <div className="bg-[#0b6477] h-4 rounded-full" style={{ width: '30%' }}></div>
          </div>
          <p className="text-xs text-right text-gray-400">Until Next price: $0.04</p>

          <div className="space-y-2 text-sm max-w-2xl">
            <p>Wallet Address: <span className="text-purple-300">Unlock wallet</span></p>
            <p>Your Purchased EXCOIN: 0</p>
            <p>Listing Price: $0.2</p>
            <p>USDT Raised: $12722.058</p>
          </div>
        </div>

        <div className='space-y-4 p-6 pt-2'>
          <div className="text-center text-xl font-bold my-4">
            1 EXCOIN = $0.02
          </div>

          <div className="flex justify-between space-x-2 mb-4">
            {['BNB', 'USDT', 'CARD'].map((method) => (
              <button
                key={method}
                className="flex-1 bg-[#3a3b46] border border-[#0b6477] hover:bg-[#4a4b56] text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                {method}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center bg-[#272833] rounded-lg p-4">
            <div>
              <p className="text-xs text-gray-400 mb-1">Amount in BNB you pay</p>
              <input
                type="text"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                className="bg-transparent text-white text-lg font-bold w-28 focus:outline-none"
                placeholder="0"
              />
            </div>
            <div className="bg-yellow-500 rounded-full p-1 px-2">
              <span className="font-bold">B</span>
            </div>
          </div>

          <div className="flex justify-between items-center bg-[#272833] rounded-lg p-4">
            <div>
              <p className="text-xs text-gray-400 mb-1">Amount in EXCOIN you receive</p>
              <input
                type="text"
                value={receiveAmount}
                onChange={(e) => setReceiveAmount(e.target.value)}
                className="bg-transparent text-white text-lg font-bold w-28 focus:outline-none"
                placeholder="0"
              />
            </div>
            <div className="bg-[#0b6477] rounded-full p-1 px-2">
              <span className="font-bold">E</span>
            </div>
          </div>

          <button
            onClick={() => open({ view: 'Connect' })}
            className="w-full bg-[#0b6477] hover:bg-[#0b6477] text-white font-bold py-3 px-4 rounded-lg transition duration-300"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PresaleDashboard;