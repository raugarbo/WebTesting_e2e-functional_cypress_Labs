/// <reference types="Cypress" />
import { click, type } from '../../support/actions';
import {
  assertContain,
  assertContainValue,
  assertExist,
  assertNotContainValue,
} from '../../support/asserts';
import { ignoreParcelError } from '../../support/parcel.error';
const baseUrl = 'baseUrl';
let sutUrl;
let inputButtonText;
let inputTaskDescription;
let expectedTaskDescription;
let selectorFormInput;
let selectorFormButton;
let selectorIncompleteList;

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
  context(`WHEN: I type a task description on input`, () => {
    actType();
    it(`THEN: should be displayed`, assertDisplaysValue);
  });
  context(`WHEN: I type a description and click on _Add task_ button`, () => {
    actTypeAndClick();
    it(`THEN: should clear the input box`, assertInputNotContainValue);
    it(`AND THEN: should appear on Things to do`, assertIncompleteListContainText);
  });
});

function arrangeTest() {
  ignoreParcelError();
  sutUrl = Cypress.env(baseUrl);
  inputButtonText = 'Add task';
  inputTaskDescription = 'Dummy task one';
  expectedTaskDescription = 'Dummy task one';
  selectorFormInput = 'form > input';
  selectorFormButton = 'form > button';
  selectorIncompleteList = '#incomplete-tasks > li:first';
}

function actVisit() {
  before(() => cy.visit(sutUrl));
}
function assertInputExist() {
  assertExist(selectorFormInput);
}
function assertButtonContainText() {
  assertContain(selectorFormButton, inputButtonText);
}

function actType() {
  before(() => type(selectorFormInput, inputTaskDescription));
  after(() => cy.get(selectorFormInput).clear());
}
function assertDisplaysValue() {
  assertContainValue(selectorFormInput, expectedTaskDescription);
}

function actTypeAndClick() {
  before(() => {
    type(selectorFormInput, inputTaskDescription);
    cy.get(selectorFormButton).contains(inputButtonText).click();
  });
  after(() => click(`${selectorIncompleteList} > .delete`));
}
function assertInputNotContainValue() {
  assertNotContainValue(selectorFormInput).should('not.contain.value');
}
function assertIncompleteListContainText() {
  assertContain(`${selectorIncompleteList} > label`, expectedTaskDescription);
}
