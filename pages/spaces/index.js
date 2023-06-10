import Footer from "@/components/Footer";
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
                      <div className="title">Never-ending possibilities</div>
                      <h2>
                        We Are The Leader In <br /> The Interiores
                      </h2>
                    </div>
                    <div className="text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries
                    </div>
                    <a href="about.html" className="theme-btn btn-style-three">
                      Read More
                    </a>
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
            <strong className="text-white">A space for every moment</strong>
          </h2>
          <section>
            <div className="container">
              <div className="row d-flex justify-content-center">
                {spaces &&
                  spaces.map((item, i) => (
                    <Fragment key={i}>
                      <Link href={`${item.id}`} className="wrapper">
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
                    </Fragment>
                  ))}
              </div>
            </div>
          </section>

          <section className="second_about_section">
            <div className="container">
              <div className="sec-title">
                <span className="title">Our Future Goal</span>
                <h2 style={{ color: "#121212" }}>
                  We want to lead in innovation & Technology
                </h2>
              </div>
              <div className="text">
                We works on UI/UX and functionality as well so that a plugins
                comes with proper stucture & stunning looks which suits to your
                web app & website.We take a small toolkit here and ride it well
                so that it is fit for your use. One who performs well and looks
                even better.Here we are trying to give you all kinds of
                technical content, whether it is related to designing or
                functionality. We are creating content on a lot of languages and
                will continue to make it free of cost even if you use it without
                any problem. Which is a very important thing.Here you can also
                share the content you create, if our technical team likes it,
                then we will also share it on our blog.In the end, I would say
                keep visiting our website and enjoy the quality content.
              </div>
            </div>
          </section>

          <h2 className="listing_heading font-bold mb-6 text-center mb-5">
            <strong className="text-white">Gallery Section</strong>
          </h2>

          <section className="pb-5">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="wrapper">
                  <h1>KOREA</h1>
                  <div className="image i1"></div>
                  <div className="details">
                    <h1>Seoul</h1>
                    <h2>Ramada Hotel</h2>
                    <p>3 Days - 2 Nights</p>
                  </div>
                  <h1>₹1250</h1>
                </div>

                <div className="wrapper">
                  <h1>PHILIPPINES</h1>
                  <div className="image i1"></div>
                  <div className="details">
                    <h1>Boracay Island</h1>
                    <h2>Surfer&apos;s Home</h2>
                    <p>3 Days - 2 Nights</p>
                  </div>
                  <h1>₹750</h1>
                </div>

                <div className="wrapper">
                  <h1>THAILAND</h1>
                  <div className="image i3"></div>
                  <div className="details">
                    <h1>Mae Hong Son</h1>
                    <h2>Farmer&apos;s Walk</h2>
                    <p>4 Days - 3 Nights</p>
                  </div>
                  <h1>₹750</h1>
                </div>
              </div>
            </div>
          </section>
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
