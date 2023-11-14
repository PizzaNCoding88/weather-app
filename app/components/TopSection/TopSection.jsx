import React from "react";
import Top from "./TopSection.module.css";
import Image from "next/image";
import sunIcon from "../../../public/assets/sun-icon.png";

const date = new Date();
const today = date.getDate();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month = months[date.getMonth()];

const weekDay = days[date.getDay()];

const TopSection = () => {
  return (
    <div className={Top.main}>
      {/* <div className={Top.overlay}></div> */}
      <div className={Top.top}>
        <div className={Top.date}>
          {today} {""}
          {month}, {weekDay}
        </div>
        <div className={Top.position}>
          {" "}
          London, <span>GB</span>
        </div>
      </div>
      <div className={Top.bottom}>
        <div>
          <Image alt="weather icon" src={sunIcon}></Image>
        </div>
        <div className={Top.bottomright}>
          <div className={Top.temp}>8&deg;C</div>
          <div>Sunny</div>
          <div>Real Feel: 7C</div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
