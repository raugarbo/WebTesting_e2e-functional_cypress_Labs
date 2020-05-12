/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
/// <reference types="Cypress" />
import { click, type } from '../../support/actions';
import { assertContain, assertExist } from '../../support/asserts';
import { ignoreParcelError } from '../../support/parcel.error';
const baseUrl = 'baseUrl';
let sutUrl;
let inputButtonText;
let inputTaskDescription;
let expectedTaskDescription;
let selectorFormInput;
let selectorFormButton;
let selectorCompleteList;
let selectorIncompleteList;

// FEATURE:     the app should allow me to mark tasks as completed
// As a:        user
// I want to:   mark a task as completed
// In order to: focus on my uncompleted work

describe(`GIVEN: an uncompleted task`, () => {
  arrangeTest();
  context(`WHEN: I want to mark the task as completed`, () => {
    actVisit();
    it(`THEN: should have an input check box`, assertIncompleteItemCheckBoxExist);
  });
  context(`WHEN: I check the completed checkbox`, () => {
    actMarkCheck();
    it(`THEN: should be on completed tasks list`, assertIsOnCompleteList);
    it(`AND THEN: should not be on uncompleted tasks list`, assertIsNotOnIncompleteList);
  });
});

function arrangeTest() {
  ignoreParcelError();
  sutUrl = Cypress.env(baseUrl);
  inputButtonText = 'Add task';
  inputTaskDescription = 'Dummy task to be completed';
  expectedTaskDescription = 'Dummy task to be completed';
  selectorFormInput = 'form > input';
  selectorFormButton = 'form > button';
  selectorCompleteList = '#completed-tasks > li:first';
  selectorIncompleteList = '#incomplete-tasks > li:first';
}
function actVisit() {
  before(() => {
    cy.visit(sutUrl);
    type(selectorFormInput, inputTaskDescription);
    cy.get(selectorFormButton).contains(inputButtonText).click();
  });
}
function assertIncompleteItemCheckBoxExist() {
  assertExist(`${selectorIncompleteList} > [type="checkBox"]`);
}
function actMarkCheck() {
  before(() => {
    cy.get(`${selectorIncompleteList} > [type="checkBox"]`).check();
  });
  after(() => {
    click(`${selectorCompleteList} > .delete`);
  });
}
function assertIsOnCompleteList() {
  assertContain(`${selectorCompleteList} > label`, expectedTaskDescription);
}
function assertIsNotOnIncompleteList() {
  cy.get(`${selectorIncompleteList} > label`).should('not.exist');
}
