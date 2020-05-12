/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
import { ignoreParcelError } from '../../support/parcel.error';

// FEATURE:     the app should have a well formed html
// As a:        user
// I want to:   view a recognizable web page
// In order to: feel safe using it

describe(`GIVEN: the url ${Cypress.env('baseUrl')} `, () => {
  // Arrange
  const sutUrl = Cypress.env('baseUrl');
  context('WHEN: I visit it', () => {
    before(() => {
      ignoreParcelError();
      // Act
      cy.visit(sutUrl);
    });

    it('THEN: should have charset UTF-8', () => {
      //Assert
      cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    });

    it('AND THEN: should have _Proton Tasks_ on Title', () => {
      //Assert
      cy.title().should('include', 'Proton Tasks');
    });

    it('AND THEN: should have a header', () => {
      // Assert
      cy.get('header').should('exist');
    });

    it('AND THEN: should have an h1 on the header with text _Proton Tasks_', () => {
      // Assert
      cy.get('header > h1').should('contain', 'Proton Tasks');
    });
  });
});
