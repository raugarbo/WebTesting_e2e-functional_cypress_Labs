/* eslint-disable max-nested-callbacks */
/* eslint-disable max-lines-per-function */

/// <reference types="Cypress" />

// FEATURE:     have web site with courses and a subscribing form
// As a:        visitor
// I want to:   view, navigate and subscribe
// In order to: get information

describe('GIVEN: the url https://www.bitademy.com', () => {
  // Arrange
  const sutUrl = 'https://www.bitademy.com';
  context('WHEN: I visit it', () => {
    // Act
    before(() => cy.visit(sutUrl));
    // Assert
    it('THEN: should have an h2 on the hero header with text _Aprender a programar mejor_', () => {
      cy.get('#hero > div > div > div.cell.block-content > h2').should(
        'contain',
        'Aprender a programar mejor'
      );
    });
  });

  context('WHEN: I click on Cursos link', () => {
    // Act
    before(() => cy.contains('Cursos').click());
    // Assert
    it('THEN: should navigate to courses page', () => {});
    it('AND THEN: should have an h2 on the hero header with text _Cursos online de calidad_', () => {
      cy.get('#hero > div > div > div.cell.block-content > h2').should(
        'contain',
        'Cursos online de calidad'
      );
    });
  });

  context('WHEN: I fill the subscriber form', () => {
    // Act
    before(() => {
      cy.get('#MERGE0').type('learn@bitademy.com');
      cy.get('#subscribe-form > .button').click();
    });
    // Assert
    it('THEN: should navigate bit_letter page', () => {});
    it('AND THEN: should alert me of the invalid email', () => {
      cy.get('.errorText').contains('learn@bitademy.com ya está suscrito');
    });
  });
});
