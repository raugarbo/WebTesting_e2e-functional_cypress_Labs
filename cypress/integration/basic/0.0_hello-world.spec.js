/// <reference types="Cypress" />

describe('Visiting the url https://www.bitademy.com', () => {
  it('should have _bitAdemy_ on its title', () => {
    cy.visit('https://www.bitademy.com');
    cy.title().should('include', 'bitAdemy');
  });
});

// FEATURE:     have web site with a title
// As a:        visitor
// I want to:   view the title of a site
// In order to: be more confident

describe('GIVEN: the url https://www.bitademy.com', () => {
  // Arrange
  const sutUrl = 'https://www.bitademy.com';
  context('WHEN: I visit it', () => {
    // Act
    before(() => cy.visit(sutUrl));
    // Assert
    it('THEN: should have _bitAdemy_ on its title', () => {
      const expected = 'bitAdemy';
      cy.title().should('include', expected);
    });
  });
});

// FEATURE:     have web site with a title
// As a:        visitor
// I want to:   view the title of a site
// In order to: be more confident

// Scenario:
//  Given: the url https://www.bitademy.com
//  When: I visit it
//  Then: should have bitAdemy on its title

const sutUrl = 'https://www.bitademy.com';
describe(`GIVEN: the url ${sutUrl}`, () => {
  context(`WHEN: I visit it`, () => {
    before(() => cy.visit(sutUrl));
    const expected = 'bitAdemy';
    it(`THEN: should have _${expected}_ on its title`, () => {
      cy.title().should('include', expected);
    });
  });
});
