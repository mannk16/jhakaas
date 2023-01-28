import React from "react";
import FooterLogo from "../../assets/Jhakaas.logo.png";
import { useNavigate } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { BsFillPhoneFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "./Footer.css";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="footer-section">
        <div className="footer-logo">
          <img
            className="footer-logo-img"
            src={FooterLogo}
            alt="Jhakkas Logo"
          />
        </div>
        <div className="footer-permalinks">
          <h3 className="permalinks-links">Permalinks</h3>
          <ul className="footer-links">
            <li onClick={() => navigate("/")} className="footer-link">
              Home
            </li>
            <li onClick={() => navigate("/shop")} className="footer-link">
              Shop
            </li>
            <li onClick={() => navigate("/about")} className="footer-link">
              About
            </li>
            <li onClick={() => navigate("/contact")} className="footer-link">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3 className="permalinks-links">Contact</h3>

          <ul className="footer-links">
            <li className="footer-link contact-link">
              <BsFillPhoneFill className="footer-icon" />
              <p>+12345678910</p>
            </li>
            <li className="footer-link contact-link">
              <HiMail className="footer-icon" />
              <p>jhakaasinfo@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillLinkedin />
          <AiFillTwitterCircle />
        </div>
      </section>
    </>
  );
};
