/// <reference types="cypress" />

describe('Delete todo', () => {
  beforeEach(() => {
    // load the fixture three-todos.json
    cy.fixture('three-todos').then((todos) => {
      cy.request('POST', '/reset', { todos })
    })
  })

  it('deletes a todo', () => {
    cy.visit('/')
    cy.get('.todo-list li').should('have.length', 3)
    cy.contains('.todo-list li', 'Complete project report')
      .find('.destroy')
      .click({ force: true })
    cy.get('.todo-list li').should('have.length', 2)
  })
})
