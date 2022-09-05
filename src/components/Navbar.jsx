/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import logo from "../assets/logo.svg";
import padlock from "../assets/padlock.png";


export default function Navbar() {
  const [navState, setNavState] = useState(false);
  const hideNav = () => setNavState(false)
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <a href="/"><img src={logo} alt="logo" /></a>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose size={25} onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu size={25} onClick={() => setNavState(true)} />
            )}
          </div>
          
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li>
            <HashLink to="/#product" onClick={hideNav}>Product</HashLink>
          </li>
          <li>
            <HashLink to="/tokenomics" onClick={hideNav}>Tokenomics</HashLink>
          </li>
          <li>
            <HashLink to="/#roadmap" onClick={hideNav}>Roadmap</HashLink>
          </li>
          <li>
            <a href="https://feed3.gitbook.io/feed3/" target='_blank' rel="noreferrer">Whitepaper</a>
          </li>
          <li>
            <HashLink to="/#team" onClick={hideNav}>Team</HashLink>
          </li>
          <li>
            <HashLink to="/#faq" onClick={hideNav}>FAQ</HashLink>
          </li>
          <li>
            <HashLink to="/buy" onClick={hideNav}>Buy Presale</HashLink>
          </li>
          <li>
           <a href="http://presale.feed3.io/" target='_blank' rel="noreferrer">Login</a>
          </li>
          <li className="md:hidden">
              <a href="#" className="flex items-center space-x-1">
                <img className="w-[20px] pointer-events-none" src={padlock} alt="padlock"></img>
                <span className="text-white">Claim</span>
              </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
