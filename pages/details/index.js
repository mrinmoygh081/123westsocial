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
                your place
              </strong>
            </h2>
          </div>
        </div>

        <div className="container img-gallery-magnific my-50 pading-res">
          <div className="row">
            <div className="mb-4">
              <h2 className="font-family-Cormorant mb-0">
                Find a space. Fulfill your vision.
              </h2>
              <p>
                <u>Griffin, Georgia, United States</u>
              </p>
            </div>

            <div className="col-lg-6">
              <div className="magnific-img">
                <a
                  className="image-popup-vertical-fit"
                  href="./images/rooms-3.jpg"
                >
                  <img
                    src="./images/rooms-1.jpg"
                    alt=""
                    className="img-height"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row pb-lg-3 pb-0">
                <div className="col-6">
                  <div className="magnific-img">
                    <a
                      className="image-popup-vertical-fit"
                      href="./images/rooms-2.jpg"
                    >
                      <img
                        src="./images/rooms-2.jpg"
                        alt=""
                        className="img-height"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-6">
                  <div className="magnific-img">
                    <a
                      className="image-popup-vertical-fit"
                      href="./images/rooms-3.jpg"
                    >
                      <img
                        src="./images/rooms-3.jpg"
                        alt=""
                        className="img-height"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="magnific-img">
                    <a
                      className="image-popup-vertical-fit"
                      href="./images/rooms-4.jpg"
                    >
                      <img
                        src="./images/rooms-4.jpg"
                        alt=""
                        className="img-height"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-6">
                  <div className="magnific-img">
                    <a
                      className="image-popup-vertical-fit"
                      href="./images/rooms-5.jpg"
                    >
                      <img
                        src="./images/rooms-5.jpg"
                        alt=""
                        className="img-height"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-0 my-lg-5 pading-res">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="font-family-Cormorant">
                Entire villa hosted by Rini
              </h2>
              <div className="font-details text-secondary">
                <span> 4 guests</span> . <span>2 Bedrooms</span> .{" "}
                <span>2 Beds</span> . <span>2 Bathrooms</span>
                <span> WIFI</span> . <span>Air Condition</span> .{" "}
                <span>Kitchen</span> . <span>Free parking</span>
              </div>
              <hr />

              <div className="d-flex align-items-center py-2 mb-3">
                <div className="font-details">
                  <h6>
                    <b>Dedicated workspace</b>
                  </h6>
                  <span className="text-secondary">
                    Check yourself in with the keypad.
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-center py-2 mb-3">
                <div className="font-details">
                  <h6>
                    <b>Self check-in</b>
                  </h6>
                  <span className="text-secondary">
                    Check yourself in with the keypad.
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-center py-2 mb-3">
                <div className="font-details">
                  <h6>
                    <b>Free cancellation for 48 hours.</b>
                  </h6>
                </div>
              </div>

              <hr />
              <div className="text-secondary">
                <p>
                  The charm of the place is the greenery surrounding the villa
                  and the swimming pool.This place is home to 14 mango, 18
                  coconut and many rare trees and plants. It’s a green haven
                  away from the city’s hustle and bustle yet not so far from the
                  heart of Kolkata.The villa has been designed to give a
                  contemporary twist to a traditional farmhouse villa. The
                  artwork on the wall and furniture have been hand made by the
                  host herself. The mirrors and cabinets have been upcycled from
                  old doors and windows.
                </p>
              </div>
            </div>

            <div className="col-lg-4 px-3 px-lg-5">
              <form action="" className="from_bg">
                <div style={{ width: "100%" }}>
                  <div>
                    <div className="d-flex justify-content-between hotel_ratiog">
                      <h4>₹14,000 night</h4>
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
                          className="checkin_form checkin_form1"
                        />
                        <input
                          type="date"
                          className="checkin_form checkin_form2"
                        />
                      </div>
                      <select
                        name="option"
                        className="checkin_form checkin_form3"
                      >
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option2">option3</option>
                      </select>
                    </div>
                  </div>

                  <div className="btn-box center_btn">
                    <a href="#" className="theme-btn btn-style-one inner_btn">
                      Change Dates
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="container mb-5 px-4 px-lg-0 overflow-hidden listing-item pading-res">
          <div className="row">
            <h2 className="font-family-Cormorant">
              <b>What this place offers :</b>
            </h2>
            <div className="col-lg-6 col-12">
              <div className="d-flex justify-content-between">
                <div>
                  <div className="d-flex pt-3">
                    <div>
                      <h5>Kitchen</h5>
                    </div>
                  </div>
                  <div className="d-flex pt-3">
                    <div>
                      <h5>Free on-street parking</h5>
                    </div>
                  </div>
                  <div className="d-flex pt-3">
                    <div>
                      <h5>Air conditioning</h5>
                    </div>
                  </div>
                  <div className="d-flex pt-3">
                    <div>
                      <h5>Refrigerator</h5>
                    </div>
                  </div>
                  <div className="d-flex pt-3">
                    <div>
                      <h5>Carbon monoxide alarm</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div>
                <div className="d-flex pt-0 pt-lg-5">
                  <div>
                    <h5>Wifi</h5>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <div>
                    <h5>TV with standard cable/satellite</h5>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <div>
                    <h5>Luggage drop-off allowed</h5>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <div>
                    <h5>Microwave</h5>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <div>
                    <h5>Smoke alarm</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-5 listing-item pading-res">
          <div className="row">
            <div className="col-lg-12">
              <div className="listing-item mb-5">
                <h2 className="font-family-Cormorant">
                  <b>Where you’ll be</b>
                </h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.671923022752!2d-84.2648242!3d33.24889739999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f461d98ab59ea9%3A0x5f3b760ed2024b6a!2s123%20W%20Solomon%20St%2C%20Griffin%2C%20GA%2030223%2C%20USA!5e0!3m2!1sen!2sin!4v1685896833483!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div>
                <h6 className="map_text">
                  123 W Solomon St Griffin, GA 30223 USA
                </h6>
                <p>
                  Charming Historic Downtown Griffin is a true gem. Located
                  right in the middle of the city, just steps from all the local
                  shops and eateries. And some of the Best Festivals around.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-5 px-4 px-lg-0 overflow-hidden listing-item pading-res">
          <div className="row">
            <h2 className="font-family-Cormorant">
              <b>Things to know:</b>
            </h2>
            <div className="col-12 col-lg-4">
              <div className=" d-flex justify-content-between">
                <div>
                  <h5 className="things_to_know">House rules</h5>
                  <div className="d-flex pt-3">
                    <div>
                      <h5>Kitchen</h5>
                    </div>
                  </div>
                  <div className="d-flex pt-3">
                    <div>
                      <h5>Free on-street parking</h5>
                    </div>
                  </div>
                  <div className="d-flex pt-3">
                    <div>
                      <h5>Air conditioning</h5>
                    </div>
                  </div>
                  <div className="d-flex pt-3">
                    <div>
                      <h5>Refrigerator</h5>
                    </div>
                  </div>
                  <div className="d-flex pt-3">
                    <div>
                      <h5>Carbon monoxide alarm</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div>
                <h5 className="things_to_know">Safety & property</h5>
                <div className="d-flex pt-0 pt-lg-5">
                  <div>
                    <h5>Wifi</h5>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <div>
                    <h5>TV with standard cable/satellite</h5>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <div>
                    <h5>Luggage drop-off allowed</h5>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <div>
                    <h5>Microwave</h5>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <div>
                    <h5>Smoke alarm</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div>
                <h5 className="things_to_know">Cancellation policy</h5>
                <div className="d-flex pt-0 pt-lg-5">
                  <div>
                    <h5>Wifi</h5>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <div>
                    <h5>TV with standard cable/satellite</h5>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <div>
                    <h5>Luggage drop-off allowed</h5>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <div>
                    <h5>Microwave</h5>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <div>
                    <h5>Smoke alarm</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default index;
