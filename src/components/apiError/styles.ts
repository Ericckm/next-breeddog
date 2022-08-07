import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 16px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 75vh;
`;

export const RedirectSpan = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
  text-align: center;
`;
