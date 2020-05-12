/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
/// <reference types="Cypress" />
import { click, type } from '../../support/actions';
import { assertContain, assertExist } from '../../support/asserts';
import { ignoreParcelError } from '../../support/parcel.error';
let sutUrl;
// FEATURE:     the app should allow me to mark tasks as completed
// As a:        user
// I want to:   mark a task as completed
// In order to: focus on my uncompleted work

describe(`GIVEN: an uncompleted task`, () => {
  arrangeTest();
  context(`WHEN: I want to mark the task as completed`, () => {
    actVisit();
    it(`THEN: should have an input check box`, assertCheckBoxExist);
  });
  context(`WHEN: I check the completed checkbox`, () => {
    actMarkCheck();
    it(`THEN: should be on completed tasks list`, assertIsOnCompleteList);
    it(`AND THEN: should not be on uncompleted tasks list`, assertIsNotOnInCompleteList);
  });
});

function arrangeTest() {
  ignoreParcelError();
  sutUrl = Cypress.env('baseUrl');
}
function actVisit() {
  before(() => {
    cy.visit(sutUrl);
    type('form > input', 'Dummy task to be completed');
    cy.get('form > button').contains('Add task').click();
  });
}
function assertCheckBoxExist() {
  assertExist('#incomplete-tasks > li:first > [type="checkBox"]');
}
function actMarkCheck() {
  before(() => {
    cy.get('#incomplete-tasks > li:first > [type="checkBox"]').check();
  });
  after(() => {
    click('#completed-tasks > li:first > .delete');
  });
}
function assertIsOnCompleteList() {
  assertContain('#completed-tasks > li:first > label', 'Dummy task to be completed');
}
function assertIsNotOnInCompleteList() {
  cy.get('#uncomplete-tasks > li:first > label').should('not.exist');
}
