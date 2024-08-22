'use client';

import { motion } from 'framer-motion';
import { TypingText } from '@/constants/CustomText';
import { fadeIn, staggerContainer } from '@/utils/motion';

const About = () => (
  <section className={`relative z-10`}>
    <div className="gradient-02 z-0"></div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`mx-auto flex items-center justify-center container flex-col`}
    >
      <TypingText
        title="| About Econox Coin"
        textStyles="text-center mb-8"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-6 font-normal text-2xl max-sm:text-xl leading-relaxed text-center text-secondary-white"
      >
        <span className="font-extrabold"> Econox Coin </span> is an eco-friendly cryptocurrency designed to promote environmental sustainability and 
        financial inclusion. Using a proof-of-stake mechanism, it minimizes energy consumption and supports green projects and sustainable development. 
        <span className="font-extrabold"> Econox Coin</span> offers a way for users to participate in the digital economy while contributing to environmental preservation.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
