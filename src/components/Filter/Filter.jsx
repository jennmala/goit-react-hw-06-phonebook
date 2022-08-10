import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { Input, Label } from './Filter.styled';

import { addContact, changeFilter } from 'redux/store';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <Label htmlFor="">
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </Label>
  );
};
