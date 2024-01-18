'use client';

import { motion } from 'framer-motion';
import './Feedback.css';
import { InsightCard, TitleText, TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

function Feedback() {
  return (
    <div className='partner-section'>
      <TitleText title="Our Partners" textStyles="text-center" className="partner-heading"/>
      <div className='sponsors'>
        <img className="sponsorsImages" id="dev" src="/devfolio_spon.webp" alt="" />
        <img className="sponsorsImages" id="cake" src="\interviewcakeImg.png" alt="" />
        <img className="sponsorsImages" id="xyz" src="\xyzImg.png" alt="" />
        <img className="sponsorsImages" id="certi" src="\givemycertificate_spon.png" alt="" />
        <img className="sponsorsImages" id="polygon" src="/polygon_spon.png" alt="" />
        <img className="sponsorsImages" id="buddy" src="\InterviewBuddyImg.png" alt="" />
        <img className="sponsorsImages" id="bee" src="/BeeceptorImg.png" alt="" />
        <img className="sponsorsImages" id="axure" src="\axureImg.svg" alt="" />
        <img className="sponsorsImages" id="echo3d" src="\echo3DImg.png" alt="" />
        <img className="sponsorsImages" id="replit" src="/ReplitImg-.png" alt="" />
        <img className="sponsorsImages" id="alpha" src="\WolframAlphaImg.png" alt="" />
        <img className="sponsorsImages" src="\rosenfeldImg.png" alt="" />
      </div>

    </div>
  );
}

export default Feedback;
