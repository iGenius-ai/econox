'use client';

import { motion } from 'framer-motion';
import StartSteps from './parts/StartSteps';
import Image from 'next/image';
import { startingFeatures } from '../constants/Features';
import { TitleText, TypingText } from '../constants/CustomText';
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';

const GetStarted = () => (
  <section className={`relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`mx-auto container flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex items-center justify-center flex-1`}
      >
        <Image src="/get-started.png" alt="Get-Started" className="w-[90%] h-[90%] object-content" width={500} height={500} />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How We Work" textStyles={"mb-8 text-[#a9a9a9]"} />
        <TitleText title={<> Get Started with just a few clicks </>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((features, index) => (
            <StartSteps
              key={features}
              number={index + 1}
              text={features}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
