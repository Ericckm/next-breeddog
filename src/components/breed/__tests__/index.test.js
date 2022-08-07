import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import BreedDog from '..';

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Tests for BreedDog"', () => {
  const component = (
    <ThemeProvider theme={theme}>
      <BreedDog />
    </ThemeProvider>
  );

  test('should render breedDog', () => {
    render(component);
  });
});
