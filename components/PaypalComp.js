import React, { useEffect } from "react";
import { loadScript } from "@paypal/paypal-js";
import { toast } from "react-toastify";

function PaypalComp({ bookedFor, price, bookingHandler }) {
  //   console.log("fd", bookedFor, typeof price);
  const loadPaypal = () => {
    loadScript({
      clientId:
        "AfdEdg88-YqgijrPrZNFswl1btO2q68ThlOeYUuqzcyAUQYUiXXIgR326F7rplohCDUyk6W44U8lXkK1",
      components: "buttons,marks,messages",
      dataPageType: "checkout",
      currency: "USD",
    })
      .then((paypal) => {
        paypal
          .Buttons({
            createOrder: (data, actions, err) => {
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                  {
                    description: "Corporate Meetings or annual gatherings",
                    amount: {
                      currency_code: "USD",
                      value: price,
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              console.log(order);
              toast.success("Payment successful");
              await bookingHandler();
            },
            onError: (err) => {
              console.log(err);
            },
          })
          .render("#paypal_element")
          .catch((error) => {
            console.error("failed to render the PayPal Buttons", error);
          });
      })
      .catch((error) => {
        console.error("failed to load the PayPal JS SDK script", error);
      });
  };

  useEffect(() => {
    loadPaypal();
  }, []);

  return (
    <>
      <div id="paypal_element"></div>
    </>
  );
}

export default PaypalComp;
