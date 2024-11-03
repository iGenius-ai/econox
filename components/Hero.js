'use client';

import Link from 'next/link';
import Image from 'next/image';
import PresaleDashboard from "@/components/PresaleDashboard";

const Hero = () => {
  return (
    <section className="min-h-screen">
      <div className="flex flex-col sm:flex-row justify-center items-center container py-28 mx-auto px-2 md:px-4">
        <div className="relative z-10 flex flex-col gap-y-6 justify-center text-center sm:text-left sm:mb-4 max-sm:items-center">
          <div className="flex flex-col gap-y-2">
            <span className="bg-emerald-400/20 text-emerald-400 w-max mx-auto md:mx-0 px-4 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase mb-2">
              Built for Tomorrow&apos;s Economy
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-[4rem] max-w-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-[#D4AF37] to-blue-500">
              Secure and User-Centric Digital Wealth Management
            </h1>
            <span className="text-2xl sm:text-3xl md:text-4xl text-[#D4AF37] font-bold">
              Invest in the Future of Finance
            </span>
          </div>

          <p className="text-base sm:text-lg md:text-xl max-w-3xl mt-4 text-gray-300 leading-relaxed">
            Econox — An SPL token with a deflationary edge, seamlessly integrated into Solana&apos;s DeFi landscape. 
            Discover a future-ready financial ecosystem tailored to your needs, offering a secure, innovative foundation to build and manage
            your digital assets.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link 
              href="/roadmap" 
              className="group font-medium flex items-center gap-x-2 text-black bg-gradient-to-r from-[#D4AF37] to-[#F4C251] hover:from-[#F4C251] hover:to-[#D4AF37] transition-all duration-300 ease-in-out p-4 px-6 rounded-lg shadow-lg hover:shadow-[#D4AF37]/20 hover:scale-105"
            >
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_10143)">
                  <path d="M8.00081 4.16675H6.33415C5.89212 4.16675 5.4682 4.34234 5.15564 4.6549C4.84308 4.96746 4.66748 5.39139 4.66748 5.83341V15.8334C4.66748 16.2754 4.84308 16.6994 5.15564 17.0119C5.4682 17.3245 5.89212 17.5001 6.33415 17.5001H14.6675C15.1095 17.5001 15.5334 17.3245 15.846 17.0119C16.1586 16.6994 16.3341 16.2754 16.3341 15.8334V5.83341C16.3341 5.39139 16.1586 4.96746 15.846 4.6549C15.5334 4.34234 15.1095 4.16675 14.6675 4.16675H13.0008" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.00012 4.16667C8.00012 3.72464 8.17572 3.30072 8.48828 2.98816C8.80084 2.67559 9.22476 2.5 9.66679 2.5H11.3335C11.7755 2.5 12.1994 2.67559 12.512 2.98816C12.8245 3.30072 13.0001 3.72464 13.0001 4.16667C13.0001 4.60869 12.8245 5.03262 12.512 5.34518C12.1994 5.65774 11.7755 5.83333 11.3335 5.83333H9.66679C9.22476 5.83333 8.80084 5.65774 8.48828 5.34518C8.17572 5.03262 8.00012 4.60869 8.00012 4.16667Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
              Whitepaper
            </Link>

            <ul className="flex items-center flex-wrap gap-3">
              <li>
                <Link 
                  href="https://x.com/econoxsol" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#131327] hover:bg-gradient-to-r from-emerald-400 to-blue-500 text-white transition-all duration-300 ease-in-out hover:scale-110 shadow-lg hover:shadow-emerald-500/20"
                >
                  <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3263 2.44629H21.6998L14.3297 10.8698L23 22.3323H16.2112L10.894 15.3803L4.80995 22.3323H1.43443L9.31743 13.3224L1 2.44629H7.96111L12.7674 8.80062L18.3263 2.44629ZM17.1423 20.3131H19.0116L6.94539 4.35942H4.93946L17.1423 20.3131Z" fill="currentColor"/>
                  </svg>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://t.me/+lEDNNkJNHqw0MDA0" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#131327] hover:bg-gradient-to-r from-emerald-400 to-blue-500 text-white transition-all duration-300 ease-in-out hover:scale-110 shadow-lg hover:shadow-emerald-500/20"
                >
                  <svg width="20" height="20" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.384 20.3215C18.706 20.5495 19.121 20.6065 19.491 20.4665C19.861 20.3255 20.133 20.0095 20.215 19.6265C21.084 15.5426 23.1919 5.20577 23.9829 1.49085C24.0429 1.21086 23.9429 0.919864 23.7229 0.732868C23.5029 0.545872 23.1979 0.491874 22.9259 0.592872C18.733 2.14484 5.8203 6.98974 0.542448 8.9427C0.207455 9.06669 -0.0105409 9.38869 0.000458879 9.74168C0.0124586 10.0957 0.250454 10.4027 0.593447 10.5057C2.96037 11.2136 6.0673 12.1986 6.0673 12.1986C6.0673 12.1986 7.51927 16.5835 8.27625 18.8135C8.37125 19.0935 8.59024 19.3135 8.87924 19.3895C9.16723 19.4645 9.47523 19.3855 9.69022 19.1825C10.9062 18.0345 12.7862 16.2595 12.7862 16.2595C12.7862 16.2595 16.3581 18.8785 18.384 20.3215ZM7.37427 11.6446L9.05323 17.1825L9.42623 13.6756C9.42623 13.6756 15.9131 7.82472 19.611 4.48979C19.719 4.39179 19.734 4.2278 19.644 4.1128C19.555 3.9978 19.391 3.9708 19.268 4.0488C14.9821 6.78574 7.37427 11.6446 7.37427 11.6446Z" fill="currentColor"/>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <div className="shadow-xl">
            <PresaleDashboard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
