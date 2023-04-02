import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

// styled.form
export const StyledForm = styled(Form)`
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

export const StyledLabel = styled.span`
color: ${({ theme }) => theme.colors.primaryTextColor};
`;

export const StyledButton = styled.button`
max-width: 152px;
margin: auto;
padding: 8px 32px;
font-weight: 500;
margin-top: ${({ theme }) => theme.spacing(1)};
`;

// styled.input
export const StyledInput = styled(Field)`
padding: 8px 16px;
border: ${({ theme }) => `1px solid ${theme.colors.borderInputColor}`};
border-radius: ${({ theme }) => theme.spacing(2)};
transition-property: border;
transition: ${({ theme }) => `border ${theme.transition}`};

:focus {
outline: none;
border: ${({ theme }) => `1px solid ${theme.colors.accentColor}`};
}
`;

export const StyledErrorMessage = styled(ErrorMessage)`
color: red;
`;

