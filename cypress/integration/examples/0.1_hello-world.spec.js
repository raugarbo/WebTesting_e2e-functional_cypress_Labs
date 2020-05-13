/* eslint-disable max-lines-per-function */

/// <reference types="Cypress" />

// FEATURE:     have web site with courses and a subscribing form
// As a:        visitor
// I want to:   view, navigate and subscribe
// In order to: get information

describe('Visiting the url https://www.bitademy.com', () => {
  const sutUrl = 'https://www.bitademy.com';
  before(() => cy.visit(sutUrl));

  it('should have an h2 on the hero header with text _Aprender a programar mejor_', () => {
    cy.get('#hero > div > div > div.cell.block-content > h2').should(
      'contain',
      'Aprender a programar mejor'
    );
  });
  it('should navigate to courses page', () => cy.contains('Cursos').click());
  it('should have an h2 on the hero header with text _Cursos online de calidad_', () => {
    cy.get('#hero > div > div > div.cell.block-content > h2').should(
      'contain',
      'Cursos online de calidad'
    );
  });
  it('should allow me to subscribe to newsletter, but check invalid', () => {
    cy.get('#MERGE0').type('learn@bitademy.com');
    cy.get('#subscribe-form > .button').click();
    cy.get('.errorText').contains('learn@bitademy.com ya está suscrito');
  });
});
