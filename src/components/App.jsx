import React, { Component } from 'react';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = userId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => userId !== id),
    }));
  };

  newUser = data => {
    console.log(data);
    //з затримкою в асинхронному коді теж працює:
    // setTimeout(() => {
    //   console.log(data);
    // }, 1000);
  };

  addContact = () => {
    // return this.state.contacts;
    const newUser = this.state;
    console.log(newUser);

    this.setState(prevState => ({
      contacts: [this.state.contacts, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <div>
        <Container title={'Phonebook'}>
          <ContactForm onSubmit={this.newUser} />
        </Container>

        <Container title={'Contacts'}>
          {/* <Filter /> */}
          <ContactList
            contacts={this.state.contacts}
            deleteContact={this.deleteContact}
          />
        </Container>
      </div>
    );
  }
}

export default App;
