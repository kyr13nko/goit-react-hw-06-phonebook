import { useEffect, useState } from 'react';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';

import { Container } from './App.styled';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const LS_KEY = 'contacts_key';

const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem(LS_KEY)) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const createContact = data => {
    const newContact = { id: nanoid(), ...data };
    setContacts(prev => [newContact, ...prev]);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
    toast.success('Contact deleted!');
  };

  const filterChange = ({ target: { value } }) => {
    setFilter(value);
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} createContact={createContact} />
        <h2>Contacts</h2>
        <Filter title="Find contacts by name" filterChange={filterChange} />
        <ContactsList contacts={filterContacts} deleteContact={deleteContact} />
      </Container>
      <ToastContainer autoClose={3000} theme="colored" />
    </>
  );
};

export default App;
