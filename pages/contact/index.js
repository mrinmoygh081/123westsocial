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

        <section className="contact-address-area">
          <div className="container">
            <div className="sec-title-style1 text-center max-width ">
              <div className="title text-white">Contact Us</div>
              <div className="text">
                <div className="decor-left">
                  <span></span>
                </div>
                <p className="text-white">Quick Contact</p>
                <div className="decor-right">
                  <span></span>
                </div>
              </div>
              <div className="bottom-text">
                <p>
                  Fixyman is proud to be the name that nearly 1 million
                  homeowners have trusted since 1996 for home improvement and
                  repair, providing virtually any home repair.
                </p>
              </div>
            </div>
            <div className="contact-address-box row">
              <div className="col-sm-4 single-contact-address-box text-center box-white">
                <div className="icon-holder">
                  <span className="icon-clock-1">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                    <span className="path5"></span>
                    <span className="path6"></span>
                    <span className="path7"></span>
                    <span className="path8"></span>
                    <span className="path9"></span>
                    <span className="path10"></span>
                    <span className="path11"></span>
                    <span className="path12"></span>
                    <span className="path13"></span>
                    <span className="path14"></span>
                    <span className="path15"></span>
                    <span className="path16"></span>
                    <span className="path17"></span>
                    <span className="path18"></span>
                    <span className="path19"></span>
                    <span className="path20"></span>
                  </span>
                </div>
                <h3>Lorem Ipsum</h3>
                <h2>Lorem Ipsum is simply dummy</h2>
              </div>

              <div className="col-sm-4 single-contact-address-box main-branch">
                <h3>Lorem Ipsum</h3>
                <div className="inner">
                  <ul>
                    <li>
                      <div className="title">
                        <h4>Address:</h4>
                      </div>
                      <div className="text">
                        <p>
                          Lorem Ipsum, 40C, Lorem Ipsum dummy,
                          <br /> Lorem Ipsum, Ch 98054
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="title">
                        <h4>Ph & Fax:</h4>
                      </div>
                      <div className="text">
                        <p>
                          +123 456 789 <br /> test@info.com
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="title">
                        <h4>Office Hrs:</h4>
                      </div>
                      <div className="text">
                        <p>
                          Mon-Fri: 9:30am - 6:30pm
                          <br /> Sat-Sun: Closed
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 single-contact-address-box text-center box-white">
                <div className="icon-holder">
                  <span className="icon-question-2">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                  </span>
                </div>
                <h3>Lorem Ipsum</h3>
                <h2>Lorem Ipsum is simply dummy</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-info-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="contact-form">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="sec-title-style1 float-left">
                        <div className="title text-white">
                          Send Your Message
                        </div>
                        <div className="text">
                          <div className="decor-left">
                            <span></span>
                          </div>
                          <p>Contact Form</p>
                        </div>
                      </div>
                      <div className="text-box float-right">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="inner-box">
                    <form
                      id="contact-form"
                      name="contact_form"
                      className="default-form"
                      action="inc/sendmail.php"
                      method="post"
                    >
                      <div className="row">
                        <div className="col-xl-6 col-lg-12">
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="input-box">
                                <input
                                  type="text"
                                  name="form_name"
                                  placeholder="Name"
                                />
                              </div>
                              <div className="input-box">
                                <input
                                  type="text"
                                  name="form_phone"
                                  placeholder="Phone"
                                />
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="input-box">
                                <input
                                  type="email"
                                  name="form_email"
                                  placeholder="Email"
                                />
                              </div>
                              <div className="input-box">
                                <input
                                  type="text"
                                  name="form_website"
                                  placeholder="Website"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12">
                              <div className="input-box">
                                <input
                                  type="text"
                                  name="form_subject"
                                  placeholder="Subject"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                          <div className="input-box">
                            <textarea
                              name="form_message"
                              placeholder="Your Message..."
                              required=""
                            ></textarea>
                          </div>
                          <div className="button-box">
                            <input
                              id="form_botcheck"
                              name="form_botcheck"
                              className="form-control"
                              type="hidden"
                            />
                            <button
                              type="submit"
                              data-loading-text="Please wait..."
                            >
                              Send Message
                              <span className="flaticon-next"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default index;
