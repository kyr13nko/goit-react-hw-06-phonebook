import { useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Button, Form, Input, Label } from './ContactForm.styled';

const ContactForm = ({ contacts, createContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onFormInput = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();

    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (contactExists) {
      toast.error(`"${name}" is already in contacts`);
      return;
    }

    createContact({ name, number });
    toast.success(`"${name}" is now in your contacts`);

    setName('');
    setNumber('');
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
          onChange={onFormInput}
          value={name}
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
          onChange={onFormInput}
          value={number}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
