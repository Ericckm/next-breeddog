import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

body {
  background: ${(props) => props.theme.colors.backgroundGreen};
  color: ${(props) => props.theme.colors.primary};
  font: 400 16px Roboto, sans-serif;
}

p {
  color: ${(props) => props.theme.colors.white};
}

`
