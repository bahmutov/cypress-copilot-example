/// <reference types="cypress" />

describe('adding todos', () => {
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
})
