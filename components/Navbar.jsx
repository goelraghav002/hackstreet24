'use client';

import Link from 'next/link';

import React from 'react';
import './Navbar.css';

function Navbar() {
  const [status, setStatus] = React.useState(false);
  const handleClick = () => {
    setStatus(!status);
  }
  
  return (
    <div className="nav">
      <div className="heading">
        <h2>HACKSTREET 2.0</h2>
      </div>
      <div className="NavBar-desc">
        <Link href="/">HOME</Link>
        <Link href="#about">ABOUT</Link>
        <Link href="#prize">PRIZE</Link>
        <Link href="#faq">FAQs</Link>
        <Link href="#sponser">SPONSERS</Link>
        <button type="button"  className="devfolio">
          <span>
            <a href="https://youtu.be/dQw4w9WgXcQ?si=LEaggX_fLM_s3I1W">
              DEVFOLIO
            </a>
          </span>
        </button>
      </div>
      <button type="button" onClick={handleClick} className="menuButton">
        <img id="menuImg" src="/menuBtn.png" />
      </button>

      <div style={{ display: status ? 'block' : 'none' }} className="NavBar-description flex flex-col">
        <button type="button" onClick={handleClick}className='crossImg'><img src="/whiteCross.png"/></button>

        <Link className="navParts" href="/">HOME</Link><br/>
        <Link className="navParts" href="#about">ABOUT</Link><br/>
        <Link className="navParts" href="#prize">PRIZE</Link><br/>
        <Link className="navParts" href="#faq">FAQs</Link><br/>
        <Link className="navParts" href="#sponser">SPONSERS</Link><br/>
        <button type="button" className="devfolio-btn">
          <span>
            <a href="https://youtu.be/dQw4w9WgXcQ?si=LEaggX_fLM_s3I1W">
              DEVFOLIO
            </a>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
