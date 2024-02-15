/// <reference types="cypress" />

// before each test reset the data
beforeEach(() => {
  cy.request('POST', '/reset', { todos: [] })
})

it('adds a new todo', () => {
  cy.visit('/')

  cy.log('**wait for the page to load**')
  cy.get('body').should('have.class', 'loaded')

  cy.log('**confirm a single todo by adding**')
  cy.get('.new-todo').type('learn testing{enter}')
  cy.get('.todo-list li').should('have.length', 1)
  cy.contains('.todo-list li', 'learn testing')
})
