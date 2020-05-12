/* eslint-disable max-nested-callbacks */
import { click, type } from '../../support/actions';
import { assertContain, assertContainValue, assertExists } from '../../support/asserts';
import { ignoreParcelError } from '../../support/parcel.error';
let sutUrl;

// FEATURE:     the app should allow me to create new tasks
// As a:        user with tasks to do
// I want to:   create new tasks
// In order to: follow up my work

describe(`GIVEN: the To Do List App`, () => {
  arrangeTest();
  context(`WHEN: I visit the page`, () => {
    actVisit();
    it(`THEN: should have an input text box`, assertInputExist());
    it(`AND THEN: should have an add task button`, assertButtonContainText());
  });
  context(`WHEN: I type a task description on input`, () => {
    actType();
    it(`THEN: should be displayed`, assertDisplaysValue());
  });
  context(`WHEN: I type a description and click on _Add task_ button`, () => {
    actTypeAndClick();
    it(`THEN: should clear the input box`, assertNotContainValue());
    it(`AND THEN: should appear on Things to do`, assertContainText());
  });
});

function arrangeTest() {
  ignoreParcelError();
  sutUrl = Cypress.env('baseUrl');
}

function actVisit() {
  before(() => cy.visit(sutUrl));
}
function assertInputExist() {
  return assertExists('form > input');
}
function assertButtonContainText() {
  return assertContain('form > button', 'Add task');
}

function actType() {
  before(() => type('form > input', 'Dummy task one'));
  after(() => cy.get('form > input').clear());
}
function assertDisplaysValue() {
  return assertContainValue('form > input', 'Dummy task one');
}
function actTypeAndClick() {
  before(() => {
    type('form > input', 'Dummy task one');
    cy.get('form > button').contains('Add task').click();
  });
  after(() => click('#incomplete-tasks > li:first > .delete'));
}
function assertNotContainValue() {
  return () => cy.get('form > input').should('not.contain.value');
}
function assertContainText() {
  return assertContain('#incomplete-tasks > li:first > label', 'Dummy task one');
}
