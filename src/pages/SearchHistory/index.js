import store from "../../app/store";
import './search-history.css'
import { SearchItem } from '../../components'
import { SearchesFilters } from "../../components/searches-filters";
import { useState } from "react";
import moment from "moment";

export const SearchHistory = () => {
  const [searches, setSearches] = useState(store.getState().searches.value)
  const [dateRange, setDateRange] = useState([null, null]);
  const [cityFilter, setCityFilter] = useState("");
  const [startDate, endDate] = dateRange;

  return (
    <div className="searches-history">
      <h1>Recent searches</h1>
      <SearchesFilters
        dateRange={dateRange}
        setDateRange={setDateRange}
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
        startDate={startDate}
        endDate={endDate}
      />
      <div className="searches-history-list">
        {searches
          .filter(search => search.title.toLowerCase().includes(cityFilter.toLowerCase()))
          .filter(search => {
            if (!(startDate && endDate)) {
              return search
            } else {
              return moment(search.time).isBetween(startDate, endDate, undefined, '[]')
                || moment(search.time).isSame(startDate, 'day')
                || moment(search.time).isSame(endDate, 'day')
            }
          })
          .map(search => (
            <SearchItem
              key={search.id}
              search={search}
              setSearches={setSearches}
              searches={searches}
            />
          ))}
      </div>
    </div>
  )
}
