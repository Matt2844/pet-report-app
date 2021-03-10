import React from 'react'
import Checkout from './Checkout'

export default function() {

  return (
    <div>
      <div className="donation-text">
        <h3>Help support Pet Report Pro.</h3>
        <p>If you or your employees find this application useful, please make a donation. A portion of the
          donations will be used to make improvements. Payments are extremely secure, and processed by a trusted third party called <a href="https://stripe.com/en-ca">Stripe.</a>
          <br />
          <br />
          This application would not be possible without your support. Any questions or comments can be answered by sending an email to pet.report.pro@gmail.com.
          <br />
          <br />
          Thank you!
        </p>
      </div>
      <Checkout />
    </div>
  )
}