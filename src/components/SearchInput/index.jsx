import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from 'styled-components';
import { setSearchText, clearFilters, filterTasks } from "../../store/tasks.slice";
import searchDark from "../../assets/search.png";
import { Container } from "./styles";

const SearchInput = () => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.tasks);

  useEffect(() => {
    if (searchText.length === 0) {
      dispatch(clearFilters());
      return;
    } else {
      dispatch(filterTasks({}))
    }
  }, [searchText]);

  return (
    <Container>
      <input 
        type="search" 
        placeholder="Search for tasks" 
        value={searchText}
        onChange={(e) => dispatch(setSearchText(e.target.value))}
      />
      <img src={searchDark} alt="search icon"/>
    </Container>
  )
}

export default SearchInput;