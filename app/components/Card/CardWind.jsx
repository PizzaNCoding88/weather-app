import React from "react";
import Cardstyle from "./Card.module.css";
import Image from "next/image";
import WindIcon from "../../../public/assets/wind-icon.png";

const CardWind = (props) => {
  const { data } = props;
  return (
    <>
      <div className={Cardstyle.containerHumidity}>
        <div className={Cardstyle.humiditytop}>
          <Image
            alt="umidity icon"
            src={WindIcon}
            className={Cardstyle.humidityIcon}
          />
        </div>
        <div className={Cardstyle.bottom}>Wind: {data.wind.speed} mp/h</div>
      </div>
    </>
  );
};

export default CardWind;
