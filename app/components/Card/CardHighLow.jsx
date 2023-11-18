import React from "react";
import Cardstyle from "./Card.module.css";

const Card = (props) => {
  const { data } = props;
  return (
    <>
      <div className={Cardstyle.containerHighLow}>
        <div className={Cardstyle.top}>
          High: {Math.trunc(data.main.temp_max)} &deg;C
        </div>
        <div className={Cardstyle.bottom}>
          Low: {Math.trunc(data.main.temp_min)} &deg;C
        </div>
      </div>
    </>
  );
};

export default Card;
