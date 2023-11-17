import React from "react";
import Cardstyle from "./Card.module.css";

const Card = (props) => {
  const { data } = props;
  return (
    <>
      {console.log(data)}
      <div className={Cardstyle.container}>
        <div className={Cardstyle.top}>
          High Temp: {Math.trunc(data.main.temp_max)}
        </div>
        {/* <p className="text-center">{Math.trunc(data.main.temp_max)}</p> */}
        <div className={Cardstyle.bottom}>
          Low Temp: {Math.trunc(data.main.temp_min)}
        </div>
        {/* <p className="text-center">{Math.trunc(data.main.temp_min)}</p> */}
      </div>
    </>
  );
};

export default Card;
