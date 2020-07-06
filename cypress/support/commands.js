Cypress.Commands.add('addTask', inputTaskDescription => {
  const selectorFormInput = 'form > input';
  const selectorFormButton = 'form > button';
  const inputButtonText = 'Add task';
  cy.get(selectorFormInput).type(inputTaskDescription);
  cy.get(selectorFormButton).contains(inputButtonText).click();
});

Cypress.Commands.add('deleteTasks', () => {
  const selectorDeleteButtons = 'button.delete';
  cy.get(selectorDeleteButtons).each($el => $el.click());
});
