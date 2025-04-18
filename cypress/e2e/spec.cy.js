describe('todomvc application', () => {
  it('adds a todo', () => {
    cy.visit('/')
    cy.get('.loaded')
    cy.get('.enter-new-todo').type('New Todo{enter}')
    cy.get('.todo-list').should('contain', 'New Todo')
  })
})
