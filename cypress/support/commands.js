Cypress.Commands.add('buttonLogin', () => {
  cy.get('button').contains('Entrar').click()
})

Cypress.Commands.add('urlPathValidation', (path) => {
  cy.location('pathname').should('eq', path)
})

Cypress.Commands.add('vlowValidateHomePage', () => {
  cy.get('.brand-logo-vtg').should('exist')
  cy.get('#navbar-mobile').should('exist')
})