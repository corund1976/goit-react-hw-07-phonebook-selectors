import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
import Container from './components/Container';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { fetchContacts } from './redux/phonebook/operations';

function App({ fetchContactsToApp }) {
  useEffect(() => {
    fetchContactsToApp();
  }, [fetchContactsToApp]);

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

const mapDispatchToProps = dispatch => ({
  fetchContactsToApp: () => dispatch(fetchContacts())
})

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  fetchContactsToApp: PropTypes.func.isRequired,
};