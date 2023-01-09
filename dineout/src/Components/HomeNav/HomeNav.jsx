import React, { useState } from "react";
import "./HomeNav.css";
import logo from "./assets/website-logo.webp";
import locationLogo from "./assets/locationLogo.png";
import { NavLink } from "react-router-dom";
import menu from "./assets/menu.png";

const HomeNav = ({ setLogin, login, setIsLogin, isLogin }) => {
  const [isCurr, setIsCurr] = useState({
    home: true,
    bookatable: false,
    dienoutpay: false,
    events: false,
    blog: false,
  });
  const [secondnav, setSecondnav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [menuStatus, setMenuStatus] = useState(false);

  const searchVisibility = () => {
    if (window.scrollY > 100) {
      setShowSearch(true);
      setSecondnav(true);
    } else {
      setShowSearch(false);
      setSecondnav(false);
    }
  };

  window.addEventListener("scroll", searchVisibility);

  const toogleMenu = () => {
    setMenuStatus(!menuStatus);
  };
  const users = JSON.parse(localStorage.getItem("users")) || [];
  //console.log("user Name:", users[0].name);
  const LoginduserName = users[0].name;
  return (
    <>
      <div className="nav">
        <div className="leftNav">
          <NavLink to="/">
            <img src={logo} alt="" style={{ cursor: "pointer" }} />
          </NavLink>
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
                  document
                    .querySelector(".bookatable")
                    .classList.remove("curr");
                  document
                    .querySelector(".dienoutpay")
                    .classList.remove("curr");
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
                  document
                    .querySelector(".dienoutpay")
                    .classList.remove("curr");
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
                  document
                    .querySelector(".bookatable")
                    .classList.remove("curr");
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
                  document
                    .querySelector(".dienoutpay")
                    .classList.remove("curr");
                  document.querySelector(".blog").classList.remove("curr");
                  document.querySelector(".home").classList.remove("curr");
                  document
                    .querySelector(".bookatable")
                    .classList.remove("curr");
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
                  document
                    .querySelector(".dienoutpay")
                    .classList.remove("curr");
                  document.querySelector(".events").classList.remove("curr");
                  document.querySelector(".home").classList.remove("curr");
                  document
                    .querySelector(".bookatable")
                    .classList.remove("curr");
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
          {login ? (
            <div className="button">
              <button
                className="loginBtn"
                onClick={() => {
                  setIsLogin(!isLogin);
                }}
              >
                LOG IN
              </button>
            </div>
          ) : (
            <div
              className="userLogin"
              onClick={() => {
                setLogin(true);
              }}
              style={{
                background: "#ff645a",
                color: "#fff",
                fontWeight: "700",
                cursor: "pointer",
                padding: ".6rem",
                borderRadius: ".4rem",
              }}
            >
              {LoginduserName} / Logout
            </div>
          )}
          <div className="forSmallScreen">
            {/* <div className="profileDrop"> */}
            <img className="menubtn" src={menu} alt="" onClick={toogleMenu} />

            <div
              className="menu"
              style={{ display: menuStatus ? "flex" : "none" }}
            >
              <NavLink to="/" className="navlink">
                Home
              </NavLink>
              <NavLink to="/bookatable" className="navlink">
                Book a table
              </NavLink>{" "}
              <NavLink to="/bookatable" className="navlink">
                Dienout pay
              </NavLink>
              <NavLink to="/events" className="navlink">
                Events
              </NavLink>
              <NavLink to="/blog" className="navlink">
                Blog
              </NavLink>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <nav
        className="secondNav"
        style={{ display: secondnav ? "flex" : "none" }}
      >
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
      </nav>
    </>
  );
};

export default HomeNav;
