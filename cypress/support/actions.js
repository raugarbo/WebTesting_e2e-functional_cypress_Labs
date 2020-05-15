/// <reference types="Cypress" />

export { type, click, check };

const type = (selector, text) => cy.get(selector).type(text);
const click = selector => cy.get(selector).click();
const check = selector => cy.get(selector).check();
