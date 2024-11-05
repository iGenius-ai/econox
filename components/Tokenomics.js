import React from 'react';
import { Wallet, RefreshCw, ScrollText, ArrowDownToLine } from 'lucide-react';

const TokenomicsChart = () => {
  const segments = [
    {
      icon: Wallet,
      label: 'Token Supply',
      description: '1,000,000,000 ECX',
      position: 'top-left',
      customStyle: {
        borderTopLeftRadius: '100%',
        borderTopRightRadius: '1rem',
        borderBottomLeftRadius: '1rem',
        borderBottomRightRadius: '1rem',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(0, 0, 0, 0) 100%)'
      },
      hoverStyle: 'hover:border-emerald-400/70 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]',
      glowGradient: 'from-emerald-500/10 via-emerald-400/5'
    },
    {
      icon: RefreshCw,
      label: 'Burn Rate',
      description: '2% per transaction',
      position: 'top-right',
      customStyle: {
        borderTopRightRadius: '100%',
        borderTopLeftRadius: '1rem',
        borderBottomLeftRadius: '1rem',
        borderBottomRightRadius: '1rem',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(0, 0, 0, 0) 100%)'
      },
      hoverStyle: 'hover:border-blue-400/70 hover:shadow-[0_0_30px_rgba(96,165,250,0.15)]',
      glowGradient: 'from-blue-500/10 via-blue-400/5'
    },
    {
      icon: ScrollText,
      label: 'Liquidity Pool',
      description: '40% locked',
      position: 'bottom-left',
      customStyle: {
        borderBottomLeftRadius: '100%',
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        borderBottomRightRadius: '1rem',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(0, 0, 0, 0) 100%)'
      },
      hoverStyle: 'hover:border-purple-400/70 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]',
      glowGradient: 'from-purple-500/10 via-purple-400/5'
    },
    {
      icon: ArrowDownToLine,
      label: 'Staking Rewards',
      description: '5% APY',
      position: 'bottom-right',
      customStyle: {
        borderBottomRightRadius: '100%',
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        borderBottomLeftRadius: '1rem',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(0, 0, 0, 0) 100%)'
      },
      hoverStyle: 'hover:border-cyan-400/70 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]',
      glowGradient: 'from-cyan-500/10 via-cyan-400/5'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center mb-16 max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 text-transparent bg-clip-text mb-2">
          Tokenomics
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400" />
        <p className="text-base md:text-lg text-gray-400/70 font-light my-4">
          Experience seamless token management with our comprehensive suite of features
        </p>
        <p className="text-sm md:text-base text-gray-400/50 font-light max-w-2xl mx-auto">
          Built on Solana&apos;s high-performance blockchain, Econox provides you with essential tools 
          to interact with your digital assets efficiently and securely.
        </p>
      </div>

      <div className="relative grid grid-cols-2 gap-4 p-4">
        {segments.map((segment, index) => (
          <div
            key={index}
            style={segment.customStyle}
            className={`
              relative group w-[150px] md:w-64 h-[150px] md:h-64 
              border-2 border-emerald-800/50 
              backdrop-blur-sm 
              transition-all duration-500 ease-out 
              ${segment.hoverStyle}
              hover:scale-105
              overflow-hidden
            `}
          >
            <div className={`
              absolute inset-0 text-center flex flex-col items-center justify-center
              ${segment.position === 'top-left' && 'items-start justify-start pl-4 pt-4 md:pl-8 md:pt-8'}
              ${segment.position === 'top-right' && 'items-end justify-start pr-4 pt-4 md:pr-8 md:pt-8'}
              ${segment.position === 'bottom-left' && 'items-start justify-end pl-4 pb-4 md:pl-8 md:pb-8'}
              ${segment.position === 'bottom-right' && 'items-end justify-end pr-4 pb-4 md:pr-8 md:pb-8'}
            `}>
              <segment.icon
                className="w-6 h-6 md:w-10 md:h-10 mb-3 text-emerald-500/80 
                  transition-all duration-500 
                  group-hover:text-emerald-400
                  group-hover:scale-110"
              />
              <p className="text-sm md:text-base font-light text-emerald-500/70 
                group-hover:text-emerald-400 
                transition-colors duration-500">
                {segment.label}
              </p>
              <p className="text-xs md:text-sm font-light text-emerald-400/50 
                group-hover:text-emerald-400/70 
                transition-colors duration-500 mt-0.5">
                {segment.description}
              </p>
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
              transition-opacity duration-500 pointer-events-none">
              <div className={`absolute inset-0 
                bg-gradient-to-r ${segment.glowGradient} to-transparent`} />
              <div className={`absolute inset-0 
                bg-gradient-to-b ${segment.glowGradient} to-transparent opacity-50`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenomicsChart;