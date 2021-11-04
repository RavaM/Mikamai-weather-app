import { Container, Header, Time, Date, Inner, IconContainer, Footer, Temperature, Weather } from './styles';
import { iconAndColorFromWeather } from '../../utils/iconAndColorFromWeather';
import moment from 'moment';

export const WeatherCard = ({ forecast, time, prevForecast, nextForecast }) => {
  const date = moment(forecast.applicable_date);
  const currTime = moment(time);
  const { bgColor, weatherIcon } = iconAndColorFromWeather(forecast.weather_state_name);
  const { bgColor: prevBg } = iconAndColorFromWeather(prevForecast);
  const { bgColor: nextBg } = iconAndColorFromWeather(nextForecast);


  return (
    <WeatherCard.Container
      className="weather-card__container"
      bgColor={bgColor}
      prevBg={prevBg}
      nextBg={nextBg}
    >
      <WeatherCard.Inner>
        <WeatherCard.Header>
          <WeatherCard.Time>{currTime.format('HH:mm')}</WeatherCard.Time>
          <WeatherCard.Date>{date.format('D MMM')}</WeatherCard.Date>
        </WeatherCard.Header>
        <WeatherCard.Icon color="white">
          {weatherIcon}
        </WeatherCard.Icon>
        <WeatherCard.Footer>
          <WeatherCard.Temperature><span className="big">
            {Math.round(forecast.max_temp)}°
          </span>
            / {Math.round(forecast.min_temp)}°
          </WeatherCard.Temperature>
          <WeatherCard.Weather>
            {forecast.weather_state_name}
          </WeatherCard.Weather>
        </WeatherCard.Footer>
      </WeatherCard.Inner>
    </WeatherCard.Container>
  )
}

WeatherCard.Container = function WeatherCardContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

WeatherCard.Inner = function WeatherCardInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
}

WeatherCard.Header = function WeatherCardHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
}

WeatherCard.Time = function WeatherCardTime({ children, ...restProps }) {
  return <Time {...restProps}>{children}</Time>;
}

WeatherCard.Date = function WeatherCardDate({ children, ...restProps }) {
  return <Date {...restProps}>{children}</Date>;
}

WeatherCard.Icon = function WeatherCardIcon({ children, color, ...restProps }) {
  return (
    <IconContainer {...restProps}>
      {children}
    </IconContainer>
  );
}

WeatherCard.Footer = function WeatherCardFooter({ children, ...restProps }) {
  return <Footer {...restProps}>{children}</Footer>;
}

WeatherCard.Temperature = function WeatherCardTemperature({ children, ...restProps }) {
  return <Temperature {...restProps}>{children}</Temperature>;
}

WeatherCard.Weather = function WeatherCardWeather({ children, ...restProps }) {
  return <Weather {...restProps}>{children}</Weather>;
}