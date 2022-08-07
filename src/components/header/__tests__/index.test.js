import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import Header from '..';
import theme from '../../../styles/theme';

describe('Tests for Header"', () => {
  const component = (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );

  test('should render header', () => {
    render(component);
  });
});
