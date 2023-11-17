"use client";

import { useEffect, useState } from "react";
import "./page.css";
import TopSection from "./components/TopSection/TopSection";
import BottomSection from "./components/BottomSection/BottomSection";

export default function Home() {
  const [location, setLocation] = useState();
  const [weather, setWeather] = useState({});
  const [noGeoLocation, setNoGeoLocation] = useState(true);
  const [inputText, setInputText] = useState();
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
    // console.log(position);
    setNoGeoLocation(false);
    // console.log(position.coords.latitude, position.coords.longitude);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    fetchWeather(latitude, longitude);
  }

  function error(error) {
    setNoGeoLocation(true);
    console.log(error, error.code);
    // handleChange();
    // fetchLocation(location);
  }

  function handleChange(e) {
    // e.preventDefault;
    let location = e.target.value;
    setInputText(location);
    // fetchLocation(location);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchLocation(inputText);
    setNoGeoLocation(false);
  }

  async function fetchLocation(location) {
    const firstCall = await fetch(
      `https://geocode.maps.co/search?q=${location}`
    );
    const address = await firstCall.json();
    const latitude = address[0].lat;
    const longitude = address[0].lon;
    fetchWeather(latitude, longitude);
  }

  async function fetchWeather(latitude, longitude) {
    setLoading(true);
    // console.log(latitude, longitude);
    const tempWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=cc8ca712bf2eefce816c3ed3d000e9a8&units=metric`
    );
    const weather = await tempWeather.json();
    // console.log(weather);
    setLoading(false);
    setWeather(weather);
  }

  return (
    <>
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex justify-center items-center">
          <div className="loader"></div>
        </div>
      )}
      {noGeoLocation ? (
        <div className="text-center mt-4">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Enter your city..."
              onChange={handleChange}
            ></input>
            <button type="submit" className="bg-slate-500 ml-4">
              Search
            </button>
          </form>
          <div className="text-center mt-10">
            <p className="bg-red-600 inline text-white rounded-xl px-4 py-2">
              Enter you city above
            </p>
          </div>
        </div>
      ) : null}
      {!noGeoLocation && weather.cod ? (
        <>
          <main className="main">
            <TopSection data={weather} />
            <BottomSection data={weather} />
          </main>
        </>
      ) : null}
    </>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import "./page.css";
// import TopSection from "./components/TopSection/TopSection";
// import BottomSection from "./components/BottomSection/BottomSection";

// export default function Home() {
//   const [data, setData] = useState("");
//   const [input, setInput] = useState();
//   const [location, setLocation] = useState({});
//   const [inter, setInter] = useState();

//   // ----------------

//   // eslint-disable-next-line react-hooks/exhaustive-deps

//   const fetchD = async () => {
//     const a = await fetch(`https://geocode.maps.co/search?q=${input}`);
//     if (a.ok === true) {
//       const temp = await a.json();
//       const lat = temp[0].lat;
//       const lon = temp[0].lon;
//       return [lat, lon];
//     } else {
//       return a.status;
//     }
//   };

//   const handleChange = (e) => {
//     e.preventDefault();
//     setInput(e.target.value);
//   };

//   // --------------
//   // CASE 1: if the browser is allowed to get position automatically, then show the whole interface directly(to do so, store the browser geolocalization data in a variable with useState). From there, interface sends the fetch request for the weather data.
//   // CASE 1
//   useEffect(() => {
//     getLocation();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(getPosition, error);
//     } else {
//       const browserGeolocationError = "Geolocation is not supported";
//       return browserGeolocationError;
//     }
//   }

//   function getPosition(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     fetchWeather(latitude, longitude);
//     setInter(true);
//   }

//   function error() {
//     setInter(false);
//   }

//   const fetchWeather = async (latitude, longitude) => {
//     if (inter) {
//       const w = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=cc8ca712bf2eefce816c3ed3d000e9a8&units=metric`
//       );
//       if (w.ok == true) {
//         const res = await w.json();
//         setData(res);
//         return;
//       } else {
//         return w.status;
//       }
//     } else {
//       let a = await fetchD();
//       let [la, lo] = [...a];
//       const w = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}&appid=cc8ca712bf2eefce816c3ed3d000e9a8&units=metric`
//       );

//       if (w.ok == true) {
//         const res = await w.json();
//         setData(res);
//         return;
//       } else {
//         console.log(w.status, w);
//         return w.status;
//       }
//     }
//   };

//   return (
//     <>
//       {/* <main className="main">
//         <TopSection />
//         <BottomSection />
//       </main> */}
//       {inter ? (
//         <main className="main">
//           <TopSection data={data} />
//           <BottomSection data={data} />
//         </main>
//       ) : (
//         <input></input>
//       )}
//       {/*

//       CASE 2: if the broswer isn't allowed to get the position, then show a search bar where the user can type the location. In that case, call the geocoding api to get lat and lon, and then call the weather api */}
//       {/*
//       <input
//         placeholder="Enter you location"
//         type="text"
//         onChange={handleChange}
//         className="bg-gray-800 text-white"
//       ></input>
//       <button
//         className="border-2 border-red-500 rounded-xl py-1 px-4 m-4"
//         onClick={fetchWeather}
//       >
//         Test
//       </button>

//       {data ? (
//         <p className="text-white">
//           Temp in {input} today is: {Math.trunc(data.main.temp)}&deg;C
//         </p>
//       ) : (
//         ""
//       )} */}
//     </>
//   );
// }
