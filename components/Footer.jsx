import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <Image
              alt=""
              id="logo"
              width={300}
              height={200}
              src="https://cnu.edu/_assets/svg/logo-white.svg"
            />
          </div>

          <div className="col-12 col-md-4">
            <div id="contact">
              <h1>Connect</h1>
              <p>
                Office of Admission
                <br />
                One Avenue of the Arts
                <br />
                Newport News, VA 23606
              </p>
              <p>
                <strong>Phone</strong>: (757) 594-7015
                <br />
                <strong>Email</strong>:{" "}
                <a href="mailto:admit@cnu.edu" target="_blank">
                  admit@cnu.edu
                </a>
                <br />
                <a
                  href="https://www.instagram.com/cnu_admission/"
                  title="instagram"
                >
                  <span className="sr-only">instagram</span>{" "}
                  <i className="fab fa-2x fa-instagram fa-fw"></i>
                </a>
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div id="resources">
              <h1>Resources</h1>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    Request Admission Information
                  </a>
                </li>

                <li>
                  <a href="#">For Families</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Campus Map</a>
                </li>
                <li>
                  <a href="#">Public Information &amp; Policies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12" id="copyright">
            <p className="text-center">
              <i className="far fa-copyright"></i> &nbsp; Christopher Newport
              University | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
