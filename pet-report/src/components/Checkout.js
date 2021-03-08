import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "../App.css";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const stripePromise = loadStripe("pk_test_51IRkeOJSwIRdUzXUe1NVZ7aeCuVhohGkCRZdi5dfumFWnAERXwD7BSr9mdYZgJLUC5FMhV1KOWTi76tJ5be1Uagi003xv54HJ2");

const ProductDisplay = ({ handleClick }) => (
  <section>
    <button type="button" id="checkout-button" role="link" onClick={handleClick}>
      Donate $20
    </button>
  </section>
);
const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);
export default function Checkout () {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Donation placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to look around and donate when you're ready."
      );
    }
  }, []);

  const handleClick = async (event) => {

    const stripe = await stripePromise;
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const session = await response.json();
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return message ? (
    <Message message={message} />
  ) : (
      <ProductDisplay handleClick={handleClick} />
    );
}