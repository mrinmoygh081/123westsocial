import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function index() {
  return (
    <>
      <Header />
      <section>
        <div className="about_us_banner">
          <div className="mb-5">
            <h2 className="listing_heading font-bold mb-6 text-center mb-5">
              <strong className="text-white">
                Find your creative space in <br />
                your&apos;s place
              </strong>
            </h2>
          </div>
        </div>

        <section className="about-page my-50">
          <div className="container">
            <div className="row d-flex align-content-center justify-content-center">
              <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="title">About Css3transition</span>
                    <h2>We are Creative Tech Enthusiast working since 2015</h2>
                  </div>
                  <div className="text">
                    I am Rahul Yaduvanshi works at Css3 Transition since last 3
                    years. We are here to provide touch notch solution for your
                    website or web application that helps you to make your
                    website look attractive & efficient in handling by creating
                    usefull plugins thats you need.
                  </div>
                  <div className="text">
                    We are here to serve you next level tutorial that currently
                    in trend to match you with your expertise. Css3 transition
                    is a learning website. where you can find many good quality
                    content related to web development and tutorials about
                    plugins. here we are using html, html5, css, css3, jquery &
                    javascript along with inspirational UI design layout by
                    professionals by using Photoshop and adobe allustrator.
                  </div>
                  <div className="btn-box">
                    <a href="#" className="theme-btn btn-style-one">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="author-desc">
                    <h2>A space for every moment</h2>
                  </div>
                  <figure className="image-1">
                    <a
                      href="#"
                      className="lightbox-image"
                      data-fancybox="images"
                    >
                      <img
                        title="Rahul Kumar Yadav"
                        src="./images/img (12).jpeg"
                        alt=""
                      />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
            <div className="container mt-50">
              <div className="row">
                <div className="col-12">
                  <div className="sec-title">
                    <span className="title">Our Future Goal</span>
                    <h2>We want to lead in innovation & Technology</h2>
                  </div>
                  <div className="text">
                    We works on UI/UX and functionality as well so that a
                    plugins comes with proper stucture & stunning looks which
                    suits to your web app & website.
                  </div>
                  <div className="text">
                    We take a small toolkit here and ride it well so that it is
                    fit for your use. One who performs well and looks even
                    better.
                  </div>
                  <div className="text">
                    Here we are trying to give you all kinds of technical
                    content, whether it is related to designing or
                    functionality. We are creating content on a lot of languages
                    and will continue to make it free of cost even if you use it
                    without any problem. Which is a very important thing.
                  </div>
                  <div className="text">
                    Here you can also share the content you create, if our
                    technical team likes it, then we will also share it on our
                    blog.
                  </div>
                  <div className="text">
                    In the end, I would say keep visiting our website and enjoy
                    the quality content.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <img
                  alt="Christopher Newport University logo"
                  id="logo"
                  src="https://cnu.edu/_assets/svg/logo-white.svg"
                />
              </div>

              <div className="col-12 col-md-4">
                <div id="contact">
                  <h1>Connect</h1>
                  <address>
                    Office of Admission
                    <br />
                    One Avenue of the Arts
                    <br />
                    Newport News, VA 23606
                  </address>
                  <p>
                    <strong>Phone</strong>: (757) 594-7015
                    <br />
                    <strong>Email</strong>:{" "}
                    <a href="mailto:admit@cnu.edu" target="_blank">
                      admit@cnu.edu
                    </a>
                    <br />{" "}
                    <a
                      href="https://www.instagram.com/cnu_admission/"
                      title="instagram"
                    >
                      <span className="sr-only">instagram</span>{" "}
                      <i className="fab fa-2x fa-instagram fa-fw">&nbsp;</i>
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div id="resources">
                  <h1>Resources</h1>
                  <ul>
                    <li>
                      <a
                        href="https://admit.cnu.edu/register/?id=bb901bd9-ff61-4ff8-8d3e-d36a181f8548"
                        target="_blank"
                      >
                        Request Admission Information
                      </a>
                    </li>

                    <li>
                      <a href="https://cnu.edu/families/">For Families</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="https://cnu.edu/visit/campusmap/">Campus Map</a>
                    </li>
                    <li>
                      <a href="https://cnu.edu/public/index.html">
                        Public Information &amp; Policies
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12" id="copyright">
                <p className="text-center">
                  <i className="far fa-copyright"></i> &nbsp; Christopher
                  Newport University | All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
      </section>
      <Footer />
    </>
  );
}

export default index;
