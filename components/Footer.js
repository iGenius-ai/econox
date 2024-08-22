'use client';

import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';
import Link from 'next/link';
import { socials } from '@/constants/Features';
import Image from 'next/image';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`py-8 relative mx-auto container`}
  >
    <div className="footer-gradient"></div>
    <div className={`mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Join us today...
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <Image width={100} height={100}
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <Link href={"/"} className="font-normal text-[16px] text-white">
            Back to top
          </Link>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            ECONOXCOIN
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2024 EconoxCoin. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.link}>
                <Image width={100} height={100}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
