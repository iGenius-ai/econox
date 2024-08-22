'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '@/utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-bold text-3xl text-[#a9a9a9] ${textStyles}`}
  >
    {Array.from(title).map((letter, i) => (
      <motion.span variants={textVariant2} key={i}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>

);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-semibold md:text-6xl text-5xl text-white ${textStyles}`}
  >{title}
  </motion.h2>
);
