import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PaypalComp from "@/components/PaypalComp";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Index() {
  const { query } = useRouter();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    setBooking(query);
  }, [query]);

  const bookingHandler = async () => {
    let data = await postAPI("add_book_hour", form, null);
    if (data?.status) {
      cleanForm();
      toast.success(
        "Booking added successfully. Our Team will contact you very soon. Thank you!"
      );
    } else {
      toast.error("Something went wrong! Please try again later.");
    }
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
              Booking Summary for <br /> {booking?.space}
            </h2>
            <p>
              Name: <strong>{booking?.name}</strong>
            </p>
            <p>
              Booking Date: <strong>{booking?.date}</strong>
            </p>
            <p>
              Phone: <strong>{booking?.phone}</strong>
            </p>
            <p>
              Email: <strong>{booking?.email}</strong>
            </p>
            <p>
              Address: <strong>{booking?.address}</strong>
            </p>
            <p>
              Number Of Guests: <strong>{booking?.numOfGuests}</strong>
            </p>
            <p>
              Booked For:{" "}
              <strong>{booking?.hours && `${booking?.hours}hours`}</strong>
              <strong>{booking?.days && `${booking?.days}days`}</strong>
            </p>

            <p>
              Costing:{" "}
              <strong>{booking?.hours && `$${booking?.hours * 120}`}</strong>
              <strong>{booking?.days && `$${booking?.days * 120}`}</strong>
            </p>
            {/* <button
              type="button"
              className="theme-btn btn-style-one inner_btn"
              onClick={bookingHandler}
            >
              Book Now
            </button> */}
            <div className="my-5 text-center">
              <h3>Please Scan To Pay</h3>
              <Image
                src={require("@public/images/qr_code.jpeg")}
                width={300}
                height={600}
                alt=""
                style={{ margin: "auto" }}
              />
              <h4>Or</h4>
            </div>

            <PaypalComp
              bookedFor={booking?.space}
              price={booking?.hours * 120}
              bookingHandler={bookingHandler}
            />
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Index;
