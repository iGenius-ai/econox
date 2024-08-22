'use client';

import { motion } from 'framer-motion';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../constants/CustomText';
import NewFeatures from './parts/NewFeatures';
import Image from 'next/image';
import { newFeatures } from '@/constants/Features';

const WhatsNew = () => (
  <section className={`relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`mx-auto flex container lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| What's new?" textStyles={"mb-8"} />
        <TitleText title={<>What&apos;s new about EconoxCoin?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 flex items-center justify-center`}
      >
        <Image
          src="/whats-new.png"
          alt="get-started" width={500} height={500}
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
