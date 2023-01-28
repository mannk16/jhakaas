import "./About.css";
import React from "react";
import AboutImg from "../../assets/home.pdf.png";

export const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="about-image">
          <img className="about-img" src={AboutImg} alt="About page Image" />
        </div>
        <div className="about-content">
          <h1 className="about-heading">About Us</h1>
          <p className="about-para">
            Welcome to Jhakaas! We are a leading producer of delicious and
            refreshing soft-drinks. Our company was founded in 2023 with a
            commitment to using only the finest ingredients and a dedication to
            crafting the perfect taste.
            <p className="about-para">
              {" "}
              We are proud to offer a wide range of flavors and types of
              soft-drinks. Our company is committed to using sustainable and
              eco-friendly practices in all aspects of our operations. From
              sourcing our ingredients to packaging our products, we strive to
              minimize our impact on the environment. We value our customers and
              are dedicated to providing the highest level of customer service.
            </p>
            If you have any questions or comments about our products or company,
            please do not hesitate to contact us. Thank you for choosing our
            soft-drinks and we look forward to serving you!
          </p>
        </div>
      </div>
    </>
  );
};
