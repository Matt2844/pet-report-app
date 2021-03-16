import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

class PayPal extends React.Component {
  render () {
    const onSuccess = (payment) => {
      // Congratulations, the payment was successful!
      console.log("The payment was successful!", payment);
    };

    const onCancel = (data) => {
      // User pressed 'cancel' or closed the PayPal popup window
      console.log("The payment was cancelled!", data);
    };

    const onError = (err) => {
      // The main PayPal 's script can't be loaded
      console.log("Error!", err);
    };

    // Using sandbox for testing only
    let env = "sandbox";
    // Let's set our currency here
    let currency = "USD";
    // Testing total amount
    let total = 10;

    const client = {
      sandbox:
        "Aax0kN8TrVyIpe9a0cYaBCy_Grs4j_VyX17Da9BWDJCa7kF73JN82CmV3qZXM6ocXfsOzKIiKUMnsmmU",
    };

    return (
      <div
        className="paypal-btn"
        style={{ margin: "1.5rem", textAlign: "center" }}
      >
        <PaypalExpressBtn
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{ shape: "rect", size: "medium", margin: "1.5rem" }}
        />
      </div>
    );
  }
}

export default PayPal