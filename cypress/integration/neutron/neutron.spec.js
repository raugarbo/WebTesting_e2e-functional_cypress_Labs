/// <reference types="Cypress" />

// FEATURE:     the app should have a well formed html
// As a:        user
// I want to:   view a recognizable web page
// In order to: feel safe using it

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

    it('AND THEN: should have _neutron_ on Title', () => {
      cy.title() //Act
        .should('include', 'neutron'); //Assert
    });

    it('AND THEN: should have an H1 title', () => {
      cy.get('h1') // Act
        .should('exist'); // Assert
    });

    it('AND THEN: should have text _neutron_ inside the H1 title ', () => {
      cy.get('h1') // Act
        .should('contain', 'neutron'); // Assert
    });
  });
});
