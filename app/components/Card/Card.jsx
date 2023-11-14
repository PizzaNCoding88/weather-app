import React from "react";
import Cardstyle from "./Card.module.css";

const Card = () => {
  return (
    <>
      <div className={Cardstyle.container}>
        <div className={Cardstyle.top}>High Temp</div>
        <div className={Cardstyle.bottom}>Low Temp</div>
      </div>
    </>
  );
};

export default Card;
