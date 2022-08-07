import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import Loading from '..';

describe('Tests for Loading"', () => {
  const component = (
    <ThemeProvider theme={theme}>
      <Loading />
    </ThemeProvider>
  );

  test('should render loading', () => {
    render(component);
  });
});
