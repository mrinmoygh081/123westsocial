import Image from "next/image";
import React from "react";

function GallerySection() {
  return (
    <>
      <section className="pb-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-4">
              <div className="wrapper">
                <Image
                  src={require("@public/images/about.jpg")}
                  alt=""
                  width="1000"
                  height="1000"
                  quality="100"
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="wrapper">
                <Image
                  src={require("@public/images/about.jpg")}
                  alt=""
                  width="1000"
                  height="1000"
                  quality="100"
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="wrapper w-100">
                <Image
                  src={require("@public/images/about.jpg")}
                  alt=""
                  width="1000"
                  height="1000"
                  quality="100"
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="wrapper w-100">
                <Image
                  src={require("@public/images/about.jpg")}
                  alt=""
                  width="1000"
                  height="1000"
                  quality="100"
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="wrapper w-100">
                <Image
                  src={require("@public/images/about.jpg")}
                  alt=""
                  width="1000"
                  height="1000"
                  quality="100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GallerySection;
