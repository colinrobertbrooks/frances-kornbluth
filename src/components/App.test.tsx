import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders text', () => {
    window.scrollTo = jest.fn();
    const { getByLabelText } = render(<App />);
    expect(getByLabelText('Frances Kornbluth')).toBeInTheDocument();
  });
});
