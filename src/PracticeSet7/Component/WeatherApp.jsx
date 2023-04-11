import React, { useState } from "react";

export const WeatherApp = ({
  showData: { temperature, humidity, windSpeed },handleConversion
}) => {
  const [buttonToggle,setButtonToggle]=useState(true)  
  const clickHandler = () => {
    handleConversion(temperature,buttonToggle)
    setButtonToggle(!buttonToggle)
  };

  return (
    <>
      <h1>Weather</h1>
      <p>Temperature:{temperature<50?`${temperature}°C`:`${Math.ceil(temperature)}°F` }</p>
      <p>Humidity :{humidity}%</p>
      <p>Wind Speed:{windSpeed} km/h</p>
      <button onClick={clickHandler}>{buttonToggle ?"Switch to Fahrenheit":"Switch to Celcius"}</button>
    </>
  );
};
