'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useWeb3Modal } from '@web3modal/wagmi/react'

const links = [
  { href: '/about', label: 'About' },
  { href: '/roadmaps', label: 'Our Roadmap' },
  { href: '/features', label: 'Features' },
  { href: '/faq', label: 'FAQ' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={false}
        animate={isScrolled ? "scrolled" : "top"}
        variants={{
          top: { backgroundColor: "rgba(255, 255, 255, 0)", boxShadow: "none" },
          scrolled: { backgroundColor: "rgba(255, 255, 255, 0.8)", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 p-4 backdrop-blur-sm"
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className={`text-2xl font-bold ${isScrolled ? "text-purple-900" : "text-gray-100"} flex items-center`}>
            <Image src={"/vercel.svg"} alt='Brand Logo' width={60} height={60} objectFit='center' />
            <div className='uppercase'>
              <p className='text-lg'>Econox Coin</p>
              {/* <w3m-button /> */}
            </div>
          </Link>

          <div className="hidden md:flex space-x-4 border border-[#9494b3] p-2 px-6 rounded-full">
            {links.map(({ href, label, icon }) => (
              <Link key={href} href={href}>
                <motion.div
                  className={`relative p-2 ${isScrolled ? "text-purple-900" : "text-gray-100"} text-sm`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {label}
                  {pathname === href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                      layoutId="underline"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Link href={"/"} className='flex items-center transition duration-300 ease-in-out gap-x-1 text-white bg-[#21172F] hover:bg-[#e836d1] p-3 px-4 rounded-full'>
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_10143)"><path d="M8.00081 4.16675H6.33415C5.89212 4.16675 5.4682 4.34234 5.15564 4.6549C4.84308 4.96746 4.66748 5.39139 4.66748 5.83341V15.8334C4.66748 16.2754 4.84308 16.6994 5.15564 17.0119C5.4682 17.3245 5.89212 17.5001 6.33415 17.5001H14.6675C15.1095 17.5001 15.5334 17.3245 15.846 17.0119C16.1586 16.6994 16.3341 16.2754 16.3341 15.8334V5.83341C16.3341 5.39139 16.1586 4.96746 15.846 4.6549C15.5334 4.34234 15.1095 4.16675 14.6675 4.16675H13.0008" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.00012 4.16667C8.00012 3.72464 8.17572 3.30072 8.48828 2.98816C8.80084 2.67559 9.22476 2.5 9.66679 2.5H11.3335C11.7755 2.5 12.1994 2.67559 12.512 2.98816C12.8245 3.30072 13.0001 3.72464 13.0001 4.16667C13.0001 4.60869 12.8245 5.03262 12.512 5.34518C12.1994 5.65774 11.7755 5.83333 11.3335 5.83333H9.66679C9.22476 5.83333 8.80084 5.65774 8.48828 5.34518C8.17572 5.03262 8.00012 4.60869 8.00012 4.16667Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.00012 10H13.0001" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.00012 13.3333H13.0001" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_1_10143"><rect width="20" height="20" fill="white" transform="translate(0.5)"></rect></clipPath></defs></svg>
              Join us 
            </Link>
            <Link href={"/another"} className='flex items-center transition duration-300 ease-in-out gap-x-1 text-white bg-[#21172F] hover:bg-[#e836d1] p-2 rounded-full'>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.32526 23.7844L23.7251 6.38458" stroke="currentColor" strokeWidth="1.31611" strokeMiterlimit="10" strokeLinecap="square"/><path d="M12.1422 6.6604C18.297 11.7437 23.4077 6.05591 23.4077 6.05591" stroke="currentColor" strokeWidth="1.31611" strokeMiterlimit="10" strokeLinecap="square"/><path d="M23.4559 17.9739C18.3727 11.8191 24.0604 6.70833 24.0604 6.70833" stroke="currentColor" strokeWidth="1.31611" strokeMiterlimit="10" strokeLinecap="square"/></svg>
            </Link>
          </div>

          <div className={`md:hidden ${isScrolled ? "text-purple-900" : "text-gray-100"}`}>
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
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-72 bg-purple-600 shadow-lg z-50 md:hidden overflow-y-auto"
          >
            <div className="p-4">
              <button onClick={() => setIsOpen(false)} className="mb-4 text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <br /> <br />
              {links.map(({ href, label, icon }, index) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={href}>
                    <motion.div
                      className="px-4 py-2 mb-2 border-b border-gray-400"
                      whileTap={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                    >
                      {label}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}