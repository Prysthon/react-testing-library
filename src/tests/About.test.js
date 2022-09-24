import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

describe('About component - Req 02', () => {
  it('should be informations about Pokédex', () => {
    renderWithRouter(<About />);
    const aboutInformations = screen.getByText(/This application simulates a Pokédex/i);
    expect(aboutInformations).toBeInTheDocument();
  });

  it('should be h2 with a text "About Pokédex"', () => {
    renderWithRouter(<About />);
    const aboutTitle = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('should be 2 paragraphs about pokedex"', () => {
    renderWithRouter(<About />);
    const paragraph01 = screen.getByText(
      /This application simulates a Pokédex/i,
    );
    const paragraph02 = screen.getByText(
      /One can filter Pokémons by type, and see more details for each one of them/i,
    );
    expect(paragraph01).toBeInTheDocument();
    expect(paragraph02).toBeInTheDocument();
  });

  it('should be 1 img', () => {
    renderWithRouter(<About />);
    const img = screen.getByRole('img');
    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
