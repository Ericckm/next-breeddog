import styled from 'styled-components';

export const FullContainer = styled.div`
  width: 100vw;
  padding: 15px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  padding: 15px;
  display: flex;

  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.background};
  max-width: 530px;
  margin: 0 auto;
  height: auto;
  min-height: 320px;

  p {
    color: ${(props) => props.theme.colors.secundary};
  }
  span {
    color: ${(props) => props.theme.colors.secundary};
    font-size: 12px;
    display: flex;
    justify-content: center;
  }
`;

export const Wrapper = styled.form`
  color: white;
  display: flex;
  align-items: center;
  max-width: 600px;
  max-height: 400px;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  span {
    color: red;
  }
`;

export const Title = styled.h1`
  display: flex;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  display: flex;
  padding: 8px;
  border: solid 1px ${(props) => props.theme.colors.text};
  border-radius: 5px;
`;

export const Button = styled.button`
  display: flex;
  height: 32px;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-weight: bold;
  border: solid 1px ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: all 0.5s;
  border-radius: 5px;

  :hover {
    background-color: ${(props) => props.theme.colors.text};
    color: white;
  }
`;
