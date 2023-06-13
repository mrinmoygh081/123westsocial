import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Header from "@/components/Header";
import React from "react";

function Index() {
  return (
    <>
      <Header />

      <section>
        <div
          className="about_us_banner"
          style={{
            backgroundImage: `url("/images/page_banner_gallery.jpeg")`,
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
          <h2 className="listing_heading font-bold my-6 text-center">
            <strong className="text-white">Gallery Section</strong>
          </h2>
          <GallerySection />
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Index;
