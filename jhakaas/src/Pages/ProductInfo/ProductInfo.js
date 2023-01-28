import React, { useState, useEffect } from "react";
import "./ProductInfo.css";
import axios from "axios";
import { useParams } from "react-router-dom";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

export const ProductInfo = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          process.env.REACT_APP_API_URL + `/products/${productId}?populate=*`,
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        console.log(res.data.data);
        setProduct(res.data.data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [productId]);

  const quantdec = () => {
    if (quantity == 1) {
      setQuantity(1);
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  const quantinc = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <>
      <section className="product-info">
        {isLoading ? (
          "Loading"
        ) : (
          <>
            <div className="product-lg-image">
              <img
                src={
                  process.env.REACT_APP_UPLOADS_URL +
                  product?.attributes.Image.data.attributes.url
                }
                className="product-info-img"
                alt="Product-Image"
              ></img>
            </div>
            <div className="product-description">
              <h1 className="prod-desc-heading">{product?.attributes.Title}</h1>
              <h3 className="prod-desc-price">
                Rs. {product?.attributes.Price}
              </h3>
              <p className="prod-desc-para">
                {product?.attributes.Description}
              </p>
              <div className="prod-quantity">
                <AiOutlineMinus className="icon-quant" onClick={quantdec} />
                {quantity}
                <AiOutlinePlus className="icon-quant" onClick={quantinc} />
              </div>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: product.id,
                      title: product.attributes.Title,
                      price: product.attributes.Price,
                      img: product.attributes.Image.data.attributes.url,
                      quantity,
                    })
                  )
                }
                className="cart-button"
              >
                Add To Cart
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
};
