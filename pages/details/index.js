import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { calDaysDiff } from "@/lib/utils/calDaysDiff";
import { checkBookingDaysData } from "@/lib/utils/chackBookingData";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Index() {
  const { push } = useRouter();
  const [dates, setDates] = useState({
    start: "",
    end: "",
  });
  const [form, setForm] = useState({
    date: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    numOfGuests: "",
    days: "",
  });

  const GoToPayment = () => {
    let validation = checkBookingDaysData(form);
    if (validation) {
      if (form?.days && form?.days > 0) {
        push({ pathname: "/payments", query: form });
      } else {
        toast.error("Please select booking dates correctly");
      }
    }
  };

  useEffect(() => {
    (function () {
      const { start, end } = dates;
      if (
        start !== "" &&
        start !== undefined &&
        start !== "" &&
        end !== undefined
      ) {
        let days = calDaysDiff(start, end);
        setForm({ ...form, days, date: start });
      }
    })();
  }, [dates]);

  return (
    <>
      <Header />

      <section>
        <div
          className="about_us_banner"
          style={{
            backgroundImage: `url("/images/page_banner_loft.jpeg")`,
          }}
        >
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
                  href="./images/air1.webp"
                >
                  <img src="./images/air1.webp" alt="" className="img-height" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row pb-lg-3 pb-0">
                <div className="col-6">
                  <div className="magnific-img">
                    <a
                      className="image-popup-vertical-fit"
                      href="./images/air2.webp"
                    >
                      <img
                        src="./images/air2.webp"
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
                      href="./images/air3.webp"
                    >
                      <img
                        src="./images/air3.webp"
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
                      href="./images/air4.webp"
                    >
                      <img
                        src="./images/air4.webp"
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
                      href="./images/air5.webp"
                    >
                      <img
                        src="./images/air5.webp"
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
                Entire loft hosted by 123 West Social
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
                    A room with wifi that’s well suited for working.
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
                <h3 style={{ color: "#fff" }}>How our space can be used?</h3>
                <p>
                  <b> Loft Apartment: </b>
                  Located upstairs can be utilized for makeup/wardrobe,
                  overnight stays, and more.
                  <br />
                  <b>Outside catering and bartending are welcome! </b> So you
                  can adjust the event to your liking. Keep in mind that in this
                  case, clients must submit the license or certificate for their
                  bartender at least 7 days prior to their event.
                </p>
              </div>
            </div>

            <div className="col-lg-4 px-3 px-lg-5">
              <form action="" className="from_bg">
                <div style={{ width: "100%" }}>
                  <div>
                    <div className="d-flex justify-content-between hotel_ratiog">
                      <h4>$120 per night</h4>
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
                          value={dates?.start}
                          onChange={(e) =>
                            setDates({
                              ...dates,
                              start: e.target.value,
                            })
                          }
                        />
                        <input
                          type="date"
                          className="checkin_form checkin_form2"
                          value={dates?.end}
                          onChange={(e) =>
                            setDates({ ...dates, end: e.target.value })
                          }
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
                        value={form?.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        className="form-control p-3 my-3"
                        placeholder="Your Phone Number"
                        value={form?.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        className="form-control p-3 my-3"
                        placeholder="Your email"
                        value={form?.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        className="form-control p-3 my-3"
                        placeholder="Your Address"
                        value={form?.address}
                        onChange={(e) =>
                          setForm({ ...form, address: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        className="form-control p-3 my-3"
                        placeholder="Number Of Guests"
                        value={form?.numOfGuests}
                        onChange={(e) =>
                          setForm({ ...form, numOfGuests: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="btn-box center_btn">
                    <button
                      type="button"
                      className="theme-btn btn-style-one inner_btn"
                      onClick={GoToPayment}
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="container mb-5 px-4 px-lg-0 overflow-hidden listing-item pading-res">
          <div className="row">
            <h2 className="font-family-Cormorant">
              <b>Additional Price Considerations:</b>
            </h2>
            <div className="col-lg-6 col-12">
              <div className="d-flex justify-content-between">
                <div>
                  <div className="d-flex pt-3">
                    <div>
                      <h4>Security</h4>
                      <h5>
                        1 security guard is required for every 65 guests <br />
                        <span>Charged at $30/hr per guard</span>
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex pt-3">
                    <div>
                      <h4>Host Fee</h4>
                      <h5>
                        A host is required to be present for all events. <br />
                        <span>Charged at $125 with a 4 hours minimum.</span>
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex pt-3">
                    <div>
                      <h4>Other costs to consider</h4>
                      <h5>
                        Cleaning Service: All events will require a cleaning fee
                        of $150 per booking. <br />
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-5 px-4 px-lg-0 overflow-hidden listing-item pading-res">
          <div className="row">
            <h2 className="font-family-Cormorant">
              <b>Event Insurance Requirement:</b>
            </h2>
            <div className="col-lg-6 col-12">
              <div className="text-secondary">
                <p>
                  We require insurance with each rental. As a partner, we
                  recommend TheEventHelper.com to secure your insurance. They
                  will assist you with the right insurance specifically for your
                  event. Consider:
                </p>
                <ul>
                  <li>
                    <b>An additional insured party on the COl.</b>
                  </li>
                  <li>
                    <b>
                      Please ensure that host liquor liability coverage is
                      included if you will have alcohol on site.
                    </b>
                  </li>
                </ul>
                <p>
                  All bookings will be required to complete a Credit Card
                  Authorization Form for the purpose of possible damages to the
                  space. A refundable damage deposit may also be required.
                </p>
                <p>
                  <i>
                    *Rental rates and requirements are subject to change on
                    Holidays, or Full Film Buyouts*
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-5 px-4 px-lg-0 overflow-hidden listing-item pading-res">
          <div className="row">
            <h2 className="font-family-Cormorant">
              <b>Add Ons for your Event:</b>
            </h2>
            <div className="col-lg-6 col-12">
              <div className="text-secondary">
                <ul>
                  <li>
                    <b>Customized Screen varies</b>
                  </li>
                  <li>
                    <b>Colored Linen varies</b>
                  </li>
                  <li>
                    <b>Chairs</b>
                  </li>
                  <li>
                    <b>Security ($30/hr)</b>
                  </li>
                  <li>
                    <b>Loft Apartment ($30/hr)</b>
                  </li>
                </ul>
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
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
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

export default Index;
