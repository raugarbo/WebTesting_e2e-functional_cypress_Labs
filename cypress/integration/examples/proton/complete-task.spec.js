import { ignoreParcelError } from './parcel.error';

// FEATURE:     the app should allow me to mark tasks as completed
// As a:        user
// I want to:   mark a task as completed
// In order to: focus on my uncompleted work

describe('GIVEN: an uncompleted task', () => {
  // Arrange
  const sutUrl = 'https://labsademy.github.io/ProtonTasks/';
  context('WHEN: I want to mark the task as completed', () => {
    before(() => {
      ignoreParcelError();
      // Act
      cy.visit(sutUrl);
      cy.get('form > input').type('Dummy task to be completed');
      cy.get('form > button')
        .contains('Add task')
        .click();
    });

    it('THEN: should have an input check box', () => {
      // Assert
      cy.get('#incomplete-tasks > li:first > [type="checkBox"]').should('exist');
    });
  });

  context('WHEN: I check the completed checkbox', () => {
    before(() => {
      // Act
      cy.get('#incomplete-tasks > li:first > [type="checkBox"]').check();
    });

    it('THEN: should be on completed tasks list', () => {
      // Assert
      cy.get('#completed-tasks > li:first > label').should(
        'contain.text',
        'Dummy task to be completed'
      );
    });

    it('AND THEN: should not be on uncompleted tasks list', () => {
      // Assert
      cy.get('#uncomplete-tasks > li:first > label').should('not.exist');
    });

    after(() => {
      // After
      cy.get('#completed-tasks > li:first > .delete').click();
    });
  });
});
