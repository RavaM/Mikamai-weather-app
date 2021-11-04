import axios from 'axios';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addSearch, deleteSearch } from '../../features/searches/searchesSlice.js';
import { Container, City, Date, Close, Clickable } from './styles.js';

export const SearchItem = ({ search, setSearches, searches }) => {
  const dateTime = moment(search.time).format('MMM Do, HH:mm');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = async (e, title) => {
    e.preventDefault();
    console.log(title);
    await axios.get("https://www.metaweather.com/api/location/search/", {
      params: { query: title }
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
          })
      })
  }

  const handleDelete = (id) => {
    dispatch(deleteSearch(id));
    setSearches(searches.filter(search => search.id !== id))
  }

  return (
    <SearchItem.Container>
      <SearchItem.Clickable onClick={(e) => handleClick(e, search.title)}>
        <SearchItem.City>
          {search.title}
        </SearchItem.City> - <SearchItem.Date>
          {dateTime}
        </SearchItem.Date>
      </SearchItem.Clickable>
      <SearchItem.Close onClick={() => handleDelete(search.id)} />
    </SearchItem.Container>
  )
}

SearchItem.Container = function SearchItemContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SearchItem.City = function SearchItemCity({ children, ...restProps }) {
  return <City {...restProps}>{children}</City>;
}

SearchItem.Date = function SearchItemDate({ children, ...restProps }) {
  return <Date {...restProps}>{children}</Date>;
}

SearchItem.Close = function SearchItemClose({ ...restProps }) {
  return <Close {...restProps} />
}

SearchItem.Clickable = function SearchItemClickable({ children, ...restProps }) {
  return <Clickable {...restProps}>{children}</Clickable>
}