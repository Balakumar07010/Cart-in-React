import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = ({ cart }) => {
  return (
    <>
      <div className="header">
        <div className="logo">Food-Cart</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ViewCart">
              <span className="count-cart">{cart.length}</span> View-Cart
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
