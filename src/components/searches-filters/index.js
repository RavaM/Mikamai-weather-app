import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Container, Input, InputContainer, InputGroup, Label, Title } from './styles';


export const SearchesFilters = ({
  dateRange,
  setDateRange,
  cityFilter,
  setCityFilter,
  startDate,
  endDate
}) => {

  return (
    <SearchesFilters.Container>
      <SearchesFilters.Title>Filter your searches</SearchesFilters.Title>
      <SearchesFilters.InputContainer>
        <SearchesFilters.InputGroup>
          <SearchesFilters.Label htmlFor="cityFilter">City</SearchesFilters.Label>
          <SearchesFilters.Input id="cityFilter" type="text" value={cityFilter} onChange={(e) => setCityFilter(e.target.value)} />
        </SearchesFilters.InputGroup>
        <SearchesFilters.InputGroup>
          <SearchesFilters.Label htmlFor="dateFilter">Date</SearchesFilters.Label>
          <DatePicker
            id="dateFilter"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={true}
          />
        </SearchesFilters.InputGroup>
      </SearchesFilters.InputContainer>
    </SearchesFilters.Container>
  )
}

SearchesFilters.Container = function SearchesFiltersContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SearchesFilters.Title = function SearchesFiltersTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

SearchesFilters.InputGroup = function SearchesFiltersInputGroup({ children, ...restProps }) {
  return <InputGroup {...restProps}>{children}</InputGroup>;
}

SearchesFilters.Label = function SearchesFiltersLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
}

SearchesFilters.Input = function SearchesFiltersInput({ ...restProps }) {
  return <Input {...restProps} />;
}

SearchesFilters.InputContainer = function SearchesFiltersInputContainer({ children, ...restProps }) {
  return <InputContainer {...restProps}>{children}</InputContainer>;
}