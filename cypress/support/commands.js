// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

Cypress.Commands.add('getIframeBody', (getIframeDocument) => { 
    return getIframeDocument()
      .its('body').should('not.be.undefined')
      .then(cy.wrap)
})

Cypress.Commands.add('elementCounter', (tagElement) => {
  let countOfElements = 0;
    cy.get(tagElement).then($elements => {
      countOfElements = $elements.length;
    });
})
