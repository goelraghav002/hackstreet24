'use client';

import Link from 'next/link';

import React, { useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [status, setStatus] = React.useState(false);
  const handleNavClick = () => {
    setStatus(!status);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
        <Link href="#sponser">PARTNERS</Link>
        <div
          className="apply-button"
          data-hackathon-slug="hackstreet24"
          data-button-theme="light"
          style={{ height: '44px', width: '312px' }}
        />
      </div>
      <button type="button" onClick={handleNavClick} className="menuButton">
        <img id="menuImg" src="/menuBtn.png" />
      </button>

      <div
        style={{ display: status ? 'block' : 'none' }}
        className="NavBar-description flex flex-col"
      >
        <button type="button" onClick={handleNavClick} className="crossImg">
          <img src="/whiteCross.png" />
        </button>

        <Link className="navParts" href="/">
          HOME
        </Link>
        <br />
        <Link className="navParts" href="#about">
          ABOUT
        </Link>
        <br />
        <Link className="navParts" href="#prize">
          PRIZE
        </Link>
        <br />
        <Link className="navParts" href="#faq">
          FAQs
        </Link>
        <br />
        <Link className="navParts" href="#sponser">
          PARTNERS
        </Link>
        <br />
        <div
          className="apply-button"
          data-hackathon-slug="hackstreet24"
          data-button-theme="light"
          style={{ height: '44px', width: '312px' }}
        />
      </div>
    </div>
  );
}

export default Navbar;
