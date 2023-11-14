import React from "react";
import LongCardBottom from "./LongCardBottom.module.css";
import sunriseIcon from "../../../public/assets/sunrise-icon.png";
import sunsetIcon from "../../../public/assets/sunset-icon.png";
import Image from "next/image";

const LongCard = () => {
  return (
    <div className={LongCardBottom.container}>
      <div className={LongCardBottom.left}>
        <div>
          <Image alt="sunrise icon" src={sunriseIcon} />
        </div>
        <p>6:58AM</p>
      </div>
      <div className={LongCardBottom.right}>
        <div>
          <Image alt="sunset icon" src={sunsetIcon} />
        </div>
        <p>04:29PM</p>
      </div>
    </div>
  );
};

export default LongCard;
