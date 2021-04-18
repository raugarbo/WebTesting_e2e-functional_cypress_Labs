/// <reference types="Cypress" />

// FEATURE:     send a question using a contact form
// As a:        visitor
// I want to:   view the message confirming the question has been sent
// In order to: be more confident

// Scenario:
//  Given: the url https://arcadina.com/contacto
//  When: I visit it
//     And When I fill and send the form 
//  Then: should have a message confirming the correct send form

describe('Visiting the url https://www.arcadina.com/contacto', () => {
  it('should have the message confirming the correct send form', () => {
    cy.visit('https://www.arcadina.com/contacto');
    cy.get('#contacto_asunto').select('otros');
    cy.get('#contacto_nombre').type('Raul test');
    cy.get('#contacto_email').type('rgarcia@arcadina.com');
    cy.get('#contacto_comentario').type('Prueba consulta');
    cy.get('#contacto_legal').click();
    cy.get('#boton_enviar').click();
    cy.contains('Consulta enviada');
  });
});
