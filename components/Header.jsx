import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logo from "@public/images/logo.jpeg";
import data from "@/lib/mongo/data";
import { useRouter } from "next/router";
import Head from "next/head";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggle = () => setIsMenuOpen(!isMenuOpen);
  const router = useRouter();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>123 West Social</title>
      </Head>
      <header className="large_device_menu">
        <div className="logo" id="logo">
          <Link href="/">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="123westsocial logo"
            />
          </Link>
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
                    <Link href="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/details">Loft Appartment</Link>
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
                    {data &&
                      data.listings &&
                      data.listings.map((item, i) => (
                        <li key={i}>
                          <Link href={`${item.id}`}>{item.name}</Link>
                        </li>
                      ))}
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
