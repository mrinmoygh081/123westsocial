import Image from "next/image";
import React from "react";
import logo from "@public/images/logo.jpeg";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <Image alt="" id="logo" width={200} height={700} src={logo} />
          </div>

          <div className="col-12 col-md-4">
            <div id="contact">
              <h1>Connect</h1>
              <p>123 W. Solomon St. Griffin, GA</p>
              <p>
                <strong>Phone</strong>: 678. 782.0083
                <br />
                <strong>Email</strong>:{" "}
                <a href="mailto:123westsocial@gmail.com" target="_blank">
                  123westsocial@gmail.com
                </a>
                <br />
                <Link
                  href="https://www.instagram.com/123westsocial/"
                  target="_blank"
                  title="instagram"
                >
                  <span className="sr-only">instagram</span>{" "}
                  <i className="fab fa-2x fa-instagram fa-fw"></i>
                </Link>
                <Link
                  href="https://youtu.be/R2tB5jEj6Ys"
                  target="_blank"
                  title="youtube"
                >
                  <span className="sr-only">YouTube</span>{" "}
                  <i className="fab fa-2x fa-youtube fa-fw"></i>
                </Link>
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div id="resources">
              <h1>Resources</h1>
              <ul>
                <li>
                  <Link href="/" target="_blank">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/spaces">Spaces</Link>
                </li>
                <li>
                  <Link href="/details">Loft Appartment</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12" id="copyright">
            <p className="text-center">
              <i className="far fa-copyright"></i> &nbsp; 123 West Social | All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
