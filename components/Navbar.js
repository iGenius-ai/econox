'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, CircleAlert } from 'lucide-react'

const NAVBAR_HEIGHT = 80;

const links = [
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/#', label: 'About' },
  { href: '#features', label: 'Features' },
  { href: '#faq', label: 'FAQ' },
  { href: '/vesting', label: 'Vesting' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showVestingModal, setShowVestingModal] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = useCallback((e, href) => {
    e.preventDefault()
    if (href === '/vesting') {
      setShowVestingModal(true)
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - NAVBAR_HEIGHT
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    } else {
      window.location.href = href
    }
    setIsOpen(false)
  }, [])

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      setShowVestingModal(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={false}
        animate={isScrolled ? "scrolled" : "top"}
        variants={{
          scrolled: { 
            boxShadow: "0 2px 15px rgba(52, 211, 153, 0.25)" 
          }
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 p-4 md:px-6 backdrop-blur-[12px]"
        style={{ height: `${NAVBAR_HEIGHT}px` }} 
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className=''>
            <Link href="/" className="text-2xl font-bold text-white flex items-center">
              <Image src={"/econox.png"} alt='Brand Logo' width={100} height={100} className='object-cover' />
            </Link>
          </div>

          <div className="hidden md:flex space-x-4 border border-emerald-400/20 bg-[#0d1321]/40 p-2 px-6 rounded-full">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} onClick={(e) => handleLinkClick(e, href)}>
                <motion.div
                  className="relative p-2 text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {label}
                  {pathname === href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-[#0051ff]"
                      layoutId="underline"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-x-2 md:gap-x-4">
            <div className="hidden md:flex gap-x-3">
              <Link href={"/"} className='flex items-center transition duration-300 ease-in-out gap-x-2 text-white bg-gradient-to-r from-[#00ffa3] to-[#0051ff] hover:opacity-90 p-3 px-5 rounded-full font-medium'>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_10143)"><path d="M8.00081 4.16675H6.33415C5.89212 4.16675 5.4682 4.34234 5.15564 4.6549C4.84308 4.96746 4.66748 5.39139 4.66748 5.83341V15.8334C4.66748 16.2754 4.84308 16.6994 5.15564 17.0119C5.4682 17.3245 5.89212 17.5001 6.33415 17.5001H14.6675C15.1095 17.5001 15.5334 17.3245 15.846 17.0119C16.1586 16.6994 16.3341 16.2754 16.3341 15.8334V5.83341C16.3341 5.39139 16.1586 4.96746 15.846 4.6549C15.5334 4.34234 15.1095 4.16675 14.6675 4.16675H13.0008" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.00012 4.16667C8.00012 3.72464 8.17572 3.30072 8.48828 2.98816C8.80084 2.67559 9.22476 2.5 9.66679 2.5H11.3335C11.7755 2.5 12.1994 2.67559 12.512 2.98816C12.8245 3.30072 13.0001 3.72464 13.0001 4.16667C13.0001 4.60869 12.8245 5.03262 12.512 5.34518C12.1994 5.65774 11.7755 5.83333 11.3335 5.83333H9.66679C9.22476 5.83333 8.80084 5.65774 8.48828 5.34518C8.17572 5.03262 8.00012 4.60869 8.00012 4.16667Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.00012 10H13.0001" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.00012 13.3333H13.0001" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                Join us 
              </Link>
              <Link href={"/another"} className='flex items-center justify-center transition duration-300 ease-in-out text-[#00ffa3] hover:text-white border border-[#00ffa3]/30 hover:border-[#00ffa3] hover:bg-[#00ffa3]/10 p-2 rounded-full w-10 h-10'>
                <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.32526 23.7844L23.7251 6.38458" stroke="currentColor" strokeWidth="1.31611" strokeMiterlimit="10" strokeLinecap="square"/><path d="M12.1422 6.6604C18.297 11.7437 23.4077 6.05591 23.4077 6.05591" stroke="currentColor" strokeWidth="1.31611" strokeMiterlimit="10" strokeLinecap="square"/><path d="M23.4559 17.9739C18.3727 11.8191 24.0604 6.70833 24.0604 6.70833" stroke="currentColor" strokeWidth="1.31611" strokeMiterlimit="10" strokeLinecap="square"/></svg>
              </Link>
            </div>

            <w3m-button label='Connect' />

            <div className="md:hidden text-[#00ffa3]">   
              <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                {isOpen ? (  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-[92px] right-0 w-lvw bg-[#0d1321]/95 backdrop-blur-[12px] z-50 md:hidden overflow-y-auto"
          >
            <div className="p-4 pb-10 flex flex-col">
              <div className="mt-4">
                {links.map(({ href, label }, index) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={href} onClick={(e) => handleLinkClick(e, href)}>
                      <motion.div
                        className="px-4 py-2 mb-2 text-gray-300 hover:text-[#00ffa3] transition-colors duration-200"
                        whileTap={{ backgroundColor: "rgba(0, 255, 163, 0.1)" }}
                      >
                        {label}
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center gap-x-3">
                <Link href={"/"} className='flex items-center transition duration-300 ease-in-out gap-x-2 text-white bg-gradient-to-r from-[#00ffa3] to-[#0051ff] hover:opacity-90 p-3 px-5 rounded-full font-medium'>
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_10143)"><path d="M8.00081 4.16675H6.33415C5.89212 4.16675 5.4682 4.34234 5.15564 4.6549C4.84308 4.96746 4.66748 5.39139 4.66748 5.83341V15.8334C4.66748 16.2754 4.84308 16.6994 5.15564 17.0119C5.4682 17.3245 5.89212 17.5001 6.33415 17.5001H14.6675C15.1095 17.5001 15.5334 17.3245 15.846 17.0119C16.1586 16.6994 16.3341 16.2754 16.3341 15.8334V5.83341C16.3341 5.39139 16.1586 4.96746 15.846 4.6549C15.5334 4.34234 15.1095 4.16675 14.6675 4.16675H13.0008" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.00012 4.16667C8.00012 3.72464 8.17572 3.30072 8.48828 2.98816C8.80084 2.67559 9.22476 2.5 9.66679 2.5H11.3335C11.7755 2.5 12.1994 2.67559 12.512 2.98816C12.8245 3.30072 13.0001 3.72464 13.0001 4.16667C13.0001 4.60869 12.8245 5.03262 12.512 5.34518C12.1994 5.65774 11.7755 5.83333 11.3335 5.83333H9.66679C9.22476 5.83333 8.80084 5.65774 8.48828 5.34518C8.17572 5.03262 8.00012 4.60869 8.00012 4.16667Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.00012 10H13.0001" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.00012 13.3333H13.0001" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                  Join us 
                </Link>
                <Link href={"/another"} className='flex items-center justify-center transition duration-300 ease-in-out text-[#00ffa3] hover:text-white border border-[#00ffa3]/30 hover:border-[#00ffa3] hover:bg-[#00ffa3]/10 p-2 rounded-full w-10 h-10'>
                  <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.32526 23.7844L23.7251 6.38458" stroke="currentColor" strokeWidth="1.31611" strokeMiterlimit="10" strokeLinecap="square"/><path d="M12.1422 6.6604C18.297 11.7437 23.4077 6.05591 23.4077 6.05591" stroke="currentColor" strokeWidth="1.31611" strokeMiterlimit="10" strokeLinecap="square"/><path d="M23.4559 17.9739C18.3727 11.8191 24.0604 6.70833 24.0604 6.70833" stroke="currentColor" strokeWidth="1.31611" strokeMiterlimit="10" strokeLinecap="square"/></svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal for Vesting */}
      <AnimatePresence>
        {showVestingModal && (
          <motion.div
            id="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0d1321]/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={handleOutsideClick}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-gradient-to-br from-[#0d1321] to-[#131b2e] p-8 rounded-2xl shadow-[0_0_30px_rgba(0,255,163,0.1)] relative max-w-md mx-4 border border-[#00ffa3]/10"
            >
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold flex items-center gap-x-3 text-white">
                  <CircleAlert className="text-[#00ffa3]" size="24" /> 
                  Notice
                </h2>
                <button
                  onClick={() => setShowVestingModal(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X size="24" />
                </button>
              </div>
              <p className="text-gray-300 font-light mb-6 leading-relaxed">
                Vesting has not started yet. Please check back later for updates on the vesting schedule.
              </p>
              <p className="text-gray-300">
                For more information, visit our{' '}
                <a 
                  href="/#faq" 
                  className="text-[#00ffa3] hover:text-[#0051ff] transition-colors duration-200 underline decoration-[#00ffa3]/30 hover:decoration-[#0051ff]"
                  onClick={() => {
                    setShowVestingModal(false);
                    const faqElement = document.querySelector('#faq');
                    if (faqElement) {
                      const offsetPosition = faqElement.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  FAQ
                </a>{' '}
                page or contact support.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}