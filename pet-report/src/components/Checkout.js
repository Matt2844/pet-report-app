import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function Checkout () {
  const [donation, setDonation] = useState('');


  return (
    <div className="container">
      <div className="donations">
        <button value="5" onClick={(e) => setDonation(e.target.value)}>$5</button>
        <button value="10" onClick={(e) => setDonation(e.target.value)}>$10</button>
        <button value="20" onClick={(e) => setDonation(e.target.value)}>$20</button>
        <button value="45" onClick={(e) => setDonation(e.target.value)}>$45</button>
      </div>
      <StripeCheckout
        stripeKey="pk_live_51IRkeOJSwIRdUzXUxuUEDDP8vmziDARdG4ySB8W8nx3x0K0SEoL95d0I0QzkCGqimG5xr2KjMKwJLl3c9kW684iR00KuT7NGPZ"
        amount={donation * 100}
        billingAddress
        shippingAddress
      />
    </div>
  );
}