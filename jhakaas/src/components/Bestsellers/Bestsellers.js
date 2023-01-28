import React, { useState, useEffect } from "react";
import "./Bestsellers.css";
import axios from "axios";

import bestseller1 from "../../assets/1.png";
import bestseller2 from "../../assets/2.png";
import bestseller3 from "../../assets/3.png";
import bestseller4 from "../../assets/6.png";
import { Card } from "../Card/Card";

export const Bestsellers = () => {
  const [bestsellers, setBestsellers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL +
            "/products?populate=*&[filters][type][$eq]=bestseller",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );

        setBestsellers(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="bestseller-container">
        <h2 className="bestseller-heading">Our Bestsellers</h2>
        <div className="bestseller-products">
          {bestsellers.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};
