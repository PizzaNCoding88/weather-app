"use client";

import { useEffect, useState } from "react";
import "./page.css";
import TopSection from "./components/TopSection/TopSection";
import BottomSection from "./components/BottomSection/BottomSection";

export default function Home() {
  const [data, setData] = useState("");
  const [input, setInput] = useState();
  const [location, setLocation] = useState();

  function GetGeoLocationOnLoad() {
    useEffect(() => {
      getLocation();
    }, []);
  }
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition, error);
    } else {
      const browserGeolocationError = "Geolocation is not supported";
      return browserGeolocationError;
    }
  }
  function getPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  }

  function error() {
    const positionError = "Unable to retrieve your location";
    return positionError;
  }

  const fetchD = async () => {
    const a = await fetch(`https://geocode.maps.co/search?q=${input}`);
    if (a.ok === true) {
      const temp = await a.json();
      const lat = temp[0].lat;
      const lon = temp[0].lon;
      return [lat, lon];
    } else {
      return a.status;
    }
  };

  const fetchWeather = async () => {
    let a = await fetchD();
    let [la, lo] = [...a];
    const w = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}&appid=cc8ca712bf2eefce816c3ed3d000e9a8&units=metric`
    );

    if (w.ok == true) {
      const res = await w.json();

      setData(res);
      return;
    } else {
      console.log(w.status, w);
      return w.status;
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <>
      <main className="main">
        <TopSection />
        <BottomSection />
      </main>
      {/* 
      
      CASE 1: if the browser is allowed to get position automatically, then show the whole interface directly(to do so, store the browser geolocalization data in a variable with useState)
      
      CASE 2: if the broswer isn't allowed to get the position, then show a search bar where the user can type the location. In that case, call the geocoding api to get lat and lon, and then call the weather api */}
      {/*     
      <input
        placeholder="Enter you location"
        type="text"
        onChange={handleChange}
        className="bg-gray-800 text-white"
      ></input>
      <button
        className="border-2 border-red-500 rounded-xl py-1 px-4 m-4"
        onClick={fetchWeather}
      >
        Test
      </button>

      {data ? (
        <p className="text-white">
          Temp in {input} today is: {Math.trunc(data.main.temp)}&deg;C
        </p>
      ) : (
        ""
      )} */}
    </>
  );
}
