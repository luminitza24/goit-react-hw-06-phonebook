import './Search.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilters } from 'redux/selector';
import { changeTextFilter } from 'redux/filterSlice';

export const Search = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getFilters);

  const handleFilterChange = evt => {
    const name = evt.target.value;
    dispatch(changeTextFilter(name));
  };
  return (
    <>
      <h3 className="info">Find contacts by name</h3>
      <label className="filter">
        <input
          autoComplete="off"
          type="text"
          className="input"
          value={filters.textFilter}
          onChange={handleFilterChange}
        />
      </label>
    </>
  );
};
