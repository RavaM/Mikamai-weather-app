import { useEffect, useState } from "react";
import { SearchModal, WeatherCard, WeatherSearch } from "../../components";
import Loader from "react-loader-spinner";
import axios from "axios";

import './home.css';

export const Home = ({ modalOpen, setModalOpen }) => {
  const [forecast, setForecast] = useState(null);
  const [time, setTime] = useState(null);
  const [city, setCity] = useState("");


  const fetchDefault = async () => {
    await axios.get("https://www.metaweather.com/api/location/search/", {
      params: { query: "Rome" }
    })
      .then(async (res) => {
        await axios.get(`https://www.metaweather.com/api/location/${res.data[0].woeid}/`)
          .then(res => {
            setForecast(res.data.consolidated_weather[0]);
            setTime(res.data.time);
            setCity(res.data.title)
          })
          .catch(err => console.log(err.message));
      })
      .catch(err => console.log(err.message));
  }

  const fetchLocation = async (lat, long) => {
    await axios.get("https://www.metaweather.com/api/location/search/", {
      params: { lattlong: `${lat},${long}` }
    })
      .then(async (res) => {
        await axios.get(`https://www.metaweather.com/api/location/${res.data[0].woeid}/`)
          .then(res => {
            setForecast(res.data.consolidated_weather[0]);
            setTime(res.data.time);
            setCity(res.data.title)
          })
          .catch(err => console.log(err.message));
      })
      .catch(err => console.log(err.message));
  }

  function getPosition() {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );
  }

  useEffect(() => {
    getPosition()
      .then((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log(position, lat, long);
        fetchLocation(lat, long);
      })
      .catch(err => {
        console.error(err.message);
        fetchDefault();
      })
  }, []);

  return (
    <div className="home">
      {forecast ? <WeatherCard forecast={forecast} time={time} /> : <Loader
        type="Puff"
        color="#fff"
        height={100}
        width={100}
      />}
      <WeatherSearch city={city} setModalOpen={setModalOpen} />
      {modalOpen && <SearchModal setModalOpen={setModalOpen} />}
    </div>
  )
}
