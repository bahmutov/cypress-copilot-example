import { addTodo } from './utils'

describe('todomvc application', () => {
  it('adds a todo', () => {
    cy.visit('/')
    cy.get('.loaded')
    addTodo('New Todo')
    cy.get('.todo-list').should('contain', 'New Todo')
  })
})
