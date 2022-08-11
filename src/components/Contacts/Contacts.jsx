import { useSelector, useDispatch } from 'react-redux';

import { Item, Name, Number, DeleteBtn } from './Contacts.styled';
import { remove, getItems, getFilter } from 'redux/contactsSlice';

export const Contacts = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    console.log(contacts[0].name);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <>
      {visibleContacts?.length ? (
        <ul>
          {visibleContacts.map(({ id, name, number }) => (
            <Item key={id}>
              <Name>
                {name}: <Number>{number}</Number>
              </Name>
              <DeleteBtn type="button" onClick={() => dispatch(remove(id))}>
                Delete
              </DeleteBtn>
            </Item>
          ))}
        </ul>
      ) : (
        <p>There are no contacts</p>
      )}
    </>
  );
};
