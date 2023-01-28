import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css";
import { fireworks } from "../../components/confetti";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/cartReducer";

export const Success = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.producrts);
  const navigate = useNavigate();
  useEffect(() => {
    fireworks();
  }, []);
  return (
    <div className="success-section">
      <h1 className="success-heading">
        Hurray !! <br />
        Your order is successfully placed.
      </h1>
      <button
        onClick={() => {
          navigate("/");
          dispatch(reset());
        }}
        className="btn-grad"
      >
        Continue Shopping
      </button>
    </div>
  );
};
