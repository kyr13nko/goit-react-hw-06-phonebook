import { List, Item, ContactValue, Button } from './ContactsList.styled';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ContactValue>
              {name}
              <span>{number}</span>
            </ContactValue>
            <Button type="button" onClick={() => deleteContact(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactsList;
