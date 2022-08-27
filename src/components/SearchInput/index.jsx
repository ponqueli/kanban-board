import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSearchText, clearFilters, filterTasks } from "../../store/tasks.slice";
import searchIcon from "../../assets/search.png";
import { Container } from "./styles";

const SearchInput = () => {
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
      <img src={searchIcon} alt="Cat as search icon"/>
    </Container>
  )
}

export default SearchInput;