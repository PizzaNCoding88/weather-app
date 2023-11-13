"use client";

import { useState } from "react";
import "./page.css";
import TopSection from "./components/TopSection.jsx/TopSection";
export default function Home() {
  const [data, setData] = useState("");
  const [input, setInput] = useState();

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
        <div className="bottom-section"></div>
      </main>
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
