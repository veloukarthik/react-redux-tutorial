import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from './Hello';

describe('Hello Component', () => {
  it('renders with the correct name', () => {
    render(<Hello name="John" />);
    const headingElement = screen.getByText(/hello, john!/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('renders with an empty name', () => {
    render(<Hello name="" />);
    const headingElement = screen.getByText(/hello,!/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('renders with a long name', () => {
    const longName = 'Pneumonoultramicroscopicsilicovolcanoconiosis';
    render(<Hello name={longName} />);
    const headingElement = screen.getByText(new RegExp(`hello, ${longName}!`, 'i'));
    expect(headingElement).toBeInTheDocument();
  });

  it('renders with special characters in the name', () => {
    const specialName = '!@#$%^&*()';
    render(<Hello name={specialName} />);
    const headingElement = screen.getByText(new RegExp(`hello, ${specialName}!`, 'i'));
    expect(headingElement).toBeInTheDocument();
  });
});
