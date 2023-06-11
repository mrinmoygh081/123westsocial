import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
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
                    <span className="title">ABOUT 123 WEST SOCIAL</span>
                    <h2>A unique experience for your next event</h2>
                  </div>
                  <div className="text">
                    Whether you’re looking for something to cool the heat of the
                    summer or want to escape the confines of your desk, 123 West
                    Social is for everyone. Step into our space, grab a
                    refreshment and make your way into a virtual world.
                  </div>
                  <div className="text">
                    We showcase technology that transforms entertainment, and
                    possibilities into a unique experience. 123 West Social has
                    been designed to create a more immersive experience, where
                    people can be transported to another time or place. This is
                    done through illusion by using technology that will change
                    the appearance of the space to a partial simulation of your
                    ideal location. We offer a range of options to host various
                    events and ensure it’s all specific to your needs. Whether
                    you want to throw a party for your child’s birthday or book
                    an event for your company, we have something for everyone.
                  </div>
                  <div className="btn-box">
                    <Link href="/contact" className="theme-btn btn-style-one">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="wow fadeInLeft">
                  <div className="author-desc">
                    <h2>A space for every moment</h2>
                  </div>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/R2tB5jEj6Ys"
                    title="123 West Social"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="container mt-50">
              <div className="row">
                <div className="col-12">
                  <div className="sec-title">
                    <span className="title">
                      Get To Know More About Us, How The Space Works, And More
                    </span>
                    <h2>
                      Turn your game night into an epic event at 123 West Social
                    </h2>
                  </div>
                  <div className="text">
                    We know you&apos;re looking for something fun to do with
                    your friends, so let our team of experts help you create an
                    unforgettable experience at 123 West Social. We have the
                    perfect combination of elements, amenities, entertainment,
                    and fun to make your next event successful.
                  </div>
                  <div className="text">
                    You can explore the world&apos;s most amazing cities within
                    the space and make a spectacular game night by taking it
                    vintage and playing Tik Tak Toe and Corn Hull. You can use
                    our ice machine and store everything you need in the
                    refrigerator that&apos;s provided, so you are all set!
                  </div>
                  <div className="text">
                    We know most smartphones can take professional photos now.
                    Still, nothing beats using our photo booth to create
                    memories and preserve your fantastic gathering!
                  </div>
                  <div className="text">
                    A uniquely designed, private, multi-purpose entertainment
                    venue. 123 West Social is where people can come together to
                    experience entertainment, culture, and education.
                  </div>
                  <div className="text">
                    The space has been designed to create a more immersive
                    experience where people can be transported to another time
                    or place. This is done through illusion by using technology
                    that will change the appearance of the space to a partial
                    simulation of your ideal location.
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
                    AN EVENT SPACE THAT TAKES YOU ANYWHERE
                    <br />
                    REVOLUTIONIZE YOUR SOCIAL EVENTS
                    <br />
                    123 w. SOLOMAN ST. GRIFFIN
                  </address>
                  <p>
                    <strong>Phone</strong>: (678) 782-0083
                    <br />
                    <strong>Email</strong>:{" "}
                    <a href="mailto:admit@cnu.edu" target="_blank">
                      123westsocial@gmail.com
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
                        HOME
                      </a>
                    </li>

                    <li>
                      <a href="https://cnu.edu/families/">ABOUT</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="https://cnu.edu/visit/campusmap/">
                        LOFT APARTMENT
                      </a>
                    </li>
                    <li>
                      <a href="https://cnu.edu/public/index.html">
                        Privacy &amp; Policies
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12" id="copyright">
                <p className="text-center">
                  <i className="far fa-copyright"></i> &nbsp; 123 WEST SOCIAL |
                  All Rights Reserved
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
