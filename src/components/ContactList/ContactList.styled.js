import styled from 'styled-components';

export const StyledContacts = styled.ul`
width: 400px;
display: flex;
gap: ${({ theme }) => theme.spacing(3)};
flex-direction: column;
padding: ${({ theme }) => theme.spacing(3)};
border: ${({ theme }) => `1px solid ${theme.colors.backgroundAndBorderColor}`};
border-radius: ${({ theme }) => theme.spacing(2)};
margin-left: auto;
margin-right: auto;
margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const StyledFormField = styled.label`
display: flex;
flex-direction: column;
gap: ${({ theme }) => theme.spacing(1)};
`;
