import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function listingDetails() {
  return (
    <>
      <Header />

      <section>
        <div
          className="about_us_banner"
          style={{ backgroundImage: `url("./images/banner_corporate.jpeg")` }}
        >
          <div className="mb-5">
            <h2 className="listing_heading font-bold mb-6 text-center mb-5">
              <strong className="text-white">
                An Event Space where you can have <br /> a private social
                immersive experience
              </strong>
            </h2>
          </div>
        </div>

        <div className="container my-0 my-lg-5 pading-res">
          <div className="row">
            <div className="col-12 pb-4 text-center">
              <h1>Corporate Meetings or annual gatherings</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                nobis illo repudiandae mollitia eum sed esse amet dolores
                accusamus vero iusto accusantium veniam in deserunt laborum
                sapiente placeat, quae eveniet?
              </p>
            </div>
            <div className="col-lg-4 px-3 px-lg-5">
              <form action="" className="from_bg">
                <div style={{ width: "100%" }}>
                  <div>
                    <div className="d-flex justify-content-between hotel_ratiog">
                      <h4>$120 per hour</h4>
                      <p>
                        <span>
                          {" "}
                          <i className="fa-solid fa-star"></i> 4.74.
                        </span>{" "}
                        128 reviews
                      </p>
                    </div>
                    <div className="checkin">
                      <div className="checkin_checkout">
                        <input
                          type="date"
                          className="checkin_form checkin_form_both_top"
                        />
                      </div>
                      {/* <select
                        name="option"
                        className="checkin_form checkin_form3"
                      >
                        <option value="4">4 Guests</option>
                        <option value="option2">option2</option>
                        <option value="option2">option3</option>
                      </select> */}
                      <input
                        type="text"
                        className="form-control p-3 my-3"
                        placeholder="Your Name"
                      />
                      <input
                        type="text"
                        className="form-control p-3 my-3"
                        placeholder="Your Phone Number"
                      />
                      <input
                        type="text"
                        className="form-control p-3 my-3"
                        placeholder="Your email"
                      />
                      <input
                        type="text"
                        className="form-control p-3 my-3"
                        placeholder="Your Address"
                      />
                      <input
                        type="number"
                        className="form-control p-3 my-3"
                        placeholder="Number Of Guests"
                      />
                    </div>
                  </div>

                  <div className="btn-box center_btn">
                    <a href="#" className="theme-btn btn-style-one inner_btn">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-8 px-3 px-lg-5">
              <div className="d-flex justify-content-between">
                <div>
                  <h2>What We Provide: </h2>
                  <ul>
                    <li>Standard illuminated projection </li>
                    <li>Bluetooth & Wi-Fi </li>
                    <li>Ice maker & refrigerator </li>
                    <li>Photo booth </li>
                    <li>Tik Tak Toe & Corn Hull </li>
                  </ul>
                </div>
                <div>
                  <h2>Extra Features: </h2>
                  <ul>
                    <li>Personalized illuminated projection</li>
                    <li>Additional table & chairs</li>
                  </ul>
                </div>
              </div>
              <img src="./images/corporate.jpeg" alt="" className="w-100" />
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default listingDetails;
