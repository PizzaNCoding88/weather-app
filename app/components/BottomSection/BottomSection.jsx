import React from "react";
import Bottom from "./BottomSection.module.css";
import Card from "../Card/Card";
import LongCardTop from "../LongCardTop/LongCardTop";
import LongCardBottom from "../LongCardBottom/LongCardBottom";

const BottomSection = () => {
  return (
    <>
      <div className={Bottom.container}>
        <div className={Bottom.top}>
          <Card />
          <Card />
          <Card />
        </div>
        <div className={Bottom.middle}>
          <LongCardTop />
        </div>
        <div className={Bottom.bottom}>
          <LongCardBottom />
        </div>
      </div>
    </>
  );
};

export default BottomSection;
