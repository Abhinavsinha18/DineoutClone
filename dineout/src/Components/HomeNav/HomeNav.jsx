import React, { useState } from "react";
import "./HomeNav.css";
import logo from "./assets/website-logo.webp";
import locationLogo from "./assets/locationLogo.png";
import { NavLink } from "react-router-dom";

const HomeNav = () => {
  const [isCurr, setIsCurr] = useState({
    home: true,
    bookatable: false,
    dienoutpay: false,
    events: false,
    blog: false,
  });
  const [showSearch, setShowSearch] = useState(false);
  const searchVisibility = () => {
    if (window.scrollY > 100) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  };

  window.addEventListener("scroll", searchVisibility);
  return (
    <div className="nav">
      <div className="leftNav">
        <img src={logo} alt="" />
        <div className="navDropMenu">
          <img src={locationLogo} />
          <select className="navdropdown">
            <option value="del">Delhi</option>
            <option value="mum">Mumbai</option>
            <option value="kol">Kolkata</option>
            <option value="goa">Goa</option>
          </select>
        </div>
      </div>
      <div className="centerNav">
        {showSearch ? (
          <div className="searchdiv">
            <i className="fa-solid fa-magnifying-glass glass-icon searchicon"></i>
            <input
              type="text"
              className="searchbox"
              placeholder="Search for Restaurants, Cuisines, Location..."
            />
            <button className="searchBtn">Search</button>
          </div>
        ) : (
          <div className="navigations">
            <NavLink
              to="/"
              className="navlink curr home"
              onClick={() => {
                document.querySelector(".bookatable").classList.remove("curr");
                document.querySelector(".dienoutpay").classList.remove("curr");
                document.querySelector(".events").classList.remove("curr");
                document.querySelector(".blog").classList.remove("curr");
                document.querySelector(".home").classList.add("curr");
                setIsCurr({
                  home: true,
                  bookatable: false,
                  dienoutpay: false,
                  events: false,
                  blog: false,
                });
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/bookatable"
              className="navlink bookatable"
              onClick={() => {
                document.querySelector(".dienoutpay").classList.remove("curr");
                document.querySelector(".events").classList.remove("curr");
                document.querySelector(".blog").classList.remove("curr");
                document.querySelector(".home").classList.remove("curr");
                document.querySelector(".bookatable").classList.add("curr");
                setIsCurr({
                  home: false,
                  bookatable: true,
                  dienoutpay: false,
                  events: false,
                  blog: false,
                });
              }}
            >
              Book a Table
            </NavLink>
            <NavLink
              to="/dineoutpay"
              className="navlink dienoutpay"
              onClick={() => {
                document.querySelector(".events").classList.remove("curr");
                document.querySelector(".blog").classList.remove("curr");
                document.querySelector(".home").classList.remove("curr");
                document.querySelector(".bookatable").classList.remove("curr");
                document.querySelector(".dienoutpay").classList.add("curr");
                setIsCurr({
                  home: false,
                  bookatable: false,
                  dienoutpay: true,
                  events: false,
                  blog: false,
                });
              }}
            >
              Dineout Pay
            </NavLink>
            <NavLink
              to="/events"
              className="navlink events"
              onClick={() => {
                document.querySelector(".dienoutpay").classList.remove("curr");
                document.querySelector(".blog").classList.remove("curr");
                document.querySelector(".home").classList.remove("curr");
                document.querySelector(".bookatable").classList.remove("curr");
                document.querySelector(".events").classList.add("curr");
                setIsCurr({
                  home: false,
                  bookatable: false,
                  dienoutpay: false,
                  events: true,
                  blog: false,
                });
              }}
            >
              Events
            </NavLink>
            <NavLink
              to="/blog"
              className="navlink blog"
              onClick={() => {
                document.querySelector(".dienoutpay").classList.remove("curr");
                document.querySelector(".events").classList.remove("curr");
                document.querySelector(".home").classList.remove("curr");
                document.querySelector(".bookatable").classList.remove("curr");
                document.querySelector(".blog").classList.add("curr");
                setIsCurr({
                  home: false,
                  bookatable: false,
                  dienoutpay: false,
                  events: false,
                  blog: true,
                });
              }}
            >
              Blog
            </NavLink>
          </div>
        )}
      </div>
      <div className="rightNav">
        <div className="button">
          <button className="loginBtn">LOG IN</button>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
