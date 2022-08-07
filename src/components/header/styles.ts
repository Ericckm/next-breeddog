import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-around;
  padding: 24px;

  p {
    color: ${(props) => props.theme.colors.white};
    font-size: 32px;
    font-weight: 700;
  }
`;

export const WrapperUl = styled.ul`
  display: flex;
  padding: 8px;
  font-size: 16px;
  @media (min-width: 700px) {
    gap: 64px;
    font-size: 24px;
  }

  li a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};

    &:hover {
      color: white;
    }
  }

  @media (max-width: 700px) {

    width: 100%;
    flex-wrap: wrap;
    li {
      flex: 50%;
      text-align: center;
      padding: 7px;
    }
  }

  @media (max-width: 320px) {
    li {
      flex: 100%;
    }
  }
`;
