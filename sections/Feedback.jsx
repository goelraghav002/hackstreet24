'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

function Feedback() {
  return (
    <section className={`${styles.paddings} relative z-10`} id="sponser">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-1700 flex justify-end flex-col gradient-05 sm:p-99 p-56 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white mt-[-200px] text-center">
              Partners
            </h4>
            <p className="mt-[-5px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white text-center">
              IEEE | Hackstreet 2.0
            </p>
            <p className="mt-[-5px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white text-center">
            “Special Thanks to”
          </p>
          </div>


          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[-1%] top-[1%]"
          >
     
            <img
              src="/logo_hack.png"
              alt="stamp"
              className="w-[125px] h-[125px] object-contain"
            />

            <img
              src="/devfolio_spon.webp"
              alt="gold1"
              className="w-[125px] h-[125px] object-contain"
            />

            <img
              src="/polygon_spon.png"
              alt="gold2"
              className="w-[125px] h-[125px] object-contain"
            />

            <img
              src="/replit_spon.png"
              alt="silver"
              className="w-[100px] h-[100px] object-contain"
            />

            

          </motion.div>
          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -center-[20%] bottom-[1%]"
          >

            <img
              src="/beeceptor_spon.png"
              alt="api"
              className="w-[125px] h-[125px] object-contain"
            />


            <img
              src="/interviewbuddy_spon.png"
              alt="interview"
              className="w-[125px] h-[125px] object-contain"
            />

            <img
              src="/interviewcake_spon.png"
              alt="interview1"
              className="w-[125px] h-[125px] object-contain"
            />
          </motion.div>
          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -right-[-30%] bottom-[1%]"
          >
            <img
              src="/givemycertificate_spon.png"
              alt="interview1"
              className="w-[125px] h-[125px] object-contain"
            />

            <img
              src="/wolfram_spon.png"
              alt="spon1"
              className="w-[150px] h-[150px] object-contain"
            />
          </motion.div>

          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -right-[-10%] top-[1%]"
          >
            <img
              src="/echo3D_spon.png"
              alt="spon2"
              className="w-[100px] h-[100px] object-contain"
            />

            <img
              src="/xyz_spon.png"
              alt="spon3"
              className="w-[100px] h-[100px] object-contain"
            />
            <img
              src="/axure_spon.png"
              alt="spon4"
              className="w-[100px] h-[100px] object-contain"
            />

            <img
              src="/rosenfeld_spon.png"
              alt="spon5"
              className="w-[100px] h-[100px] object-contain"
            />

          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Feedback;
