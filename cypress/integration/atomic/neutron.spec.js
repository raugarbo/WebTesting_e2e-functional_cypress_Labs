/// <reference types="Cypress" />

// Feature: the app should have a well formed html
// As a user
// I want to view a web page
// In order to use it

describe('GIVEN: the url https://atomicbuilders.github.io/neutron/', () => {
  // Arrange
  const sutUrl = 'https://atomicbuilders.github.io/neutron/';
  context('WHEN: I visit it', () => {
    // Arrange
    before(() => {
      cy.visit(sutUrl);
    });

    it('THEN: should have charset UTF-8', () => {
      cy.document() // Act
        .should('have.property', 'charset') //Assert
        .and('eq', 'UTF-8'); //Assert
    });

    it('AND THEN: should have _Neutrón_ on Title', () => {
      cy.title() //Act
        .should('include', 'Neutrón'); //Assert
    });

    it('AND THEN: should have a header', () => {
      cy.get('header') // Act
        .should('exist'); // Assert
    });

    it('AND THEN: should have an h1 on the header with text _Neutrón_', () => {
      cy.get('header > h1') // Act
        .should('contain', 'Neutrón'); // Assert
    });
  });
});
