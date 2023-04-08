import { useDispatch, useSelector } from 'react-redux';
// import { getContacts } from 'redux/contactsSlice';
import { getContacts, getError, getIsLoading } from 'redux/selectors';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Notification } from 'components/Notification';

import { GlobalStyle } from 'components/styles';
import { Container, Section } from './App.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <GlobalStyle />
        <h1>Phone book</h1>
        <ContactForm />

        <h2>Contacts</h2>
        {isLoading && <h2>Loading сontacts...</h2>}
        {error && <h2>{error}</h2>}
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Notification message="There are no contacts in your phone book. Please add a contact!" />
        )}
      </Container>
    </Section>
  );
};
