/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-map
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

it('adds four todos', () => {
  cy.visit('/')
  cy.get('body').should('have.class', 'loaded')
  // create four todos
  cy.get('.new-todo').type('learn testing{enter}')
  cy.get('.new-todo').type('be cool{enter}')
  cy.get('.new-todo').type('be happy{enter}')
  cy.get('.new-todo').type('be kind{enter}')
  // there should be 4 todo items
  cy.get('.todo-list li').should('have.length', 4)
  // validate the text of all todos
})
