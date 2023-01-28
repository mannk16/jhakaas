import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Shop } from "./Pages/Shop/Shop";
import { About } from "./Pages/About/About";

import { ProductInfo } from "./Pages/ProductInfo/ProductInfo";
import { Error } from "./Pages/Error/Error";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Cart } from "./Pages/Cart/Cart";
import { Checkout } from "./Pages/Checkout/Checkout";
import { Success } from "./Pages/Success/Success";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />

        <Route path="shop/:productId" element={<ProductInfo />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="success" element={<Success />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
