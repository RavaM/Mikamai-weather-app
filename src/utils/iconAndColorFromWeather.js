import { WiCloudy, WiDayCloudy, WiDayShowers, WiDaySunny, WiHail, WiRain, WiShowers, WiSleet, WiSnow, WiThunderstorm } from "react-icons/wi";

export const iconAndColorFromWeather = (weather) => {
  let weatherIcon, bgColor;
  switch (weather) {
    case "Snow":
      weatherIcon = <WiSnow />;
      bgColor = "#aed3d3";
      break;
    case "Sleet":
      weatherIcon = <WiSleet />;
      bgColor = "#63a9a8";
      break;
    case "Hail":
      weatherIcon = <WiHail />;
      bgColor = "#527a93";
      break;
    case "Thunderstorm":
      weatherIcon = <WiThunderstorm />;
      bgColor = "#939152";
      break;
    case "Heavy Rain":
      weatherIcon = <WiRain />;
      bgColor = "#575c95";
      break;
    case "Light Rain":
      weatherIcon = <WiShowers />;
      bgColor = "#47a6a7";
      break;
    case "Showers":
      weatherIcon = <WiDayShowers />;
      bgColor = "#47a788";
      break;
    case "Heavy Cloud":
      weatherIcon = <WiCloudy />;
      bgColor = "#7c7c7c";
      break;
    case "Light Cloud":
      weatherIcon = <WiDayCloudy />;
      bgColor = "#53a775";
      break;
    case "Clear":
      weatherIcon = <WiDaySunny />;
      bgColor = "#41c739";
      break;
    default:
      break;
  }

  return { weatherIcon, bgColor };
}