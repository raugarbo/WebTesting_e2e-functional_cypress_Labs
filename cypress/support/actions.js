export { type, click };
const type = (selector, text) => {
  cy.get(selector).type(text);
};

const click = selector => {
  cy.get(selector).click();
};
