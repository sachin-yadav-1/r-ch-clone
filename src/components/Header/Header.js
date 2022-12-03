import React from "react";
import "./Header.css";
import { Link } from "./../";

const Header = () => {
  const NAV_ITEMS = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "About Us", to: "/about" },
    { id: 3, name: "FAQs", to: "/faq" },
  ];

  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="navbar-brand">
            <Link to="/" className="navbar-brand__logo">
              <img src="/imgs/logo.webp" alt="Charitism Logo" />
            </Link>
            <Link to="/" className="navbar-brand__logo--text">
              Charitism
            </Link>
          </div>

          <div className="navbar-nav">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.id} className="navbar-nav__item">
                  <Link to={item.to} className="navbar-nav__link" href="/">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-button">
            <button className="button button--primary">Gift Basket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
