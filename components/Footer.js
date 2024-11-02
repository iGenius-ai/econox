import { Twitter, Facebook, Youtube, Linkedin, Instagram, Send, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const quickLinks = [
    { name: "About ENX", href: "#" },
    { name: "Whitepaper", href: "#" },
    { name: "Token Metrics", href: "#" },
    { name: "Roadmap", href: "#" },
  ];

  const resources = [
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Community", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0d1321] to-[#152238] pt-16 pb-8">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-[#0051ff]/5" />
      
      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-[#0051ff] bg-clip-text text-transparent mb-4">
              ENX
            </h3>
            <p className="text-gray-400 mb-6 text-sm">
              Empowering the future of decentralized finance through innovative blockchain solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    href={resource.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#1a1b23] text-gray-300 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-emerald-400 text-sm w-full"
              />
              <button className="bg-gradient-to-r from-emerald-400 to-[#0051ff] hover:opacity-90 transition-opacity duration-300 px-4 rounded-r-lg">
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center flex-wrap items-center gap-4 mb-8 pt-8 border-t border-gray-800">
          {[
            { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/econoxsol" },
            { icon: <svg className="w-5 h-5" viewBox="0 0 24 21" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M18.384 20.3215C18.706 20.5495 19.121 20.6065 19.491 20.4665C19.861 20.3255 20.133 20.0095 20.215 19.6265C21.084 15.5426 23.1919 5.20577 23.9829 1.49085C24.0429 1.21086 23.9429 0.919864 23.7229 0.732868C23.5029 0.545872 23.1979 0.491874 22.9259 0.592872C18.733 2.14484 5.8203 6.98974 0.542448 8.9427C0.207455 9.06669 -0.0105409 9.38869 0.000458879 9.74168C0.0124586 10.0957 0.250454 10.4027 0.593447 10.5057C2.96037 11.2136 6.0673 12.1986 6.0673 12.1986C6.0673 12.1986 7.51927 16.5835 8.27625 18.8135C8.37125 19.0935 8.59024 19.3135 8.87924 19.3895C9.16723 19.4645 9.47523 19.3855 9.69022 19.1825C10.9062 18.0345 12.7862 16.2595 12.7862 16.2595C12.7862 16.2595 16.3581 18.8785 18.384 20.3215ZM7.37427 11.6446L9.05323 17.1825L9.42623 13.6756C9.42623 13.6756 15.9131 7.82472 19.611 4.48979C19.719 4.39179 19.734 4.2278 19.644 4.1128C19.555 3.9978 19.391 3.9708 19.268 4.0488C14.9821 6.78574 7.37427 11.6446 7.37427 11.6446Z"/></svg>, href: "https://t.me/+lEDNNkJNHqw0MDA0" },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="flex items-center transition duration-300 ease-in-out text-gray-400 hover:text-emerald-400 bg-[#1a1b23] hover:bg-[#1a1b23]/80 p-3 rounded-full"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Copyright and Links */}
        <div className="text-center text-sm text-gray-400 pt-8 border-t border-gray-800">
          <p className="mb-4">
            Copyright © 2024 ENX. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="#" className="hover:text-emerald-400 transition-colors duration-300">Terms & Conditions</Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors duration-300">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;