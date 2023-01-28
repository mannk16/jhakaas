import "./Card.css";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <>
      <Link
        className="product-links"
        to={`/shop/${item.id}`}
        onClick={() => navigate(`/shop/{item.id}`)}
      >
        <div className="img-container">
          <img
            className="product-final-image"
            src={
              process.env.REACT_APP_UPLOADS_URL +
              item.attributes.Image.data.attributes.url
            }
          />
        </div>

        <p className="product-name">{item?.attributes.Title}</p>
        <p className="product-price">Rs.{item?.attributes.Price || ""}</p>
      </Link>
    </>
  );
};
