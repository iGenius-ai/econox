'use client';

import Link from 'next/link';
import PresaleDashboard from "@/components/PresaleDashboard"

const Hero = () => (
  <section className={``}>
    <div className={`flex flex-col sm:flex-row justify-between items-center container py-32 mx-auto`}>
      <div className="relative z-10 flex flex-col gap-y-6 justify-center text-center sm:text-left sm:mb-4 max-sm:items-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl max-w-4xl text-gray-50 font-bold">
          Earn, Stake and Burn with EXCoin: <br/> <span className="text-[#14919B]">Join the Movement</span> 
        </h1>

        <p className="text-base sm:text-lg md:text-xl max-w-3xl mt-2 text-gray-100 mb-2">
          EXCoin — An SPL token with a deflationary edge, seamlessly integrated into Solana&apos;s DeFi landscape. 
          Stake your tokens for passive income, diversify your investments, and set out on your journey toward financial growth. 
        </p>

        <div className='flex flex-col sm:flex-row items-center gap-4'>
          <div className='flex items-center'>
            <Link href={"/"} className='flex items-center gap-x-2 text-white border-[#0b6477] transition-all duration-300 ease-in-out border bg-[#0b6477] hover:text-[#14919B] hover:bg-transparent p-3 px-4 rounded-full'>
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_10143)"><path d="M8.00081 4.16675H6.33415C5.89212 4.16675 5.4682 4.34234 5.15564 4.6549C4.84308 4.96746 4.66748 5.39139 4.66748 5.83341V15.8334C4.66748 16.2754 4.84308 16.6994 5.15564 17.0119C5.4682 17.3245 5.89212 17.5001 6.33415 17.5001H14.6675C15.1095 17.5001 15.5334 17.3245 15.846 17.0119C16.1586 16.6994 16.3341 16.2754 16.3341 15.8334V5.83341C16.3341 5.39139 16.1586 4.96746 15.846 4.6549C15.5334 4.34234 15.1095 4.16675 14.6675 4.16675H13.0008" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.00012 4.16667C8.00012 3.72464 8.17572 3.30072 8.48828 2.98816C8.80084 2.67559 9.22476 2.5 9.66679 2.5H11.3335C11.7755 2.5 12.1994 2.67559 12.512 2.98816C12.8245 3.30072 13.0001 3.72464 13.0001 4.16667C13.0001 4.60869 12.8245 5.03262 12.512 5.34518C12.1994 5.65774 11.7755 5.83333 11.3335 5.83333H9.66679C9.22476 5.83333 8.80084 5.65774 8.48828 5.34518C8.17572 5.03262 8.00012 4.60869 8.00012 4.16667Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.00012 10H13.0001" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.00012 13.3333H13.0001" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_1_10143"><rect width="20" height="20" fill="white" transform="translate(0.5)"></rect></clipPath></defs></svg>
              Whitepaper
            </Link>
            <Link href={"/another"} className='flex items-center gap-x-2 text-white border-[#0b6477] bg-[#0b6477] transition-all duration-300 ease-in-out border hover:text-[#14919B] hover:bg-transparent p-2 rounded-full'>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.32526 23.7844L23.7251 6.38458" stroke="currentColor" strokeWidth="1.31611" strokeMiterlimit="10" strokeLinecap="square"/><path d="M12.1422 6.6604C18.297 11.7437 23.4077 6.05591 23.4077 6.05591" stroke="currentColor" strokeWidth="1.31611" strokeMiterlimit="10" strokeLinecap="square"/><path d="M23.4559 17.9739C18.3727 11.8191 24.0604 6.70833 24.0604 6.70833" stroke="currentColor" strokeWidth="1.31611" strokeMiterlimit="10" strokeLinecap="square"/></svg>
            </Link>
          </div>

          <ul className="flex items-center flex-wrap gap-2">
            <li className='bg-[#131327] text-white text-sm transitional duration-200 ease-in-out hover:bg-[#0b6477] p-3 rounded-full'>
              <a className="d-flex items-center justify-content-center text-xs rounded-pill" title="Twitter" href="https://twitter.com/AitikChain" target="_blank">
                <svg className="custom-svg" width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3263 2.44629H21.6998L14.3297 10.8698L23 22.3323H16.2112L10.894 15.3803L4.80995 22.3323H1.43443L9.31743 13.3224L1 2.44629H7.96111L12.7674 8.80062L18.3263 2.44629ZM17.1423 20.3131H19.0116L6.94539 4.35942H4.93946L17.1423 20.3131Z" fill="currentColor"></path>
                </svg>
              </a>
            </li>
            <li className='bg-[#131327] text-white text-sm transitional duration-200 ease-in-out hover:bg-[#0b6477] p-3 rounded-full'>
              <a className="d-flex items-center justify-content-center rounded-pill" title="Telegram Community" href="https://t.me/AitikChain_Announcement" target="_blank">
                <svg className="custom-svg" width="20" height="20" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.384 20.3215C18.706 20.5495 19.121 20.6065 19.491 20.4665C19.861 20.3255 20.133 20.0095 20.215 19.6265C21.084 15.5426 23.1919 5.20577 23.9829 1.49085C24.0429 1.21086 23.9429 0.919864 23.7229 0.732868C23.5029 0.545872 23.1979 0.491874 22.9259 0.592872C18.733 2.14484 5.8203 6.98974 0.542448 8.9427C0.207455 9.06669 -0.0105409 9.38869 0.000458879 9.74168C0.0124586 10.0957 0.250454 10.4027 0.593447 10.5057C2.96037 11.2136 6.0673 12.1986 6.0673 12.1986C6.0673 12.1986 7.51927 16.5835 8.27625 18.8135C8.37125 19.0935 8.59024 19.3135 8.87924 19.3895C9.16723 19.4645 9.47523 19.3855 9.69022 19.1825C10.9062 18.0345 12.7862 16.2595 12.7862 16.2595C12.7862 16.2595 16.3581 18.8785 18.384 20.3215ZM7.37427 11.6446L9.05323 17.1825L9.42623 13.6756C9.42623 13.6756 15.9131 7.82472 19.611 4.48979C19.719 4.39179 19.734 4.2278 19.644 4.1128C19.555 3.9978 19.391 3.9708 19.268 4.0488C14.9821 6.78574 7.37427 11.6446 7.37427 11.6446Z" fill="currentColor"></path>
                </svg>
              </a>
            </li>
            <li className='bg-[#131327] text-white text-sm transitional duration-200 ease-in-out hover:bg-[#0b6477] p-3 rounded-full'>
              <a className="d-flex items-center justify-content-center rounded-pill" title="Link Tree" href="https://linktr.ee/aitikchain" target="_blank">
                <svg className="custom-svg" width="20" height="20" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.511 6.39548L15.516 2.27848L17.841 4.65948L13.64 8.66448H19.549V11.9695H13.612L17.841 16.0775L15.516 18.4115L9.775 12.6425L4.034 18.4115L1.709 16.0865L5.938 11.9785H0V8.66448H5.909L1.708 4.65948L4.033 2.27848L8.038 6.39548V0.54248H11.511V6.39548ZM8.038 16.7025H11.511V24.5445H8.038V16.7025Z" fill="currentColor"></path>
                </svg>
              </a>
            </li>
            <li className='bg-[#131327] text-white text-sm transitional duration-200 ease-in-out hover:bg-[#0b6477] p-3 rounded-full'>
              <a className="d-flex items-center justify-content-center rounded-pill" title="Github" href="https://github.com/AitikChain" target="_blank">
                <svg className="custom-svg" width="20" height="20" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0001 0.54248C6.26536 0.54248 0.810516 6.04831 0.810516 12.846C0.810516 18.2903 4.29979 22.8888 9.14516 24.519C9.75464 24.6266 9.98319 24.2575 9.98319 23.9346C9.98319 23.6424 9.96796 22.6734 9.96796 21.643C6.90532 22.2121 6.11299 20.8894 5.8692 20.1974C5.73207 19.8436 5.13783 18.7517 4.61977 18.4595C4.19313 18.2288 3.58365 17.6598 4.60453 17.6444C5.56446 17.629 6.25013 18.5364 6.47868 18.9055C7.57575 20.7664 9.328 20.2435 10.0289 19.9205C10.1356 19.1208 10.4555 18.5825 10.806 18.2749C8.0938 17.9673 5.25972 16.9062 5.25972 12.2001C5.25972 10.8621 5.73207 9.75475 6.50916 8.8935C6.38726 8.58591 5.96062 7.3248 6.63105 5.63306C6.63105 5.63306 7.65193 5.3101 9.98319 6.89418C10.9584 6.61735 11.9945 6.47893 13.0306 6.47893C14.0667 6.47893 15.1028 6.61735 16.078 6.89418C18.4093 5.29472 19.4301 5.63306 19.4301 5.63306C20.1006 7.3248 19.6739 8.58591 19.552 8.8935C20.3291 9.75475 20.8015 10.8467 20.8015 12.2001C20.8015 16.9215 17.9521 17.9673 15.24 18.2749C15.6818 18.6594 16.0628 19.3976 16.0628 20.5511C16.0628 22.1967 16.0475 23.5193 16.0475 23.9346C16.0475 24.2575 16.2761 24.642 16.8856 24.519C19.3055 23.6946 21.4084 22.1249 22.8981 20.0309C24.3878 17.9369 25.1893 15.424 25.1897 12.846C25.1897 6.04831 19.7349 0.54248 13.0001 0.54248Z" fill="currentColor"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='relative z-0 sm:pl-6 pl-0 mt-6 sm:mt-0 max-w-xl flex items-center'>
        <PresaleDashboard />
      </div>
    </div>
  </section>
);

export default Hero;
