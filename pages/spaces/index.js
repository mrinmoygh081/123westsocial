import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Header from "@/components/Header";
import data from "@/lib/mongo/data";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";

// import { getSpaces } from "@lib/mongo/spaces";

function Index() {
  const [spaces, setSpaces] = useState(null);

  useEffect(() => {
    setSpaces(data.listings);
  }, []);

  return (
    <>
      <Header />

      <div id="scrollsmoother-container">
        <div className="about_us_banner">
          <div>
            <h2 className="listing_heading font-bold mb-6 text-center mb-5">
              <strong className="text-white">
                Find your creative space in <br />
                your&apos;s place
              </strong>
            </h2>
          </div>
        </div>

        <div className="px-6 lg:px-44">
          <section className="about-section">
            <div className="container">
              <div className="row clearfix">
                <div className="content-column col-md-6 col-sm-12 col-xs-12">
                  <div className="inner-column">
                    <div className="sec-title">
                      <div className="title">
                        Uniquely Designed, Private, Multi-Purpose, Entertainment
                        Venue
                      </div>
                      <h2>
                        An event space where you can have a private social
                        immersive experience
                      </h2>
                    </div>
                    <div className="text">
                      Immersive experiences submerge a person in a new or
                      augmented world, making ordinary life more interesting and
                      fulfilling through technology. This is perfect for any
                      gathering with endless possibilities. Our space is
                      functional to provide an entertaining environment for
                      almost any event, including:
                    </div>
                    <Link href="/about" className="theme-btn btn-style-three">
                      Read More
                    </Link>
                  </div>
                </div>

                <div className="image-column col-md-6 col-sm-12 col-xs-12">
                  <div
                    className="inner-column"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      <Image
                        src={require("@public/images/about.jpg")}
                        alt=""
                        width="1000"
                        height="1000"
                        quality="100"
                      />
                      <div className="overlay-box">
                        <div className="year-box">
                          <span className="number">5</span>Years <br />{" "}
                          Experience <br />
                          Working
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <h2 className="listing_heading font-bold mb-6 text-center mb-5">
            <strong className="text-white">
              At 123 West Social, the sky is the limit. Wait, there is no limit!
            </strong>
          </h2>
          <section>
            <div className="container">
              <div className="row d-flex justify-content-center">
                {spaces &&
                  spaces.map((item, i) => (
                    <div key={i} className=" col-md-4 col-12">
                      <Link
                        href={`${item.id}`}
                        className="wrapper"
                        style={{ width: "100%" }}
                      >
                        {/* <h1>THAILAND</h1> */}
                        <div className="image">
                          <Image
                            loader={({ src }) => src}
                            src={item?.image}
                            alt=""
                            width="500"
                            height="500"
                            quality="100"
                          />
                        </div>
                        <div className="details">
                          <h2>{item?.name}</h2>
                          <p>{item?.days}</p>
                        </div>
                        <h1>$120 per hour</h1>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          <section className="second_about_section">
            <div className="container">
              <div className="sec-title">
                <span className="title">
                  Immersive experiences that put you in the middle of the action
                </span>
                <h2 style={{ color: "#121212" }}>How does it work?</h2>
              </div>
              <div className="text">
                123 West showcases the fun applications of cutting-edge
                technology – it’s about realizing the transformative potential
                of immersive experiences through personalized spaces
              </div>
              <div className="text">
                Immersive technology can be used to create a variety of
                experiences; we want to focus on providing a space that can
                morph into the atmosphere that suits your event and meets your
                desires. The space is designed to create an environment where
                people can interact with each other and have a shared experience
                that takes reality to the next level. There’s nothing like
                feeling you&apos;re someplace else without ever leaving your
                spot.
              </div>
              <div className="text">
                123 West Social allows you to be anywhere in the world without
                traveling. It offers the possibility to create the ideal
                atmosphere to complement your event or gathering.
              </div>
              <div className="text">
                Immersive experiences are crucial features of virtual reality
                technology. Over the last few years, these have become more
                mainstream as people search for new ways of entertainment and
                original spaces that add excitement to their lives. Some of the
                most popular experiences include &quot; walking around” an
                environment while feeling like you’re there.
              </div>
              <div className="text">
                In case you didn&apos;t know, this technology is used in theme
                parks and other attractions where people can explore jungles,
                take rides on roller coasters, go inside haunted houses, etc.
                With the use of illumination projection mapping on walls and
                floors, you can have a 360-degree view of your ideal location.
              </div>
            </div>
          </section>

          <h2 className="listing_heading font-bold mb-6 text-center mb-5">
            <strong className="text-white">Gallery Section</strong>
          </h2>

          <GallerySection />
        </div>

        <Footer />
      </div>
    </>
  );
}

// export async function getServerSideProps() {
// call disabled to show the error
// const { spaces } = await getSpaces();
// console.log(spaces);
// return {
//   props: {
//     spaces: spaces, //returning an empty array to avoid other errors
//   },
// };
// }

export default Index;
