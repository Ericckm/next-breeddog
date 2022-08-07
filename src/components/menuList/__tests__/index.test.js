import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import MenuList from '..';

describe('Tests for MenuList"', () => {
  const component = (
    <ThemeProvider theme={theme}>
      <MenuList />
    </ThemeProvider>
  );
  const { getByText } = render(component);

  test('Render component and get text', async () => {
    expect(getByText('Seja bem vindo!').textContent).toEqual('Seja bem vindo!');
  });

  test('should render menu', () => {
    render(component);
  });
});
