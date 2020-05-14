/// <reference types="Cypress" />

export { assertContain, assertContainValue, assertNotContainValue, assertExist, assertNotExist };

const assertExist = selector => cy.get(selector).should('exist');
const assertNotExist = selector => cy.get(selector).should('not.exist');
const assertContain = (selector, text) => cy.get(selector).should('contain', text);
const assertContainValue = (selector, value) => cy.get(selector).should('contain.value', value);
const assertNotContainValue = selector => cy.get(selector).should('not.contain.value');
