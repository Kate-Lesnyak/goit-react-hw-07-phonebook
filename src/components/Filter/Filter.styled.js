import styled from 'styled-components';

export const StyledFilter = styled.label`
display: flex;
gap: ${({ theme }) => theme.spacing(2)};
align-items: center;
width: 400px;
color: ${({ theme }) => theme.colors.primaryTextColor};
margin-left: auto;
margin-right: auto;
margin-bottom: ${({ theme }) => theme.spacing(3)};
`;


export const StyledInput = styled.input`
padding: 8px 16px;
border: ${({ theme }) => `1px solid ${theme.colors.borderInputColor}`};
border-radius: ${({ theme }) => theme.spacing(2)};
transition-property: border;
transition: ${({ theme }) => `border ${theme.colors.transition}`};

:focus {
outline: none;
border: ${({ theme }) => `1px solid ${theme.colors.accentColor}`};
}
`;
