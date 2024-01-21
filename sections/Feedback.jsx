'use client';

import { motion } from 'framer-motion';
import './Feedback.css';
import { InsightCard, TitleText, TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

function Feedback() {
  return (
    <div className="partner-section" id="sponser">

      <TitleText title="Our Partners" textStyles="text-center" className="partner-heading" />

      <div>
        <div className="sponsors-section">
          <TitleText title="Gold Partners" textStyles="text-center" />
          <div className="sponsors" id="gsp">
            <img className="sponsorsImages" id="dev" src="/devfolio_spon.webp" alt="DEVFOLIO LOGO" />
            <img className="sponsorsImages" id="polygon" src="/polygon_spon.png" alt="POLYGON LOGO" />
          </div>
        </div>

        <div>
          <TitleText title="Silver Partner" textStyles="text-center" />
          <div className="sponsors">
            <img className="sponsorsImages" id="replit" src="/ReplitImg-.png" alt="REPLIT LOGO" />
          </div>
        </div>

        <div>
          <TitleText title="API Partner" textStyles="text-center" />
          <div className="sponsors">
            <img className="sponsorsImages" id="bee" src="/BeeceptorImg.png" alt="" />
          </div>
        </div>

        <div>
          <TitleText title="Interview Partners" textStyles="text-center" />
          <div className="sponsors">
            <img className="sponsorsImages" id="buddy" src="\InterviewBuddyImg.png" alt="" />
            <img className="sponsorsImages" id="cake" src="\interviewcakeImg.png" alt="" />
          </div>
        </div>

        <div>
          <TitleText title="Certificate Partner" textStyles="text-center" />
          <div className="sponsors">
            <img className="sponsorsImages" id="certi" src="\givemycertificate_spon.png" alt="" />
          </div>
        </div>

        <div>
          <TitleText title="In-Kind Partners" textStyles="text-center" />
          <div className="sponsors inkind-sp">
            <img className="sponsorsImages" id="alpha" src="\WolframAlphaImg.png" alt="" />
            <img className="sponsorsImages" id="echo3d" src="\echo3DImg.png" alt="" />
            <img className="sponsorsImages" id="xyz" src="\xyzImg.png" alt="" />
            <img className="sponsorsImages" id="axure" src="\axureImg.svg" alt="" />
            <img className="sponsorsImages" id="rosen" src="\rosenfeldImg.png" alt="" />
          </div>
        </div>

      </div>

    </div>
  );
}

export default Feedback;
