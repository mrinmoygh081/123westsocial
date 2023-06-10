import Footer from "@/components/Footer";
import Header from "@/components/Header";
import data from "@/lib/mongo/data";
import { checkBookingData } from "@/lib/utils/chackBookingData";
import { postAPI } from "@/lib/utils/fetchAPI";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Index() {
  const { query, push } = useRouter();
  const { id } = query;
  const [singleListing, setSingleListing] = useState(null);
  const [form, setForm] = useState({
    date: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    numOfGuests: "",
    hours: "",
  });
  // const cleanForm = () => {
  //   setForm({
  //     date: "",
  //     name: "",
  //     phone: "",
  //     email: "",
  //     address: "",
  //     numOfGuests: "",
  //     hours: "",
  //   });
  // };

  useEffect(() => {
    if (singleListing) {
      setForm({ ...form, space: singleListing?.name, spaceId: id });
    }
  }, [singleListing, id]);

  useEffect(() => {
    if (id) {
      let single = data.listings.filter((item) => item.id === parseInt(id));
      let [s] = single;
      setSingleListing(s);
    }
  }, [id]);

  const GoToPayment = () => {
    let validation = checkBookingData(form);
    if (validation) {
      push({ pathname: "/payments", query: form });
    }
  };

  return (
    <>
      <Header />

      <section>
        <div
          className="about_us_banner"
          style={{
            backgroundImage: `url(${singleListing?.banner})`,
          }}
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
            <div className="col-12 col-md-8 pb-4 text-center m-auto">
              <h1>{singleListing?.name}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                nobis illo repudiandae mollitia eum sed esse amet dolores
                accusamus vero iusto accusantium veniam in deserunt laborum
                sapiente placeat, quae eveniet?
              </p>
            </div>
          </div>
          <div className="row">
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
                          value={form?.date}
                          onChange={(e) =>
                            setForm({ ...form, date: e.target.value })
                          }
                        />
                      </div>
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
                      <input
                        type="number"
                        className="form-control p-3 my-3"
                        placeholder="How many hours you want to book?"
                        min={1}
                        value={form?.hours}
                        onChange={(e) =>
                          setForm({ ...form, hours: e.target.value })
                        }
                        onWheel={(e) => {
                          e.target.blur();
                          e.stopPropagation();
                          setTimeout(() => {
                            e.target.focus();
                          }, 0);
                        }}
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

              {singleListing && singleListing?.video && (
                <video
                  autoPlay
                  loop
                  controls
                  muted
                  style={{ width: "100%", height: "auto" }}
                >
                  <source src={singleListing?.video} />
                </video>
              )}
              {singleListing && singleListing?.image && (
                <Image
                  loader={({ src }) => `${src}`}
                  src={singleListing?.image}
                  alt=""
                  width="1000"
                  height="1000"
                  quality="100"
                  unoptimized
                  style={{ marginTop: "40px" }}
                />
              )}
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Index;
