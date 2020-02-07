import { ignoreParcelError } from '../../../support/parcel.error';

// FEATURE:     the app should allow me to create new tasks
// As a:        user with tasks to do
// I want to:   create new tasks
// In order to: follow up my work

describe('GIVEN: the To Do List App', () => {
  // Arrange
  const sutUrl = 'https://labsademy.github.io/ProtonTasks/';

  context('WHEN: I visit the page', () => {
    before(() => {
      ignoreParcelError();
      // act
      cy.visit(sutUrl);
    });

    it('THEN: should have an input text box', () => {
      //Assert
      cy.get('form > input').should('exist');
    });

    it('AND THEN: should have an add task button', () => {
      //Assert
      cy.get('form > button').should('contain', 'Add task');
    });
  });

  context('WHEN: I type a task description on input', () => {
    before(() => {
      // Act
      cy.get('form > input').type('Dummy task one');
    });

    it('THEN: should be displayed', () => {
      //Assert
      cy.get('form > input').should('contain.value', 'Dummy task one');
    });

    after(() => {
      // After
      cy.get('form > input').clear();
    });
  });

  context('WHEN: I type a description and click on _Add task_ button', () => {
    before(() => {
      // Act
      cy.get('form > input').type('Dummy task one');
      cy.get('form > button')
        .contains('Add task')
        .click();
    });

    it('THEN: should clear the input box', () => {
      // Assert
      cy.get('form > input').should('not.contain.value');
    });

    it('AND THEN: should appear on Things to do', () => {
      // Assert
      cy.get('#incomplete-tasks > li:first > label').should('contain.text', 'Dummy task one');
    });

    after(() => {
      // After
      cy.get('#incomplete-tasks > li:first > .delete').click();
    });
  });
});
