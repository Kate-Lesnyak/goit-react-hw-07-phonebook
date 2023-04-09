import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// import { getContacts } from 'redux/contactsSlice';
// import { getFilter } from 'redux/filterSlice';

import { selectVisibleContacts } from 'redux/selectors';
// import { useContacts } from 'components';

import { ContactListItem } from './ContactListItem';
import { StyledContacts } from './ContactList.styled';

export const ContactList = () => {
  // const contacts = useContacts();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <StyledContacts>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </StyledContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ),
};
