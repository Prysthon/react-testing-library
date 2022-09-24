import React from 'react';
import { screen } from '@testing-library/react';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('FavoritePokemons component - Req 03', () => {
  it('shoul have a h2 with "Page requested not found"', () => {
    renderWithRouter(<NotFound />);
    const pageNotFoundText = screen.getByText(/Page requested not found/i);
    expect(pageNotFoundText).toBeInTheDocument();
  });

  it('should be 1 img', () => {
    renderWithRouter(<NotFound />);
    const img = screen.getByRole('img');
    expect(img.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
