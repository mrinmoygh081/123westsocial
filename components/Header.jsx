import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logo from "@public/images/logo.jpeg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggle = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <header className="large_device_menu">
        <div className="logo" id="logo">
          <a href="index.html">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="123westsocial logo"
            />
          </a>
        </div>
        <div
          className={
            isMenuOpen ? "hamburger-menu active fixed" : "hamburger-menu"
          }
          onClick={toggle}
        >
          <div className="menu-bar1"></div>
          <div className="menu-bar2"></div>
          <div className="menu-bar3"></div>
        </div>
        <div className={isMenuOpen ? "nav-menu navShow" : "nav-menu"}>
          <div className="main-container" id="textAnimation">
            <div className="nav-menu__container">
              <div className="menu-items">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/details">Details</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="menu-items">
                <ul>
                  <li>
                    <Link href="/spaces">Spaces</Link>
                  </li>
                  <ul>
                    <li>
                      <a href="prototype-packaging.html">Prototype Packaging</a>
                    </li>
                    <li>
                      <a href="ux-branding-solutions.html">
                        UX Design / Branding
                      </a>
                    </li>
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="digital-transformation.html">
                        Digital Consultancy
                      </a>
                    </li>
                    <li>
                      <a href="application-development-solutions.html">
                        Enterprise Applications Dev
                      </a>
                    </li>
                    <li>
                      <a href="#">Data Insights</a>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
