import { assertContain, assertExists } from '../../support/asserts';
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
    it(`THEN: should have an input text box`, assertInputExist);
    it(`AND THEN: should have an add task button`, assertButtonContainText);
  });
  context(`WHEN: I type a task description on input`, actType);
  context(`WHEN: I type a description and click on _Add task_ button`, actTypeAndClick);
});

function arrangeTest() {
  ignoreParcelError();
  sutUrl = Cypress.env('baseUrl');
}

function actVisit() {
  before(() => cy.visit(sutUrl));
}
function assertButtonContainText() {
  assertContain('form > button', 'Add task');
}
function assertInputExist() {
  assertExists('form > input');
}

function actType() {
  before(() => cy.get('form > input').type('Dummy task one'));
  it(`THEN: should be displayed`, assertContainValue('Dummy task one'));
  after(() => cy.get('form > input').clear());
}
function assertContainValue(value) {
  return () => cy.get('form > input').should('contain.value', value);
}

function actTypeAndClick() {
  before(() => {
    cy.get('form > input').type('Dummy task one');
    cy.get('form > button').contains('Add task').click();
  });

  it(`THEN: should clear the input box`, assertNotContainValue);

  it(`AND THEN: should appear on Things to do`, assertContainText('Dummy task one'));

  after(() => cy.get('#incomplete-tasks > li:first > .delete').click());
}
function assertNotContainValue() {
  cy.get('form > input').should('not.contain.value');
}
function assertContainText(text) {
  return () => cy.get('#incomplete-tasks > li:first > label').should('contain.text', text);
}
