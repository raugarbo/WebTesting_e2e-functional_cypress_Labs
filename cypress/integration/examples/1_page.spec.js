import { assertContain } from '../../support/asserts';
import { ignoreParcelError } from '../../support/parcel.error';
let sutUrl;

// FEATURE:     the app should have a well formed html
// As a:        user
// I want to:   view a recognizable web page
// In order to: feel safe using it

describe(`GIVEN: the proton tasks web app`, () => {
  arrangeTest();
  context(`WHEN: I visit the url ${Cypress.env('baseUrl')} `, () => {
    actVisit();
    it(`THEN: should have charset UTF-8`, assertCharset);
    it(`AND THEN: should have _Proton Tasks_ on Title`, assertTitle);
    it(`AND THEN: should have a header`, assertHeader);
    it(`AND THEN: should have an h1 on the header with text _Proton Tasks_`, assertH1());
  });
});

function arrangeTest() {
  ignoreParcelError();
  sutUrl = Cypress.env('baseUrl');
}

function actVisit() {
  before(() => cy.visit(sutUrl));
}
function assertCharset() {
  cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
}
function assertTitle() {
  cy.title().should('include', 'Proton Tasks');
}
function assertHeader() {
  cy.get('header').should('exist');
}
function assertH1() {
  return assertContain('header > h1', 'Proton Tasks');
}
