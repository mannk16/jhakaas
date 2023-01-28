import "./Subscribe.css";
import React from "react";

export const Subscribe = () => {
  return (
    <section className="Subscribe-section">
      <div className="Subscribe-desc">
        <h2 className="Subscribe-heading">Subscribe Us </h2>
        <p className="Subscribe-para">
          Subscribe to our newsletter and get offers and discounts directly in
          your inbox !!
        </p>
      </div>
      <div className="Subscribe-form">
        <form action="https://formspree.io/f/mnqynybr" method="POST">
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="your email here"
          />

          <button className="Submit-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
