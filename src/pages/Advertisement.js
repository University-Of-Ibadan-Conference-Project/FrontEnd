import React from "react";

const advertisement = () => {
  return (
    <div className="app__adverts">
      <div className="app__adverts-section app__adverts-banner">
        <h1>ADVERTISEMENT</h1>
        <p className="details">
          Individuals, companies and organisations wishing to place adverts
          and/or goodwill messages in the confreence programme/Book of Abstracts
          should send their write-up together with the payment fee (cash) to the
          secrtary of the LOC on or before 5 April, 2023.
        </p>
      </div>

      <div className="app__adverts-section app__adverts-rates">
        <h1>RATES</h1>
        <div className="rates-list">
          <span className="rate">
            <p>Back Full Cover Page</p>
            <p>₦50,000.00</p>
          </span>
          <span className="rate">
            <p>Half Back Cover Page</p>
            <p>₦25,000.00</p>
          </span>
          <span className="rate">
            <p>Inner Full Cover Page</p>
            <p>₦40,000.00</p>
          </span>
          <span className="rate">
            <p>Half Inner Cover Page</p>
            <p>₦20,000.00</p>
          </span>
          <span className="rate">
            <p>Full Inner Page</p>
            <p>₦25,000.00</p>
          </span>
          <span className="rate">
            <p>Half Inner Page</p>
            <p>₦13,000.00</p>
          </span>
          <span className="rate">
            <p>Quarter Inner Page</p>
            <p>₦8,500.00</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default advertisement;
