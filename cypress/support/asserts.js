/// <reference types="Cypress" />

export { assertContain, assertContainValue, assertExist };

const assertExist = selector => cy.get(selector).should('exist');
const assertContain = (selector, text) => cy.get(selector).should('contain', text);
const assertContainValue = (selector, value) => cy.get(selector).should('contain.value', value);
