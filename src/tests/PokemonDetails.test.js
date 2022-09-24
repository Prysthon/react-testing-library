import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('PokemonDetails component - Req 06', () => {
  it('should show detail informations about the selected pokemon', () => {
    renderWithRouter(<App />);
    const moreDetailsButton = screen.getByRole('link', { name: /More details/i });
    expect(moreDetailsButton).toBeInTheDocument();
    userEvent.click(moreDetailsButton);

    const pokemonName = screen.getByRole('heading', {
      name: /Pikachu Details/i, level: 2 });
    const pokemonSummary = screen.getByRole('heading', { name: /Summary/i, level: 2 });
    const pokemonTextSummary = screen.getByText(
      /This intelligent Pokémon roasts hard/i,
    );
    expect(pokemonName).toBeInTheDocument();
    expect(pokemonSummary).toBeInTheDocument();
    expect(pokemonTextSummary).toBeInTheDocument();
  });

  it('should show a map', () => {
    renderWithRouter(<App />);
    const moreDetailsButton = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDetailsButton);

    const pokemonName = screen.getByRole('heading', {
      name: /Game Locations of Pikachu/i, level: 2 });
    expect(pokemonName).toBeInTheDocument();

    const pokemonImg = screen.getAllByRole('img')[0];
    expect(pokemonImg.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  it('should favorite a pokemon', () => {
    renderWithRouter(<App />);
    const moreDetailsButton = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDetailsButton);

    const pokemoncheckbox = screen.getByRole('checkbox', {
      name: /Pokémon favoritado?/i });
    expect(pokemoncheckbox).toBeInTheDocument();
  });
});
