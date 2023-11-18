import React from "react";
import Bottom from "./BottomSection.module.css";
import CardHighLow from "../Card/CardHighLow";
import LongCardTop from "../LongCardTop/LongCardTop";
import LongCardBottom from "../LongCardBottom/LongCardBottom";
import CardHumidity from "../Card/CardHumidity";
import CardWind from "../Card/CardWind";

const BottomSection = (props) => {
  const { data } = props;
  return (
    <>
      {/* {console.log(data)}; */}
      <div className={Bottom.container}>
        <div className={Bottom.top}>
          <CardHighLow data={data} />
          <CardHumidity data={data} />
          <CardWind data={data} />
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
