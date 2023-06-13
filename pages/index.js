import Footer from "@/components/Footer";
import Header from "@/components/Header";
import data from "@/lib/mongo/data";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const { push } = useRouter();
  const [search, setSearch] = useState({
    what: "",
    when: "",
    hours: "",
  });

  console.l;
  const handleSearch = () => {
    if (search?.what !== "") {
      push({ pathname: `/${search?.what}`, query: search });
    } else {
      toast.error("Please select what you are you planning?");
    }
  };

  return (
    <>
      <Header />

      <main>
        <div className="relative overflow-hidden w-100 vh-100">
          <Image
            className="absolute img-fluid banner_image"
            data-speed="auto"
            src="/images/img (11).jpeg"
            width={3000}
            height={2000}
            alt=""
          />
          <div className="section-center">
            <div className="search_container">
              <div className="row m-auto">
                <div className="booking-form">
                  <div className="row no-margin">
                    <div className="col-md-8 px-5">
                      <div className="row no-margin">
                        <div className="col-lg-4 col-12">
                          <div className="form-group">
                            <span className="form-label">
                              What are you planning?
                            </span>
                            {/* <input
                              className="form-control"
                              placeholder="Enter your activity"
                              type="text"
                            /> */}
                            <select
                              value={search?.what}
                              onChange={(e) =>
                                setSearch({ ...search, what: e.target.value })
                              }
                              className="select_form"
                            >
                              <option value="">Choose your option</option>
                              {data?.listings.map((item, index) => (
                                <option value={item.id} key={index}>
                                  {item.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-12">
                          <div className="form-group">
                            <span className="form-label">When?</span>
                            <input
                              className="form-control"
                              type="date"
                              placeholder="Date"
                              value={search?.when}
                              onChange={(e) =>
                                setSearch({ ...search, when: e.target.value })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-12">
                          <div className="form-group">
                            <span className="form-label">Hours?</span>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="No of hours"
                              value={search?.hours}
                              onChange={(e) =>
                                setSearch({ ...search, hours: e.target.value })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-12">
                      <div className="form-btn">
                        <button className="submit-btn" onClick={handleSearch}>
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row my-50 border-dashed ">
            <div className="col-12 col-lg-4">
              <img src="./images/uploads/dinner.jpg" alt="" />
            </div>
            <div className="col-12 col-lg-4">
              <img src="./images/uploads/gaming.webp" alt="" />
            </div>
            <div className="col-12 col-lg-4">
              <img src="./images/home_page4.jpeg" alt="" />
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row my-50 border-dashed ">
            <div className="col-12 p-5">
              <h2 className="page_heading">
                Find a space,Fullfill your vision
              </h2>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row my-50 border-dashed ">
            <div className="col-12 col-lg-4">
              <img src="./images/home_page5.jpeg" alt="" />
            </div>
            <div className="col-12 col-lg-4">
              <img src="./images/hero_img2.jpeg" alt="" />
            </div>
            <div className="col-12 col-lg-4">
              <img src="./images/img (10).jpeg" alt="" />
            </div>
          </div>
        </div>

        <div className="container other_information">
          <div className="row my-50">
            <div className="col-12">
              <div className="sec-title">
                <span className="title">123 West Social</span>
                <h2>
                  The future is here, and 123 West Social is how you get there.
                </h2>
              </div>
              <div className="text">
                A social, interactive, and high-tech environment that allows you
                to be anywhere you want in a virtual world that takes reality
                one step forward.
              </div>
              <div className="text">
                We use technology to create an innovative illusion so you can
                experience the world and &quot;travel&quot; anywhere. You can
                feel different atmospheres globally through our simulation and
                enjoy the space with your friends and family, or even shift a
                way of doing corporate events.
              </div>
              <div className="text">
                123 West Social creates immersive experiences that open the
                possibility of visiting and touring any place you dream of. By
                enhancing your sense of immersion and the correct implementation
                of realistic illusions, we are bringing new levels of emotional
                intensity to your &quot;travels.&quot;
              </div>
              <div className="text">
                {/* Here you can also share the content you create, if our technical
                team likes it, then we will also share it on our blog. */}
                {/* </div>
              <div className="text">
                In the end, I would say keep visiting our website and enjoy the
                quality content. */}
              </div>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row my-50">
            <div className="col-12 col-lg-8 paralax_text d-flex align-items-center justify-content-center">
              <div className="container other_information">
                <div className="row ">
                  <div className="col-12 p-5">
                    <div className="sec-title">
                      <span className="title">
                        Live your dream life conveniently and unusually at 123
                        West Social. You can experience being in more than one
                        place at a time without taking a plane or a road trip.{" "}
                      </span>
                      <h2 style={{ color: "#121212", fontSize: "60px" }}>
                        OUR MISSION
                      </h2>
                    </div>
                    <div className="text" style={{ color: "#121212" }}>
                      Our mission is to create a next-generation social
                      experience that brings people together in new ways and
                      utilizes technology in a fun way.
                    </div>
                    <div className="text" style={{ color: "#121212" }}>
                      Our goal is to bring you into a world where you can
                      experience the feeling of traveling anywhere around the
                      globe and feel like you are there. It will feel so
                      realistic that you&apos;ll even want to check that place
                      off your bucket list.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 paralax_image">
              <video width="100%" height="100%" autoPlay muted>
                <source src="./images/img-video-1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row my-50 border-dashed ">
            <div className="col-12 p-5">
              <h2 className="page_heading">
                A unique experience for your next event
              </h2>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row my-50">
            <div className="col-12 col-lg-4 paralax_image">
              <video width="100%" height="100%" autoPlay muted>
                <source src="./images/img-video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="col-12 col-lg-8 paralax_text d-flex align-items-center justify-content-center">
              <div className="container other_information">
                <div className="row ">
                  <div className="col-12 p-5">
                    <div className="sec-title">
                      <span className="title">
                        At 123 West Social, the sky is the limit. Wait, there is
                        no limit!
                      </span>
                      <h2 style={{ color: "#121212", fontSize: "60px" }}>
                        Why choose 123 West Social?
                      </h2>
                    </div>
                    <div className="text" style={{ color: "#121212" }}>
                      You can count on 123 West Social to provide a fun and
                      original experience for your next dinner party, game
                      night, birthday party, corporate function, or impromptu
                      family gathering, and turn your next weekend hangout into
                      an epic experience!
                    </div>
                    <div className="text" style={{ color: "#121212" }}>
                      123 West Social is an immersive social space that comes to
                      life as a result of the passion of Homemade Tomato
                      Developers. We are a team of creative designers, realtors,
                      and engineers who are passionate about creating the
                      ultimate experience for consumers.
                    </div>
                    <div className="text" style={{ color: "#121212" }}>
                      Our team of developers is dedicated to creating an
                      experience that will blow your mind.
                    </div>
                    <div className="text" style={{ color: "#121212" }}>
                      We aim to provide an engaging and realistic environment in
                      which people can interact with one another as if they were
                      in real life visiting someplace else.
                    </div>
                    <div className="text" style={{ color: "#121212" }}>
                      Our venue is perfect for hosting your next party or
                      corporate event. We have everything you need!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="horr-hover-slider">
          <a target="_blank" href="#" className="horr-hover-slider-link">
            <img decoding="async" src="./images/img (12).jpeg" alt="" />
          </a>
          <a target="_blank" href="#" className="horr-hover-slider-link">
            <img
              decoding="async"
              src="./images/page_banner_gallery.jpeg"
              alt=""
            />
          </a>
          <a target="_blank" href="#" className="horr-hover-slider-link">
            <img decoding="async" src="./images/img (10).jpeg" alt="" />
          </a>
          <a target="_blank" href="#" className="horr-hover-slider-link">
            <img decoding="async" src="./images/img (9).jpeg" alt="" />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
