import { Container, City, Button, Horizontal, Inner } from './styles';
import { FaSearch } from "react-icons/fa";

export const WeatherSearch = ({ setModalOpen, city }) => {
  return (
    <WeatherSearch.Container>
      <WeatherSearch.Horizontal />
      <WeatherSearch.Inner>
        <WeatherSearch.City>{city}</WeatherSearch.City>
        <WeatherSearch.Button setModalOpen={setModalOpen} />
      </WeatherSearch.Inner>
    </WeatherSearch.Container>
  )
}

WeatherSearch.Horizontal = function WeatherSearchHorizontal({ ...restProps }) {
  return <Horizontal {...restProps} />
}

WeatherSearch.Inner = function WeatherSearchInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
}

WeatherSearch.Container = function WeatherSearchContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

WeatherSearch.City = function WeatherSearchCity({ children, ...restProps }) {
  return <City {...restProps}>{children}</City>;
}

WeatherSearch.Button = function WeatherSearchButton({ setModalOpen, ...restProps }) {
  return (
    <Button {...restProps} onClick={() => setModalOpen(true)}>
      <FaSearch color="#333" />
    </Button>
  )
}
