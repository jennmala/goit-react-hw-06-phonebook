import { useSelector, useDispatch } from 'react-redux';

import { Input, Label } from './Filter.styled';

import { filterChange, getFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  console.log('filter', filter);
  const dispatch = useDispatch();

  return (
    <Label htmlFor="">
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={e => dispatch(filterChange(e.currentTarget.value))}
      />
    </Label>
  );
};
