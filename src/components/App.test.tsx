import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders text', () => {
    const { getByText } = render(<App />);
    expect(getByText('Frances Kornbluth')).toBeInTheDocument();
  });
});
