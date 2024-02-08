describe('todomvc application', () => {
  it('loads the app', () => {
    cy.visit('/')
    // the should be loaded
    // and have class "loaded" set on the body element
    cy.get('body').should('have.class', 'loaded')
    // check the title
    // it should be "cypress-copilot-example"
    cy.title().should('equal', 'cypress-copilot-example')
    // the h1 heading should have text "todos"
    cy.contains('h1', 'todos')
      // should have attribute "data-cy" set to "app-title"
      .should('have.attr', 'data-cy', 'app-title')
  })
})
