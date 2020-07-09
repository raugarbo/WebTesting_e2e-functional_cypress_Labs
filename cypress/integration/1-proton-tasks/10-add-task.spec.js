/// <reference types="Cypress" />
// FEATURE:     the app should allow me to create new tasks
// As a:        user with tasks to do
// I want to:   create new tasks
// In order to: follow up my work

// SUT: https://labsademy.github.io/ProtonTasks/

// Scenario: add a task
//  GIVEN: the form to add tasks
//  WHEN: I type task description and click on _Add task_
//  THEN: should clear the input box
//      AND THEN: should appear on the _Things to do_ list

// describe(`GIVEN: the form to add tasks`, () => {
//   context(`WHEN: I type task description and click on _Add task_ `, () => {
//     it(`THEN: should clear the input box`, () => {});
//     it(`AND THEN: should appear on the _Things to do_ list`, () => {});
//   });
// });

describe(`GIVEN: the form to add tasks`, () => {
  const sutUrl = 'https://labsademy.github.io/ProtonTasks/';
  const selectorFormInput = 'form > input';
  const inputTaskDescription = 'Dummy task one';
  const selectorFormButton = 'form > button';
  const inputButtonText = 'Add task';
  const expectedTaskDescription = 'Dummy task one';
  const selectorIncompleteListLabel = '#incomplete-tasks > li:first-child > label';
  const selectorIncompleteListButton = '#incomplete-tasks > li:first-child > button.delete';
  context(`WHEN: I type task description and click on _Add task_ `, () => {
    before(() => {
      cy.visit(sutUrl);
      cy.get(selectorFormInput).type(inputTaskDescription);
      cy.get(selectorFormButton).contains(inputButtonText).click();
    });
    it(`THEN: should clear the input box`, () => {
      cy.get(selectorFormInput).should('not.include.value');
    });
    it(`AND THEN: should appear on the _Things to do_ list`, () => {
      cy.get(selectorIncompleteListLabel).should('contain', expectedTaskDescription);
    });
    after(() => {
      cy.get(selectorIncompleteListButton).click();
    });
  });
});
