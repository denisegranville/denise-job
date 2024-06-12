
describe('lead-test-app-e2e', function() {

  beforeEach(() => {
    cy.visit('http://localhost:3001/project-1')
  })

  it('to allow you to click on a country name and get all projects for that country', function () {
    cy.contains('td', 'United Kingdom').click()
    cy.url().should('eq', 'http://localhost:3001/?query=United%20Kingdom');
    cy.get('input[placeholder="Country"]').should('have.value', 'United Kingdom')
    cy.contains('td', 'Kenya').should('not.exist')
  })

})
