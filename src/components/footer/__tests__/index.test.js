import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import Footer from '..';
import theme from '../../../styles/theme';

describe('Tests for Footer"', () => {
  const component = (
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  );
  const { getByText } = render(component);

  test('Render component and get text', async () => {
    expect(getByText('Copyright by Erick 2022').textContent).toEqual(
      'Copyright by Erick 2022'
    );
  });

  test('should render footer', () => {
    render(component);
  });
});
