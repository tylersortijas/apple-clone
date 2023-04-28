import React from "react";
import { Link } from "react-router-dom";

import AppleLogo from "../images/apple-black-logo.png";
import ShoppingBag from "../images/shopping-bag-icon.svg";
import SearchIcon from "../images/search-icon.png";

function NavBar() {
  return (
    <nav className="nav-container bg-bg-nav">
      <ul className="flex flex-row justify-center items-center gap-10 text-xs text-nav-color p-3.5">
        <Link to="/">
          <li>
            <img
              src={AppleLogo}
              alt="apple logo"
              className="w-3 bg-transparent"
            />
          </li>
        </Link>
        <li>Store</li>
        <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Watch</li>
        <li>AirPods</li>
        <li>TV & Home</li>
        <li>Entertainment</li>
        <li>Accessories</li>
        <li>Support</li>
        <li>
          <img src={ShoppingBag} alt="checkout bag" className="w-4" />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
