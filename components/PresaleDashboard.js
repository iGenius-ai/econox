import React from 'react';
import { motion } from 'framer-motion';
import { useWeb3Modal } from '@web3modal/wagmi/react';

const PresaleDashboard = () => {
  const { open } = useWeb3Modal()

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#213A57] rounded-3xl p-4 sm:p-6 py-8 mx-16 max-w-xl text-white shadow-lg"
    >
      <h2 className="text-xl font-semi mb-4">Presale Dashboard</h2>
      
      <div className="bg-[#0B6477] rounded-xl p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#80ED99] text-xs">Contribution Received</span>
          <span className="bg-[#80ED99] text-[#213A57] text-xs font-bold px-2 py-1 rounded">Listing Price = $0.1</span>
        </div>
        <div className="text-2xl font-bold mb-2">$42115.00000000</div>
        <div className="w-full bg-[#14919B] rounded-full h-2 mb-2">
          <div className="bg-gradient-to-r from-[#0AD1C8] to-[#45DFB1] h-2 rounded-full" style={{width: '70%'}}></div>
        </div>
        <p className="text-sm text-[#80ED99]">Vests daily over 12 months, beginning day 30 after public sale, ≈ 6% per month</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-[#0B6477] rounded-xl p-3 text-center">
          <div className="text-[#80ED99] text-sm mb-1">Stage</div>
          <div className="font-bold">Phase One</div>
        </div>
        <div className="bg-[#0B6477] rounded-xl p-3 text-center">
          <div className="text-[#80ED99] text-sm mb-1">Price Per Celia</div>
          <div className="font-bold">0.1</div>
        </div>
      </div>
      
      <div className="bg-[#0B6477] rounded-xl p-3 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-[#80ED99] rounded-full flex items-center justify-center mr-2">T</div>
            <input
              type="text"
              className="bg-[#213A57] text-white p-2 rounded w-16 sm:w-24 py-1 text-left"
              placeholder="0"
            />
          </div>
          <div className="font-semibold text-sm mx-1">USDT</div>
          <div className="text-[#45DFB1] mx-1">▶</div>
          <div className="flex items-center">
            <div className="w-5 h-5 bg-[#14919B] rounded-full flex items-center justify-center mr-2">C</div>
            <input
              type="text"
              className="bg-[#213A57] text-white p-2 rounded w-16 sm:w-24 py-1 text-left"
              placeholder="0"
            />
          </div>
          <div className="font-semibold text-sm ml-1">Celia</div>
        </div>
      </div>
      
      <button onClick={() => {open({ view: 'Connect' })}} className="w-full bg-[#14919B] hover:bg-[#0B6477] text-white font-bold py-3 px-4 rounded-xl transition duration-300">
        Connect Now
      </button>
    </motion.div>
  );
};

export default PresaleDashboard;