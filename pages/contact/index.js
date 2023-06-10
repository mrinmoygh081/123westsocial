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
                Every experience requires personalized attention, and we want to make sure everything is exactly how you need it!
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
                <h3>We are located at 123 W Solomon Street Griffin, GA 30223</h3>
                <h2>Get in touch with us so we can start planning your next event!</h2>
              </div>

              <div className="col-sm-4 single-contact-address-box main-branch">
                <h3>123 WEST SOCIAL</h3>
                <div className="inner">
                  <ul>
                    <li>
                      <div className="title">
                        <h4>Address:</h4>
                      </div>
                      <div className="text">
                        <p>
                        123 W Solomon Street Griffin, GA 30223
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="title">
                        <h4>Ph & Email</h4>
                      </div>
                      <div className="text">
                        <p>
                        678. 782. 0083 <br /> 123westsocial@gmail.com
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="title">
                        <h4>Office Hrs:</h4>
                      </div>
                      <div className="text">
                        <p>
                        Mon-Thur: 10am - 11pm <br /> Fri- Sun: 10am - 2am
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
                <h3>Immersive experiences that put you in the middle of the action</h3>
                <h2>At 123 West Social, the sky is the limit. Wait, there is no limit!</h2>
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
                        Reach out so we can get all your details sorted out! Fill this contact form so we can answer any questions and let's get started
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
