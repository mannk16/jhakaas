import React from "react";
import { useNavigate } from "react-router-dom";

import { AiFillDelete } from "react-icons/ai";
import "./Cart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/cartReducer";

export const Cart = () => {
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const subtotal = () => {
    let total = 0;
    cartProducts.forEach((item) => (total += item.quantity * item.price));
    return total;
  };
  return (
    <div className="cart">
      <h1 className="cart-heading">
        {cartProducts.length > 0
          ? "Products in your cart"
          : "Oops nothing is added to the cart "}
      </h1>
      {cartProducts?.map((item) => (
        <div className="cart-item" key={item.id}>
          <div className="cart-prod-image">
            <img
              className="cart-prod-img"
              src={process.env.REACT_APP_UPLOADS_URL + item.img}
              alt={item.title}
            />
          </div>
          <div className="product-details">
            <h3 className="cart-prod-title">{item.title}</h3>
            <div className="cart-prod-price">
              {item.quantity} x Rs. {item.price}
            </div>
          </div>
          <AiFillDelete
            className="cart-delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="cart-total">
        <span>Subtotal:</span>
        <span>Rs. {subtotal()}</span>
      </div>
      <button
        onClick={() => {
          if (cartProducts.length >= 1) {
            navigate("/checkout");
          } else {
            navigate("/shop");
          }
        }}
        className="checkout-button"
      >
        Proceed To checkout
      </button>
    </div>
  );
};
