import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import Register from '..';

describe('Tests for Register"', () => {
  const component = (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
  const { getByText } = render(component);

  test('Render component and get text', async () => {
    expect(
      getByText(
        'Se registre para ver alguns doguinhos' &&
          'Só precisamos do seu email para prosseguir'
      ).textContent
    ).toEqual(
      'Se registre para ver alguns doguinhos' &&
        'Só precisamos do seu email para prosseguir'
    );
  });

  test('should render register', () => {
    render(component);
  });
});
