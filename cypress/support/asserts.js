export { assertContain, assertExists };
const assertContain = (selector, text) => {
  return () => cy.get(selector).should('contain', text);
};

const assertExists = selector => {
  return () => cy.get(selector).should('exist');
};
