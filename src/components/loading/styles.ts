import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 16px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 75vh;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 50px;
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.white};
  @media (max-width: 700px) {
    font-size: 36px;
  }
`;

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 8px solid ${(props) => props.theme.colors.white};
  border-right: 8px solid ${(props) => props.theme.colors.white};
  border-bottom: 8px solid ${(props) => props.theme.colors.white};
  border-left: 8px solid ${(props) => props.theme.colors.text};
  background: transparent;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 20px;
`;

export const WrapperSpinner = styled.div`
  padding: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 200px;
`;

export const RedirectSpan = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
`;
