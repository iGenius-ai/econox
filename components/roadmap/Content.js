"use client";

import React, { useState } from 'react';
import { ChevronRight, ChevronDown, CheckCircle2, Clock, Rocket, Shield, Users, Workflow } from 'lucide-react';

const PhaseCard = ({ phase, title, items, isActive, onClick, isCompleted }) => (
  <div 
    className={`relative rounded-xl overflow-hidden transition-all duration-500 group ${
      isActive ? 'bg-gradient-to-br from-[#152238] to-[#0d1321]' : 'bg-[#0d1321]'
    }`}
  >
    {/* Animated border */}
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-10 transition-all duration-700" />
    
    {/* Header section */}
    <button
      onClick={onClick}
      className="w-full p-6 flex items-center justify-between group hover:bg-emerald-500/5 transition-colors duration-300"
    >
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center relative ${
          isCompleted ? 'bg-emerald-500/20' : isActive ? 'bg-blue-500/20' : 'bg-gray-500/20'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl animate-pulse" />
          <span className="relative text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            {phase}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
          {title}
        </h3>
      </div>
      {isActive ? (
        <ChevronDown className="w-6 h-6 text-emerald-400" />
      ) : (
        <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
      )}
    </button>

    {/* Content section */}
    <div className={`overflow-hidden transition-all duration-500 ${
      isActive ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
    }`}>
      <div className="p-6 pt-0">
        <div className="border-l-2 border-emerald-500/20 ml-6 space-y-6">
          {items.map((item, index) => (
            <div 
              key={index}
              className="relative pl-8 py-2 hover:bg-emerald-400/5 rounded-r-xl transition-colors duration-300"
            >
              {/* Connection dot */}
              <div className="absolute left-0 top-6 -translate-x-[5px] w-2 h-2 rounded-full bg-emerald-500" />
              <h4 className="text-lg font-semibold text-emerald-400 mb-2">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Content = () => {
  const [activePhase, setActivePhase] = useState(1);
  
  const phases = [
    {
      phase: "01",
      title: "Laying the Foundation",
      status: "completed",
      items: [
        {
          title: "Concept & Whitepaper Launch",
          description: "Starting with thorough research and an insightful whitepaper that outlines our deflationary strategy, tokenomics, and the Econox vision. Every element aligns with market trends and caters to community interests."
        },
        {
          title: "Smart Contract Development",
          description: "Building and rigorously testing the Econox smart contracts with advanced deflationary mechanisms, including transaction burns and fee allocations. Committed to top-tier security audits for fund safety."
        },
        {
          title: "Commitment to Locked Liquidity",
          description: "Dedicating a substantial locked liquidity pool to safeguard the Econox ecosystem and stabilize token price floor. This ensures enhanced trust and mitigates liquidity manipulation risks."
        },
        {
          title: "Strategic Partnerships",
          description: "Forging key partnerships with leading blockchain platforms, wallet providers, and influential DeFi players to expand reach and establish Econox as a credible asset."
        },
        {
          title: "Building Our Community",
          description: "Launching targeted initiatives across social media, crypto forums, and community channels to keep users engaged, informed, and excited about sustainable growth."
        }
      ]
    },
    {
      phase: "02",
      title: "Entering the Market & Growing Together",
      status: "active",
      items: [
        {
          title: "Presale & Initial Token Distribution",
          description: "Carefully crafted token presale with deflationary mechanisms like burns and locked liquidity. All funds raised will fuel our journey forward, benefiting the community."
        },
        {
          title: "Mainnet Launch & Token Listings",
          description: "Going live on a reputable blockchain, followed by selective DEX listings. Implementing a token buyback program partially funded by transaction fees."
        },
        {
          title: "Incentives for Our Users",
          description: "Implementing reward programs including staking and yield farming with deflationary rewards to encourage holding and reduce circulating supply."
        }
      ]
    },
    {
      phase: "03",
      title: "Expanding the Econox Ecosystem",
      status: "upcoming",
      items: [
        {
          title: "Econox DeFi Ecosystem Rollout",
          description: "Building an ecosystem of DeFi applications including DEX, lending protocols, and yield-boosting products—all with built-in deflationary mechanisms."
        },
        {
          title: "NFT Marketplace Integration",
          description: "Launching an NFT marketplace where transaction fees contribute to buybacks and token burns, with artist collaborations driving adoption."
        },
        {
          title: "Cross-Chain Integration",
          description: "Enabling cross-chain operability to broaden accessibility and expand user base, with every cross-chain transfer including token burns."
        }
      ]
    },
    {
      phase: "04",
      title: "Enhancing & Expanding Globally",
      status: "upcoming",
      items: [
        {
          title: "Optimizing Deflationary Mechanisms",
          description: "Continuously analyzing and adjusting tokenomics to maximize deflationary impact, from dynamic transaction fees to scalable burn rates."
        },
        {
          title: "Institutional Partnerships & Compliance",
          description: "Preparing for large-scale adoption through institutional investor engagement and ensuring compliance with global standards."
        },
        {
          title: "Global Branding & Outreach",
          description: "Making Econox a recognized name worldwide through strategic partnerships, sponsorships, and collaborations with top industry influencers."
        }
      ]
    },
    {
      phase: "05",
      title: "Ensuring Long-Term Sustainability",
      status: "upcoming",
      items: [
        {
          title: "Decentralized Governance & Community Involvement",
          description: "Introducing decentralized governance allowing token holders to propose and vote on critical upgrades, ensuring alignment with community interests."
        },
        {
          title: "Continuous R&D for Innovation",
          description: "Committing to ongoing research focusing on innovative deflationary models, AI-driven financial tools, and sustainable tokenomics."
        },
        {
          title: "Becoming a Deflationary Leader",
          description: "Positioning Econox as a top deflationary crypto asset through consistent token burns, dynamic fee structures, and advanced deflationary tools."
        }
      ]
    }
  ];

  return (
    <div className="w-full pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            Our Journey Together
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500" />
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Building Econox into a deflationary powerhouse designed for sustainable, long-term value
          </p>
        </div>

        {/* Phases */}
        <div className="space-y-4">
          {phases.map((phase, index) => (
            <PhaseCard
              key={index}
              {...phase}
              isActive={activePhase === index + 1}
              isCompleted={phase.status === 'completed'}
              onClick={() => setActivePhase(activePhase === index + 1 ? null : index + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;