"use client";

import { useState, useRef } from "react";

const faqs = [
  {
    question: "What is made with the money from the funding rounds?",
    answer: ["• 35% will be used to build and upgrade the ENX platform, including team recruitment, training, and development costs.",
    "• 50% will be used for branding and marketing efforts for EX, including ongoing promotion and education about the platform and blockchain technology in relevant industry channels. This budget will also be used for various advertising activities to increase the platform's popularity among investors and attract active users.",
    "• 15% will be reserved as a contingency fund to address any unexpected or emergency situations that may arise.",]
  },
  {
    question: "Where can I find the Smart Contract?",
    answer: ["You can view the verified Smart Contract here", "Token Name: ENX Token", "Token Symbol: $ENX", "Decimals: 18", "Token Type: SOL",]
  },
  {
    question: "How do I buy $ENX token using a smartphone or tablet?",
    answer: ["You can buy $ENX token using a decentralized exchange like Uniswap or through our official app on your smartphone or tablet.",]
  },
  {
    question: "How do I set up a software wallet (Metamask, Trustwallet, etc.)?",
    answer: ["To set up a software wallet, download the app from your app store, follow the setup instructions, and make sure to securely store your recovery phrase.",]
  },
];

const AccordionItem = ({ faq, isOpen, toggle }) => {
  const contentRef = useRef(null);

  return (
    <div className={`mb-4 rounded-xl transition-all duration-300 ease-in-out overflow-hidden
      ${isOpen ? "bg-gradient-to-r from-[#0d1321]/80 to-[#152238]/80 shadow-md shadow-emerald-400/30" : "bg-[#0d1321]/40 hover:bg-[#0d1321]/60"}`}
    >
      <button
        className={`w-full text-left p-6 md:p-8 focus:outline-none flex justify-between items-center
          border border-emerald-400/30 transition-colors duration-300
          ${isOpen ? 
            "rounded-t-xl bg-gradient-to-r from-emerald-400/10 to-[#0051ff]/10" : 
            "rounded-xl hover:border-emerald-400"}`}
        onClick={toggle}
      >
        <span className={`font-medium text-sm sm:text-lg transition-colors duration-300
          ${isOpen ? "text-emerald-400" : "text-gray-100"}`}>
          {faq.question}
        </span>
        <span className={`ml-4 transition-all duration-300 text-emerald-400
          ${isOpen ? "rotate-180" : "rotate-0"}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8 11L14 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current.scrollHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
      >
        <div className="p-8 px-6 md:px-8 pt-2 text-sm sm:text-base text-gray-300 space-y-3">
          {faq.answer.map((line, index) => (
            <p key={index} className="leading-relaxed">
              {line.startsWith('•') ? (
                <span className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1.5">•</span>
                  <span>{line.substring(2)}</span>
                </span>
              ) : line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const WhatsNew = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container sm:p-4 py-4 my-16 mt-20 mx-auto text-white">
      <div className="text-center mb-12">
        <h2 className="font-bold text-3xl sm:text-4xl bg-gradient-to-r from-emerald-400 to-[#0051ff] bg-clip-text text-transparent mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-lg">
          Everything you need to know about ENX
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            toggle={() => toggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatsNew;