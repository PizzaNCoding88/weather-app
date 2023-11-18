import React from "react";
import Cardstyle from "./Card.module.css";

const Card = (props) => {
  const { data } = props;
  return (
    <>
      <div className={Cardstyle.containerHighLow}>
        <div className={Cardstyle.top}>
          High Temp: {Math.trunc(data.main.temp_max)}
        </div>
        <div className={Cardstyle.bottom}>
          Low Temp: {Math.trunc(data.main.temp_min)}
        </div>
      </div>
    </>
  );
};

export default Card;
