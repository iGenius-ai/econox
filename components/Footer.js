import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import { Send } from "lucide-react";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#101118]/30 py-8">
      <div className="container mx-auto text-center text-white">
        {/* Social Media Icons */}
        <div className="flex justify-center flex-wrap items-center gap-4 mb-4 mx-6">
          {/* <Link href="#" className="flex items-center transition duration-300 ease-in-out gap-x-1 text-white bg-[#1a1b23] hover:bg-[#0b6477] p-3 rounded-full">
            <Mail size={15} />
          </Link> */}
          <Link href="https://x.com/econoxsol" className="flex items-center transition duration-300 ease-in-out gap-x-1 text-white bg-[#1a1b23] hover:bg-[#0b6477] p-3 rounded-full">
            <svg className="custom-svg" width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3263 2.44629H21.6998L14.3297 10.8698L23 22.3323H16.2112L10.894 15.3803L4.80995 22.3323H1.43443L9.31743 13.3224L1 2.44629H7.96111L12.7674 8.80062L18.3263 2.44629ZM17.1423 20.3131H19.0116L6.94539 4.35942H4.93946L17.1423 20.3131Z" fill="currentColor"></path>
            </svg>
          </Link>
          <Link href="https://t.me/+lEDNNkJNHqw0MDA0" className="flex items-center transition duration-300 ease-in-out gap-x-1 text-white bg-[#1a1b23] hover:bg-[#0b6477] p-3 rounded-full">
            <svg className="custom-svg" width="20" height="20" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.384 20.3215C18.706 20.5495 19.121 20.6065 19.491 20.4665C19.861 20.3255 20.133 20.0095 20.215 19.6265C21.084 15.5426 23.1919 5.20577 23.9829 1.49085C24.0429 1.21086 23.9429 0.919864 23.7229 0.732868C23.5029 0.545872 23.1979 0.491874 22.9259 0.592872C18.733 2.14484 5.8203 6.98974 0.542448 8.9427C0.207455 9.06669 -0.0105409 9.38869 0.000458879 9.74168C0.0124586 10.0957 0.250454 10.4027 0.593447 10.5057C2.96037 11.2136 6.0673 12.1986 6.0673 12.1986C6.0673 12.1986 7.51927 16.5835 8.27625 18.8135C8.37125 19.0935 8.59024 19.3135 8.87924 19.3895C9.16723 19.4645 9.47523 19.3855 9.69022 19.1825C10.9062 18.0345 12.7862 16.2595 12.7862 16.2595C12.7862 16.2595 16.3581 18.8785 18.384 20.3215ZM7.37427 11.6446L9.05323 17.1825L9.42623 13.6756C9.42623 13.6756 15.9131 7.82472 19.611 4.48979C19.719 4.39179 19.734 4.2278 19.644 4.1128C19.555 3.9978 19.391 3.9708 19.268 4.0488C14.9821 6.78574 7.37427 11.6446 7.37427 11.6446Z" fill="currentColor"></path>
            </svg>
          </Link>
          {/* <Link href="#" className="flex items-center transition duration-300 ease-in-out gap-x-1 text-white bg-[#1a1b23] hover:bg-[#0b6477] p-3 rounded-full">
            <Facebook size={15} />
          </Link> */}
          {/* <Link href="#" className="flex items-center transition duration-300 ease-in-out gap-x-1 text-white bg-[#1a1b23] hover:bg-[#0b6477] p-3 rounded-full">
            <Instagram size={15} />
          </Link> */}
          {/* <Link href="#" className="flex items-center transition duration-300 ease-in-out gap-x-1 text-white bg-[#1a1b23] hover:bg-[#0b6477] p-3 rounded-full">
            <Youtube size={15} />
          </Link> */}
          {/* <Link href="#" className="flex items-center transition duration-300 ease-in-out gap-x-1 text-white bg-[#1a1b23] hover:bg-[#0b6477] p-3 rounded-full">
            <Linkedin size={15} />
          </Link> */}
        </div>
        
        {/* Copyright and Links */}
        <p className="text-base custom-size text-purple-200 m-2 mx-4">
          Copyright © 2024 ENX. | <a href="#" className="hover:underline">Terms & Conditions</a> | <a href="#" className="hover:underline">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;