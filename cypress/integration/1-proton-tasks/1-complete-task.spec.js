/// <reference types="Cypress" />
// FEATURE:     the app should allow me to mark a task as completed
// As a:        user with tasks to do
// I want to:   mark them as done
// In order to: follow up my work

// SUT: https://labsademy.github.io/ProtonTasks/

// Scenario: complete a task
//  GIVEN: the form with an undone task
//  WHEN: I click on the _check box_
//  THEN: should not appear on the _Things to do_ list
//      AND THEN: should appear on the _Things done_ list

// describe(`GIVEN: the form with an undone task`, () => {
//   context(`WHEN: I click on the _check box_`, () => {
//     it(`THEN: should not appear on the _Things to do_ list`, () => {});
//     it(`AND THEN: should appear on the _Things done_ list`, () => {});
//   });
// });

// before(() => {
//   cy.visit('');
// });

describe(`GIVEN: the form with an undone task`, () => {
  const inputTaskDescription = 'Dummy task one';
  const selectorCompleteList = '#completed-tasks > li:first';
  const selectorIncompleteList = '#incomplete-tasks ';
  const expectedTaskDescription = 'Dummy task one';
  context(`WHEN: I click on the _check box_`, () => {
    before(() => {
      cy.visit(Cypress.env('baseUrl'));
      cy.addTask(inputTaskDescription);
      cy.get('#incomplete-tasks > li:first > [type="checkBox"]').click();
    });
    it(`THEN: should not appear on the _Things to do_ list`, () => {
      cy.get(selectorIncompleteList).should('not.contain.text', expectedTaskDescription);
    });
    it(`AND THEN: should appear on the _Things done_ list`, () => {
      cy.get(selectorCompleteList).should('contain.html', expectedTaskDescription);
    });
    after(() => {
      cy.deleteTasks();
    });
  });
});
