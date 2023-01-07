import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // componentDidMount() {
  //   const savedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (savedContacts) {
  //     this.setState({ contacts: savedContacts });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  const addContact = number => {
    const searchRepeat = contacts
      .map(user => user.name.toLowerCase())
      .includes(number.name.toLowerCase());

    if (searchRepeat) {
      alert(`${number.name} is already in contacts`);
    } else {
      const contact = {
        ...number,
        id: nanoid(),
      };
      setContacts(prevState => [...prevState, contact]);
    }
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = filter => {
    setFilter(filter);
  };

  const removeContact = contactId => {
    console.log(contacts);
    setContacts(prevState => [
      ...prevState.filter(contact => contact.id !== contactId),
    ]);
  };

  return (
    <>
      <div>
        <h1>Phonebook:</h1>
        <ContactForm addContact={addContact} />

        <h2>Contacts:</h2>
        <Filter value={filter} onChangeFilter={changeFilter} />
        <ContactList
          contacts={getFilteredContacts()}
          onRemoveContact={removeContact}
        />
      </div>
    </>
  );
};
