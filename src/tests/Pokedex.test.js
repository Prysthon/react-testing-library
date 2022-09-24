import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Pokedex component - Req 05', () => {
  it('should be a h2 text "Encountered pokémons"', () => {
    renderWithRouter(<App />);
    const EncounteredPokemonsText = screen.getByText(/Encountered pokémons/i);
    expect(EncounteredPokemonsText).toBeInTheDocument();
  });

  it('show the next pokemon', () => {
    renderWithRouter(<App />);
    const nextPokemonButton = screen.getByRole('button', { name: 'Próximo pokémon' });
    const pokemonName = screen.getByText(/pikachu/i);
    expect(nextPokemonButton).toBeInTheDocument();
    expect(pokemonName).toBeInTheDocument();
    userEvent.click(nextPokemonButton);
    const NewPokemonName = screen.getByText(/Charmander/i);
    expect(NewPokemonName).toBeInTheDocument();
  });

  it('have filter buttons', () => {
    const minLength = 7;
    renderWithRouter(<App />);
    const allButton = screen.getByRole('button', { name: 'All' });
    expect(allButton).toBeInTheDocument();
    const buttons = screen.getAllByTestId('pokemon-type-button');
    expect(buttons.length).toBe(minLength);
    expect(buttons[0].innerHTML).toBe('Electric');
    userEvent.click(allButton);
    expect(allButton.innerHTML).toBe('All');
  });
});
