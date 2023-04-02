import { DebounceInput } from 'react-debounce-input';
import { useDispatch, useSelector } from 'react-redux';

import { setFilterValue, getFilter } from 'redux/filterSlice';

import { StyledFilter, StyledInput } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleFilterChange = e => dispatch(setFilterValue(e.target.value));

  return (
    <StyledFilter>
      Finde contacts by name
      <DebounceInput
        element={StyledInput}
        type="text"
        name="filter"
        value={filter}
        minLength={2}
        debounceTimeout={300}
        onChange={handleFilterChange}
      />
    </StyledFilter>
  );
};
