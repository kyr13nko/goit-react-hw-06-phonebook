import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

import { toast } from 'react-toastify';

import { List, Item, ContactValue, Button } from './ContactsList.styled';

const ContactsList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filterContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteBtnClick = id => {
    dispatch(deleteContact(id));
    toast.success('Contact deleted!');
  };

  return (
    <List>
      {filterContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ContactValue>
              {name}
              <span>{number}</span>
            </ContactValue>
            <Button type="button" onClick={() => onDeleteBtnClick(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactsList;
