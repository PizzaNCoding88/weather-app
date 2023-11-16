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

const TopSection = (props) => {
  const { data } = props;
  return (
    <>
      {data ? (
        <div className={Top.main}>
          <div className={Top.top}>
            <div className={Top.date}>
              {today} {""}
              {month}, {weekDay}
            </div>
            <div className={Top.position}>
              {data.name},<span>{data.sys.country}</span>
            </div>
          </div>
          <div className={Top.bottom}>
            <div>
              <Image alt="weather icon" src={sunIcon}></Image>
            </div>
            <div className={Top.bottomright}>
              <div className={Top.temp}>{Math.trunc(data.main.temp)}&deg;C</div>
              <div>{data.weather[0].description}</div>
              <div>Real Feel: {Math.trunc(data.main.feels_like)}</div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <p className="text-white text-center text-3xl mt-4">
            Fetching data...
          </p>

          <div className="text-center my-4">
            <div className={Top.ldsring}></div>
          </div>
        </>
      )}
    </>
  );
};

export default TopSection;
