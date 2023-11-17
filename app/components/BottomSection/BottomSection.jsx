import React from "react";
import Bottom from "./BottomSection.module.css";
import Card from "../Card/Card";
import LongCardTop from "../LongCardTop/LongCardTop";
import LongCardBottom from "../LongCardBottom/LongCardBottom";

const BottomSection = (props) => {
  const { data } = props;
  return (
    <>
      {/* {console.log(data)}; */}
      <div className={Bottom.container}>
        <div className={Bottom.top}>
          <Card data={data} />
          <Card data={data} />
          <Card data={data} />
        </div>
        <div className={Bottom.middle}>
          <LongCardTop data={data} />
        </div>
        <div className={Bottom.bottom}>
          <LongCardBottom data={data} />
        </div>
      </div>
    </>
  );
};

export default BottomSection;
