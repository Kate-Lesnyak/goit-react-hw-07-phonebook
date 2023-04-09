import styled from "styled-components";

export const StyledContactError = styled.p`
font-size: ${({ theme }) => theme.fontSizes.large};
text-align: center;
color: ${({ theme }) => theme.colors.errorColor};
`;
