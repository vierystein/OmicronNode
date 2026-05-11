// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OmicronNode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/OmicronNode/i);
    expect(titleElement).toBeInTheDocument();
});
