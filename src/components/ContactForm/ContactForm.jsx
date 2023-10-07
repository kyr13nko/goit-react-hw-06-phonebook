import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { createContact } from 'redux/contactsSlice';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { nanoid } from 'nanoid';

import { Button, Form, Input, Label } from './ContactForm.styled';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onFormSubmit = event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const number = formData.get('number');

    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      toast.error(`"${name}" is already in contacts`);
      return;
    }

    dispatch(createContact({ id: nanoid(), name, number }));
    toast.success(`"${name}" is now in your contacts`);

    event.target.reset();
  };
  return (
    <Form onSubmit={onFormSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Phone
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
