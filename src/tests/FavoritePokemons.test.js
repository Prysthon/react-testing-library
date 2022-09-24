import React from 'react';
import { screen } from '@testing-library/react';
import { FavoritePokemons } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('FavoritePokemons component - Req 03', () => {
  it('should be a text "No favorite pokemon found"', () => {
    renderWithRouter(<FavoritePokemons />);
    const favoritePokemons = screen.getByText(/No favorite pokemon found/i);
    expect(favoritePokemons).toBeInTheDocument();
  });
});
