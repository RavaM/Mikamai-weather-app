import { Container, Header, Title, Body, Footer, Button, Background, Form, Input, Error, BodyTitle, BodySubtitle } from './styles';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { addSearch } from '../../features/searches/searchesSlice';

export const SearchModal = ({ setModalOpen }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.get("https://www.metaweather.com/api/location/search/", {
      params: { query: city }
    })
      .then(async (res) => {
        await axios.get(`https://www.metaweather.com/api/location/${res.data[0].woeid}/`)
          .then(res => {
            history.push({
              pathname: "/search",
              state: {
                forecasts: res.data.consolidated_weather,
                time: res.data.time,
                city: res.data.title
              }
            });
            dispatch(addSearch(res.data));
            setModalOpen(false);
          })
          .catch(err => setError("Sorry, something went wrong. Try again in a few minutes or check your spelling."))
      })
      .catch(err => setError("Sorry, something went wrong. Try again in a few minutes or check your spelling."));
  }

  return (
    <SearchModal.Background onClick={() => setModalOpen(false)}>
      <SearchModal.Container onClick={e => e.stopPropagation()}>
        <SearchModal.Header>
          <SearchModal.Title>Search you city</SearchModal.Title>
        </SearchModal.Header>
        <SearchModal.Form>
          <SearchModal.Body>
            {error && <SearchModal.Error>{error}</SearchModal.Error>}
            <SearchModal.BodyTitle>Welcome in our Weather app!</SearchModal.BodyTitle>
            <SearchModal.BodySubtitle>
              Type a city below to discover the weather for the next 5 days!
            </SearchModal.BodySubtitle>
            <SearchModal.Input
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </SearchModal.Body>
          <SearchModal.Footer>
            <SearchModal.Button
              type="submit"
              onClick={handleSubmit}
            >Search</SearchModal.Button>
            <SearchModal.Button
              bgColor="red"
              type="button"
              onClick={() => setModalOpen(false)}
            >Close</SearchModal.Button>
          </SearchModal.Footer>
        </SearchModal.Form>
      </SearchModal.Container>
    </SearchModal.Background>
  )
}

SearchModal.Background = function SearchModalBackground({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

SearchModal.Container = function SearchModelContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SearchModal.Header = function SearchModelHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
}

SearchModal.Title = function SearchModelTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

SearchModal.Body = function SearchModelBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
}

SearchModal.BodyTitle = function SearchModalBodyTitle({ children, ...restProps }) {
  return <BodyTitle {...restProps}>{children}</BodyTitle>;
}

SearchModal.BodySubtitle = function SearchModalBodySubtitle({ children, ...restProps }) {
  return <BodySubtitle {...restProps}>{children}</BodySubtitle>;
}

SearchModal.Error = function SearchModelError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
}

SearchModal.Form = function SearchModelForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
}

SearchModal.Input = function SearchModelInput({ ...restProps }) {
  return (
    <Input {...restProps}
      id="city"
      type="text"
      placeholder="Enter here you city..."
    />
  );
}

SearchModal.Footer = function SearchModalFooter({ children, ...restProps }) {
  return <Footer {...restProps}>{children}</Footer>;
}

SearchModal.Button = function SearchModalButton({ children, bgColor, ...restProps }) {
  return (
    <Button
      style={{ backgroundColor: bgColor }}
      {...restProps}
    >{children}</Button>
  );
}