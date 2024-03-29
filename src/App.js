import { useEffect } from 'react';
import { useDispatch } from "react-redux";

import './App.css';
import Container from './components/Container';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { fetchContacts } from './redux/phonebook/operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
      </Section>
      
      <Section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
};

export default App;