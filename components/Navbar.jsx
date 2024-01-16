"use client";

import Link from "next/link";

import "./Navbar.css";

export default function Navbar() {
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
        <button type="button" className="devfolio">
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
