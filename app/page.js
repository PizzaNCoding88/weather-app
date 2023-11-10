"use client";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState("");
  const fetchD = async () => {
    const a = await fetch("https://geocode.maps.co/search?q=Rome");
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
      `https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}&appid=cc8ca712bf2eefce816c3ed3d000e9a8`
    );
    if (w.ok == true) {
      const res = await w.json();
      setData(res);
      // console.log(data);
      return;
    } else {
      console.log(w.status, w);
      return w.status;
    }
  };

  return (
    <>
      <button
        className="border-2 border-red-500 rounded-xl py-1 px-4 m-4"
        onClick={fetchWeather}
      >
        Test
      </button>

      {data ? <p>Temp in Rome today is: {data.main.temp}</p> : ""}
    </>
  );
}

//retrieve lat and lon
//pass lat and lon in the api call for the weather

//to retrieve weather based on named position
//call the weather async function
//retrieve in it lat and lon
//pass lat and lon as arguments of the fetch function for the weather
