describe('the home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('renders the home page', () => {
    cy.getByData('title').should('have.text', 'Test your knowledge!')
    cy.getByData('description').should('include.text', 'Challenge yourself')
    cy.getByData('logo').should('be.visible')
  })

  it('has a "get started" button', () => {
    cy.getByData('btn').should('be.visible')
  })
})