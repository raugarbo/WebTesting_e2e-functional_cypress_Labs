export { assertContain, assertExists, assertContainValue };

const assertContain = (selector, text) => () => cy.get(selector).should('contain', text);

const assertContainValue = (selector, value) => () =>
  cy.get(selector).should('contain.value', value);

const assertExists = selector => () => cy.get(selector).should('exist');
