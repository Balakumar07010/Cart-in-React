import React, { useState } from "react";
import data from "../Data/data.json";
import Product from "./Product";
import "../StyleSheet/Home.css";

const Home = () => {
  const [products] = useState(data);
  return (
    <>
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
