"use client";

import { useEffect, useState } from "react";
import PageStyle from "./page.module.css";
import TopSection from "./components/TopSection/TopSection";
import BottomSection from "./components/BottomSection/BottomSection";
import SearchBar from "./components/SearchBar/Searchbar";

export default function Home() {
  // const [location, setLocation] = useState();
  const [weather, setWeather] = useState({});
  const [noGeoLocation, setNoGeoLocation] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBrowserLocation();
  }, []);

  function getBrowserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position, error);
    } else {
      console.log("error");
    }
  }

  function position(position) {
    setNoGeoLocation(false);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    fetchWeather(latitude, longitude);
  }

  function error(error) {
    setNoGeoLocation(true);
  }

  function handleSubmitParent(location) {
    fetchLocation(location);
    setNoGeoLocation(false);
  }

  async function fetchLocation(location) {
    const firstCall = await fetch(
      `https://geocode.maps.co/search?q=${location}`
    );
    const address = await firstCall.json();

    // if (location == "Salerno") {
    //   const latitude = address[1].lat;
    //   const longitude = address[1].lon;
    // } else {
    //   const latitude = address[1].lat;
    //   const longitude = address[1].lon;
    // }

    const latitude = address[0].lat;
    const longitude = address[0].lon;
    fetchWeather(latitude, longitude);
  }

  async function fetchWeather(latitude, longitude) {
    setLoading(true);
    const tempWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=cc8ca712bf2eefce816c3ed3d000e9a8&units=metric`
    );
    const weather = await tempWeather.json();
    setLoading(false);
    setWeather(weather);
  }

  return (
    <>
      {loading && (
        <div className={PageStyle.loaderContainer}>
          <div className={PageStyle.loader}></div>
        </div>
      )}
      {noGeoLocation ? (
        <SearchBar submitParent={handleSubmitParent} style={"onlysearch"} />
      ) : null}
      {!noGeoLocation && weather.cod ? (
        <>
          <main className={PageStyle.main}>
            <TopSection data={weather} submitParent={handleSubmitParent} />
            <BottomSection data={weather} />
          </main>
        </>
      ) : null}
    </>
  );
}
