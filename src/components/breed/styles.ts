import styled from 'styled-components';

export const UlLIst = styled.ul`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    position: relative;
    overflow: hidden;
    max-width: 340px;
    transition: all 0.3s ease-out;
    width: 100%;
    cursor: pointer;
    padding: 15px;
    flex: 0 0 33.333333%;
    @media (min-width: 1920px) {
      flex: 0 0 25%;
    }
    @media (max-width: 700px) {
      flex: 0 0 50%;
    }
    @media (max-width: 500px) {
      flex: 0 0 100%;
    }

    img {
      width: 100%;
      height: auto;
      display: flex;
      vertical-align: middle;
      transition: all 0.2s ease;
      max-height: 150px;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 340px;
      height: 100%;
      background: #000;
      z-index: 10;
      opacity: 0.4;
      transition: opacity 0.15s ease-out;
      backface-visibility: hidden;
    }
    &:hover,
    &:focus {
      img {
        transform: scale(1.2);
      }
      .overlay {
        opacity: 0;
        filter: alpha(opacity=0);
      }
    }
  }
`;
