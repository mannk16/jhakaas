import React from "react";
import "./Error.css";
import errorImg from "../../assets/404-error.png";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="section-error">
        <div className="error-img">
          <img className="error-image" src={errorImg}></img>
        </div>
        <div className="error-content">
          <button className="btn-error" onClick={() => navigate("/")}>
            Back To Home
          </button>
        </div>
      </div>
    </>
  );
};
