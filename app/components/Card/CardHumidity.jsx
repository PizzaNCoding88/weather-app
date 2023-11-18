import React from "react";
import Cardstyle from "./Card.module.css";
import Image from "next/image";
import HumidityIcon from "../../../public/assets/humidity-icon.png";

const CardHumidity = (props) => {
  const { data } = props;
  return (
    <>
      <div className={Cardstyle.containerHumidity}>
        <div className={Cardstyle.humiditytop}>
          <Image
            alt="umidity icon"
            src={HumidityIcon}
            className={Cardstyle.humidityIcon}
          />
        </div>
        <div className={Cardstyle.bottom}>Humidity: {data.main.humidity}%</div>
      </div>
    </>
  );
};

export default CardHumidity;
