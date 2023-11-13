import React from "react";
import Bottom from "./BottomSection.module.css";
import Card from "../Card/Card";

const BottomSection = () => {
  return (
    <>
      <div className={Bottom.container}>
        <div className={Bottom.top}>
          <Card />
          <Card />
          <Card />
        </div>
        <div className={Bottom.middle}></div>
        <div className={Bottom.bottom}></div>
      </div>
    </>
  );
};

export default BottomSection;
