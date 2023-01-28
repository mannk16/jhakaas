import React, { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import "./Navbar.css";
import Logo from "../../assets/Jhakaas.logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState(0);
  const quantityItem = useSelector((state) => state.cart.products);

  const totalquant = () => {
    let quant = 0;
    quantityItem.forEach((item) => (quant += item.quantity));
    return quant;
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo_img">
          <img className="logo" src={Logo} onClick={() => navigate("/")} />
        </div>
        <div className="navbar_links"></div>
        <ul className="navbar_links_list">
          <li className="list_link" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="list_link" onClick={() => navigate("/shop")}>
            Shop
          </li>
          <li className="list_link" onClick={() => navigate("/about")}>
            About
          </li>

          <li className="list_link cart_icon" onClick={() => navigate("/cart")}>
            <BsFillCartFill />
            <span className="circle">{totalquant()}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
