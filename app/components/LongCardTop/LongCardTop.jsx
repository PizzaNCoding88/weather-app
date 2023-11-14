import React from "react";
import LongCardTop from "./LongCardTop.module.css";
import Image from "next/image";
import CloudsIcon from "../../../public/assets/clouds-icon.png";

const LongCard = () => {
  return (
    <div className={LongCardTop.container}>
      <div>
        <Image alt="clouds icon" src={CloudsIcon} />
      </div>
      <div>Clouds: 10%</div>
    </div>
  );
};

export default LongCard;
