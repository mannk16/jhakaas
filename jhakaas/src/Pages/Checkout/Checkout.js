import "./Checkout.css";
import React from "react";
import CardImage from "../../assets/card_img.png";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <form action="">
        <div className="row">
          <div className="col">
            <h3 className="title">billing address</h3>

            <div className="inputBox">
              <span>full name :</span>
              <input type="text" placeholder="mann k" required />
            </div>
            <div className="inputBox">
              <span>email :</span>
              <input type="email" placeholder="example@gmail.com" required />
            </div>
            <div className="inputBox">
              <span>address :</span>
              <input type="text" placeholder="locality-street" required />
            </div>
            <div className="inputBox">
              <span>city :</span>
              <input type="text" placeholder="mumbai" required />
            </div>

            <div className="flex">
              <div class="inputBox">
                <span>state :</span>
                <input type="text" placeholder="india" required />
              </div>
              <div className="inputBox">
                <span>zip code :</span>
                <input type="text" placeholder="123 456" required />
              </div>
            </div>
          </div>

          <div className="col">
            <h3 className="title">payment</h3>

            <div className="inputBox">
              <span>cards accepted :</span>
              <img src={CardImage} alt="card-image" />
            </div>
            <div className="inputBox">
              <span>name on card :</span>
              <input type="text" placeholder="ms. mann k" required />
            </div>
            <div className="inputBox">
              <span>credit card number :</span>
              <input type="number" placeholder="1111-2222-3333-4444" required />
            </div>
            <div className="inputBox">
              <span>exp month :</span>
              <input type="text" placeholder="january" required />
            </div>

            <div className="flex">
              <div className="inputBox">
                <span>exp year :</span>
                <input type="number" placeholder="2022" required />
              </div>
              <div className="inputBox">
                <span>CVV :</span>
                <input type="text" placeholder="1234" required />
              </div>
            </div>
          </div>
        </div>

        <input
          onClick={() => navigate("/success")}
          type="submit"
          value="Confirm payment"
          class="submit-btn"
          required
        />
      </form>
    </div>
  );
};
