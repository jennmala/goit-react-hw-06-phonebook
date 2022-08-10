import { useSelector, useDispatch } from 'react-redux';

import { Item, Name, Number, DeleteBtn } from './Contacts.styled';
import { removeContact } from 'redux/store';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <>
      {visibleContacts.length ? (
        <ul>
          {visibleContacts.map(({ id, name, number }) => (
            <Item key={id}>
              <Name>
                {name}: <Number>{number}</Number>
              </Name>
              <DeleteBtn
                type="button"
                onClick={() => dispatch(removeContact(id))}
              >
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
