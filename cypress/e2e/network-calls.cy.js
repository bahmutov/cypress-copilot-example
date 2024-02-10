/// <reference types="cypress" />

it('loads todos', () => {
  // spy on the "GET /todos" call
  // using cy.intercept
  cy.intercept('GET', '/todos').as('load')
  cy.visit('/')
  cy.wait('@load')

  // spy on "POST /todos" call
  cy.intercept('POST', '/todos').as('save')
  cy.get('.new-todo').type('learn testing{enter}')
  // confirm the "POST /todos" call is made
  cy.wait('@save')
})

it('deletes a todo', () => {})
