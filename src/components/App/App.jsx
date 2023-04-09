import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getContacts } from 'redux/contactsSlice';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import {
  ContactForm,
  ContactList,
  Filter,
  Notification,
  ContactError,
  Loader,
} from 'components';

import { GlobalStyle } from 'components/styles';
import { Container, Section } from './App.styled';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
        {isLoading && <Loader />}
        {error && (
          <b>
            <ContactError error={error} />
          </b>
        )}
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <b>
            <Notification message="There are no contacts in your phone book. Please add a contact!" />
          </b>
        )}
      </Container>
    </Section>
  );
};
