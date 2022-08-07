import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  padding: 15px;
  height: 75vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${(props) => props.theme.colors.white};
    margin-top: 40px;
    @media (max-width: 700px) {
      font-size: 35px;
    }
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;
