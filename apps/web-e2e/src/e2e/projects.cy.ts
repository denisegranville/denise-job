
describe('lead-test-app-e2e', function() {

  beforeEach(() => {
    cy.visit('http://localhost:3001/')
  })

it('should allow you to filter for a project by country ', function() {
    cy.contains('Kenya').should('be.visible')
    cy.get('input[placeholder="Country"]').type('france{enter}')
    cy.contains('td', 'Kenya').should('not.exist')
    cy.contains('td', 'Another One').should('exist')
  })

  it('should show the emissions for the country next to the country in the table', function() {
    cy.contains('tr', 'United Kingdom').within(() => {
      cy.get('td').contains(/^4\.6$/).should('exist')
    })
  })

  it('to click on an entry and be taken to a page which shows all of the data we have for that project', function () {
    cy.contains('tr', 'United Kingdom').click()
    cy.url().should('eq', 'http://localhost:3001/project-1');
    cy.contains('tr', 'United Kingdom').within(() => {
      cy.get('td').contains(/^1$/).should('exist')
      cy.get('td').contains(/^Test Project$/).should('exist')
      cy.get('td').contains(/^United Kingdom$/).should('exist')
      cy.get('td').contains('06/03/2024').should('exist')
      cy.get('td').contains(/^GB$/).should('exist')
      cy.get('td').contains(/^66971395$/).should('exist')
      cy.get('td').contains(/^4.6$/).should('exist')
    })
  })

})
