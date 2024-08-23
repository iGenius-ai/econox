"use client";

import { useState, useRef } from "react";

const faqs = [
  {
    question: "What is made with the money from the funding rounds?",
    answer: `• 35% will be used to build and upgrade the EX platform, including team recruitment, training, and development costs. \n\n
    • 50% will be used for branding and marketing efforts for EX, including ongoing promotion and education about the platform and blockchain technology in relevant industry channels. This budget will also be used for various advertising activities to increase the platform's popularity among investors and attract active users. \n\n
    • 15% will be reserved as a contingency fund to address any unexpected or emergency situations that may arise.`,
  },
  {
    question: "Where can I find the Smart Contract?",
    answer:
      "You can view the verified Smart Contract here:  Token Name: EX Token Token Symbol: $EX Decimals: 18 Token Type: BEP-20",
  },
  {
    question: "How do I buy $EX token using a smartphone or tablet?",
    answer:
      "You can buy $EX token using a decentralized exchange like Uniswap or through our official app on your smartphone or tablet.",
  },
  {
    question: "How do I set up a software wallet (Metamask, Trustwallet, etc.)?",
    answer:
      "To set up a software wallet, download the app from your app store, follow the setup instructions, and make sure to securely store your recovery phrase.",
  },
];

const AccordionItem = ({ faq, isOpen, toggle }) => {
  const contentRef = useRef(null);

  return (
    <div
      className={`mb-2 rounded-lg transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen
          ? "answer"
          : "bg-[#101118]"
      }`}
    >
      <button
        className={`w-full text-left p-8 py-6 focus:outline-none flex justify-between items-center ${
          isOpen ? "rounded-t-xl bg-transparent" : "rounded-xl bg-[#212132]"
        }`}
        onClick={toggle}
      >
        <span className="font-medium text-base sm:text-xl">{faq.question}</span>
        <span className="ml-4">{isOpen ? "▲" : "▼"}</span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current.scrollHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
      >
        <div className="p-8 pt-0 text-sm sm:text-lg text-gray-200 custom-size">{faq.answer}</div>
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
    <div className="container sm:p-4 py-4 my-16 mt-20 mx-auto text-white rounded-lg shadow-md">
      <h2 className="font-bold text-3xl sm:text-4xl text-center mb-10 mt-4">
        FAQs
      </h2>

      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          faq={faq}
          isOpen={openIndex === index}
          toggle={() => toggle(index)}
        />
      ))}
    </div>
  );
};

export default WhatsNew;