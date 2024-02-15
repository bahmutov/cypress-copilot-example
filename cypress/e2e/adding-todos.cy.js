/// <reference types="cypress" />

import 'cypress-map'

// before each test reset the data
beforeEach(() => {
  cy.request('POST', '/reset', { todos: [] })
})

it('adds a new todo', () => {
  // visit the page
  cy.visit('/')
  // wait for the element with class "loaded"
  cy.get('body').should('have.class', 'loaded')
  // type a new todo
  cy.get('.new-todo').type('learn testing{enter}')
  // there should be 1 todo item
  cy.get('.todo-list li').should('have.length', 1)
  // and it should have text "learn testing"
  cy.contains('.todo-list li', 'learn testing')
})

function addTodo(text) {
  cy.get('.new-todo').type(`${text}{enter}`)
}

it('adds four todos', () => {
  cy.visit('/')
  cy.get('body').should('have.class', 'loaded')
  const todo_selector = '.todo-list li label'

  // add four todos
  addTodo('learn testing')
  addTodo('be cool')
  addTodo('be happy')
  addTodo('be brave')

  // there should be 4 todo items
  cy.get(todo_selector)
    .map('innerText')
    .should('deep.equal', [
      'learn testing',
      'be cool',
      'be happy',
      'be brave',
    ])
})
