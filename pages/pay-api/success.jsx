import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function Success() {
  const { query, push } = useRouter();

  const { paymentId } = query;

  const goToHome = () => {
    push({ pathname: "/" });
  };
  return (
    <>
      <Header />

      <section>
        <div className="about_us_banner">
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
          <div className="card_payments">
            <h2>
              {paymentId && (
                <span>Payment is successful. Payment ID is {paymentId}</span>
              )}
            </h2>
            <button
              type="button"
              className="theme-btn btn-style-one inner_btn"
              onClick={goToHome}
            >
              Go Back To Home
            </button>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Success;
