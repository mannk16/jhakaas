import "./Shop.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import banner from "../../assets/jhakaas-banner.png";
import product1 from "../../assets/1.png";
import product2 from "../../assets/2.png";
import product3 from "../../assets/3.png";
import product4 from "../../assets/6.png";
import { Card } from "../../components/Card/Card";

export const Shop = () => {
  const [ShopProducts, setShopProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products?populate=*",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        console.log(res.data.data);
        setShopProducts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="shop-section">
        <h1 class="shop-heading">Enjoy jhakaas yummy flavours!</h1>
        <div className="shop-products">
          {ShopProducts.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};
