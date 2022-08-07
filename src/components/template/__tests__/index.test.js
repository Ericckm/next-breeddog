import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import Template from '..';

describe('Tests for Template"', () => {
  const component = (
    <ThemeProvider theme={theme}>
      <Template />
    </ThemeProvider>
  );

  test('should render template', () => {
    render(component);
  });
});
