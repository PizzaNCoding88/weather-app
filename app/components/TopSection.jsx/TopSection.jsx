import React from "react";
import Top from "./TopSection.module.css";

const TopSection = () => {
  return (
    <div className={Top.main}>
      <div className={Top.overlay}></div>
      <div className={Top.top}>
        <div className={Top.date}> 13th November, Monday</div>
        <div className={Top.position}>
          {" "}
          London, <span>GB</span>
        </div>
      </div>
      <div className={Top.bottom}>
        <div></div>
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
