describe('Cypress Health Check Testing', () => {
  it('Health checking Vlow', () => {
    cy.intercept('POST', `${Cypress.env('BASE_URL_API')}/user/login`).as('login')
    cy.visit(Cypress.env('BASE_URL_WEB'))
    cy.get('#email').type(Cypress.env('SUPER_ADMIN_EMAIL'))
    cy.get('#password').type(Cypress.env('SUPER_ADMIN_PASSWORD'))
    cy.buttonLogin()
    cy.wait('@login')
    cy.urlPathValidation('/admin/company')
    cy.intercept(`${Cypress.env('BASE_URL_API')}/company/detailed*`).as('getCompany')
    cy.wait('@getCompany').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
      expect(interception.response.body.payload.companies).to.be.an('array').and.to.be.not.empty
    })
  })
})