import React from "react";
import "./Home.css";
import HeroImg from "../../assets/ecom-bottle.png";
import { useNavigate } from "react-router-dom";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";
import { Subscribe } from "../../components/Subscribe/Subscribe";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div class="section-home">
        <div className="home_main-img">
          <img className="home-hero-img" src={HeroImg} />
        </div>
        <div className="home-main-content">
          <h1 className="home-heading">Quenching your thirst</h1>
          <p className="home-para">
            Head over to our shop now and browse our selection of delicious
            drinks. We're sure you'll find something you love! And don't forget
            to sign up for our newsletter to stay up-to-date on our latest
            products and special offers.
          </p>
          <button onClick={() => navigate("/shop")} className="btn-grad">
            Shop Now !!
          </button>
        </div>
      </div>

      <div className="jhakaas-headline">
        <h1 className="jhakaas-headline-heading">
          Jhakaas Aaya Sabko Bhaaya!!
        </h1>
      </div>
      <Bestsellers />
      <Subscribe />
    </>
  );
};
