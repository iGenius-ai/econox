import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import { Send } from "lucide-react";
import { Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#101118]/30 py-8">
      <div className="container mx-auto text-center text-white">
        {/* Social Media Icons */}
        <div className="flex justify-center flex-wrap items-center gap-4 mb-4 mx-6">
          <a href="#" className="flex items-center transition duration-300 ease-in-out gap-x-1 text-white bg-[#1a1b23] hover:bg-[#0b6477] p-3 rounded-full">
            <Mail size={15} />
          </a>
          <a href="#" className="flex items-center transition duration-300 ease-in-out gap-x-1 text-white bg-[#1a1b23] hover:bg-[#0b6477] p-3 rounded-full">
            <Twitter size={15} />
          </a>
          <a href="#" className="flex items-center transition duration-300 ease-in-out gap-x-1 text-white bg-[#1a1b23] hover:bg-[#0b6477] p-3 rounded-full">
            <Send size={15} />
          </a>
          <a href="#" className="flex items-center transition duration-300 ease-in-out gap-x-1 text-white bg-[#1a1b23] hover:bg-[#0b6477] p-3 rounded-full">
            <Facebook size={15} />
          </a>
          <a href="#" className="flex items-center transition duration-300 ease-in-out gap-x-1 text-white bg-[#1a1b23] hover:bg-[#0b6477] p-3 rounded-full">
            <Instagram size={15} />
          </a>
          <a href="#" className="flex items-center transition duration-300 ease-in-out gap-x-1 text-white bg-[#1a1b23] hover:bg-[#0b6477] p-3 rounded-full">
            <Youtube size={15} />
          </a>
          <a href="#" className="flex items-center transition duration-300 ease-in-out gap-x-1 text-white bg-[#1a1b23] hover:bg-[#0b6477] p-3 rounded-full">
            <Linkedin size={15} />
          </a>
        </div>
        
        {/* Copyright and Links */}
        <p className="text-base custom-size text-purple-200 m-2 mx-4">
          Copyright © 2024 ExCoin. | <a href="#" className="hover:underline">Terms & Conditions</a> | <a href="#" className="hover:underline">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;