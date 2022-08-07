import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import ApiError from '..';

describe('Tests for ApiError"', () => {
  const component = (
    <ThemeProvider theme={theme}>
      <ApiError />
    </ThemeProvider>
  );

  test('should render apiError', () => {
    render(component);
  });
});
