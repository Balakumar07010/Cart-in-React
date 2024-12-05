import React, { useContext, useEffect, useState } from "react";
import "../StyleSheet/Cart.css";
import { cartContext } from "../App";

const ViewCart = () => {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + parseInt(cur.amt), 0));
  }, [cart]);
  return (
    <>
      <h1 className="cart-head">Cart Products</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.pic} alt="image" />
            </div>
            <div className="cart-product-detail">
              <h3>{product.name}</h3>
              <p>Price : {product.amt}</p>
            </div>
          </div>
        ))}

        <h2 className="cart-amt">Total Amount : {total}</h2>
      </div>
    </>
  );
};

export default ViewCart;
