'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

function InsightCard({ imgUrl, title, subtitle, index }) {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className="flex md:flex-row gap-4"
    >
       <img
        src={imgUrl}
        alt="image36.jpeg"
        //className=" md:ml-15 md:w-[80px] w-full h-[80px] rounded-[32px] object-cover"
        className = "md:ml-64 md:w-[150px] w-full h-[100px] md:h-[150px] rounded-[32px] object-cover"
      />
     
      <div className="w-full flex items-center">
        <div className="flex-1 md:ml-54 flex flex-col max-w-[80%]">
       
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
            {title}
          </h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {subtitle}
          </p>
        </div>

        {/* <div className='lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white'>
      </div> */}
      </div>
    </motion.div>
  );
}

export default InsightCard;
