import PropTypes from 'prop-types';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';
// import { deleteContact } from 'redux/contactsSlice';

import {
  StyledContactListItem,
  StyledName,
  StyledButton,
} from './ContactListItem.styled';

export const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <StyledContactListItem>
      <StyledName>{name}:</StyledName>
      <p> {number} </p>
      <StyledButton type="button" onClick={() => dispatch(deleteContact(id))}>
        <MdOutlineDeleteOutline />
      </StyledButton>
    </StyledContactListItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
