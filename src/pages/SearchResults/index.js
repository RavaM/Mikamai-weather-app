import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a l
import { SearchModal, WeatherCard, WeatherSearch } from "../../components";

import './search-results.css';

export const SearchResults = ({ modalOpen, setModalOpen }) => {
  const location = useLocation();
  const forecasts = location.state.forecasts;
  const time = location.state.time;
  const city = location.state.city;

  return (
    <>
      <div className="carousel-container">
        <Carousel
          showThumbs={false}
        >
          {forecasts.map((forecast, index, array) => {
            return (
              <WeatherCard
                forecast={forecast}
                time={time}
                key={forecast.id}
                prevForecast={array[index - 1]?.weather_state_name}
                nextForecast={array[index + 1]?.weather_state_name}
              />
            );
          })}
        </Carousel>
      </div>
      <WeatherSearch city={city} setModalOpen={setModalOpen} />
      {modalOpen && <SearchModal setModalOpen={setModalOpen} />}
    </>
  );
}
