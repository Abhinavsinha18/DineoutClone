import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../../Store";
import "./ProductDetails.css";
import getDirection from "./assets/path.webp";
import calender from "./assets/calendar-img.webp";
import left_arrow from "./assets/left_arrow.png";
import right_arrow from "./assets/right_arrow.png";

const ProductDetails = ({ e }) => {
  const [show, setShow] = useState({
    showBreakfast: false,
    showLunch: false,
    showDinner: false,
  });
  let index = useParams();
  let data = useSelector((store) => {
    return store.data;
  });
  // console.log("data:", data[index.e]);
  let obj = data[index.e];
  const d = new Date();
  const weekDay = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = weekDay[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();
  // console.log(year);
  return (
    <div className="container">
      <div className="left">
        <div className="hotel">
          <div className="upper">
            <img src={obj.image} alt="" />
          </div>
          <div className="lower">
            <div className="left">
              <h2>{obj.name}</h2>
              <p className="description">
                {obj.discription1} | {obj.discription2}, {obj.discription3},{" "}
                {obj.discription4}, {obj.discription5}
              </p>
              <p className="location_details">
                {obj.location1} | {obj.location2} |
                <span className="getDirection">
                  <img src={getDirection} alt="" /> Get direction
                </span>
              </p>
              <p className="duration">
                Time: <span className="time"> (Opens at 12:00 PM)</span>
              </p>
            </div>
            <div className="right">
              <span className="rating">{obj.rating}</span>
              <span className="reviwes">81 reviews</span>
            </div>
          </div>
        </div>
      </div>
      <div className="proceed">
        <h3 className="heading">Select an Offer or Deal</h3>
        <div className="select">
          <div className="date">
            <p>Select Date</p>
            <div className="calender">
              <span className="month">
                <div className="monthName">{month}</div>
                <img src={calender} alt="" />
              </span>
              <img className="leftarrow" src={left_arrow} alt="" />
              <ul className="day">
                <li key={50}>
                  <div className="name">{day}</div>
                  <div className="dating">{date}</div>
                </li>
                {weekDay.map((e, i) => {
                  if (day === e) {
                    return (
                      <>
                        <li key={i}>
                          <div className="name">
                            {i + 1 === weekDay.length
                              ? weekDay[0]
                              : weekDay[i + 1]}
                          </div>
                          <div className="dating">{date + 1}</div>
                        </li>
                      </>
                    );
                  }
                })}
              </ul>
              <img className="rightarrow" src={right_arrow} alt="" />
            </div>
          </div>
          <div className="slot">
            <p>Time</p>
            <p style={{ lineHeight: 0, fontSize: "13px", color: "#a1a1a1" }}>
              Choose an available time slot
            </p>
            <nav>
              <div
                className="breakfast "
                onClick={() => {
                  document.querySelector(".lunch").classList.remove("active");
                  document.querySelector(".dinner").classList.remove("active");
                  document.querySelector(".breakfast").classList.add("active");
                  setShow({
                    showBreakfast: true,
                    showLunch: false,
                    showDinner: false,
                  });
                }}
              >
                Breakfast
              </div>
              <div
                className="lunch"
                onClick={() => {
                  document.querySelector(".dinner").classList.remove("active");
                  document
                    .querySelector(".breakfast")
                    .classList.remove("active");
                  document.querySelector(".lunch").classList.add("active");
                  setShow({
                    showBreakfast: false,
                    showLunch: true,
                    showDinner: false,
                  });
                }}
              >
                Lunch
              </div>
              <div
                className="dinner"
                onClick={() => {
                  document
                    .querySelector(".breakfast")
                    .classList.remove("active");
                  document.querySelector(".lunch").classList.remove("active");
                  document.querySelector(".dinner").classList.add("active");
                  setShow({
                    showBreakfast: false,
                    showLunch: false,
                    showDinner: true,
                  });
                }}
              >
                Dinner
              </div>
            </nav>
            <div className="times show">
              <div
                className="forBreakfast"
                style={{ display: show.showBreakfast ? "grid" : "none" }}
              >
                <span className="theTime">10:30 AM</span>
                <span className="theTime">10:45 AM</span>
                <span className="theTime">11:00 AM</span>
                <span className="theTime">11:15 AM</span>
                <span className="theTime">11:30 AM</span>
                <span className="theTime">11:45 AM</span>
              </div>
              <div
                className="lunch"
                style={{ display: show.showLunch ? "grid" : "none" }}
              >
                <span className="theTime">12:00 PM</span>
                <span className="theTime">12:15 PM</span>
                <span className="theTime">12:30 PM</span>
                <span className="theTime">12:45 PM</span>
                <span className="theTime">1:00 PM</span>
                <span className="theTime">1:15 PM</span>
                <span className="theTime">1:30 PM</span>
                <span className="theTime">1:45 PM</span>
                <span className="theTime">2:00 PM</span>
                <span className="theTime">2:15 PM</span>
                <span className="theTime">2:30 PM</span>
                <span className="theTime">2:45 PM</span>
                <span className="theTime">3:00 PM</span>
                <span className="theTime">3:15 PM</span>
                <span className="theTime">3:30 PM</span>
                <span className="theTime">3:45 PM</span>
                <span className="theTime">4:00 PM</span>
                <span className="theTime">4:15 PM</span>
                <span className="theTime">4:30 PM</span>
                <span className="theTime">4:45 PM</span>
              </div>
              <div
                className="dinner"
                style={{ display: show.showDinner ? "grid" : "none" }}
              >
                <span className="theTime">5:00 PM</span>
                <span className="theTime">5:15 PM</span>
                <span className="theTime">5:30 PM</span>
                <span className="theTime">5:45 PM</span>
                <span className="theTime">6:00 PM</span>
                <span className="theTime">6:15 PM</span>
                <span className="theTime">6:30 PM</span>
                <span className="theTime">6:45 PM</span>
                <span className="theTime">7:00 PM</span>
                <span className="theTime">7:15 PM</span>
                <span className="theTime">7:30 PM</span>
                <span className="theTime">7:45 PM</span>
                <span className="theTime">8:00 PM</span>
              </div>
            </div>
          </div>
          <div className="guestDetails">
            <p>Enter Guest Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
