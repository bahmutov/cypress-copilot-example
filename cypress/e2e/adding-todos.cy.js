/// <reference types="cypress" />

import { TodoMVC } from './todomvc.page'

// https://github.com/bahmutov/cypress-map
import 'cypress-map'

// before each test reset the data
beforeEach(TodoMVC.resetData)

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
  TodoMVC.visit()

  // add four todos
  TodoMVC.addTodo('learn testing')
  TodoMVC.addTodo('be cool')
  TodoMVC.addTodo('be happy')
  TodoMVC.addTodo('be brave')

  // there should be 4 todo items
  cy.get(TodoMVC.todo_selector)
    .find('label')
    .map('innerText')
    .should('deep.equal', [
      'learn testing',
      'be cool',
      'be happy',
      'be brave',
    ])
})
