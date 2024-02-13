/// <reference types="cypress" />
// @ts-check

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

it('deletes a todo', () => {
  // stub the loading network call with fixture "three-todos.json"
  cy.intercept('GET', '/todos', {
    fixture: 'three-todos',
  }).as('load')
  cy.visit('/')
  cy.wait('@load')
  // intercept the "DELETE /todos/1" call with a delay of 2000 milliseconds (2 seconds)
  cy.intercept('DELETE', '/todos/1', {
    delay: 2000,
  }).as('delete')
  // delete the first todo
  cy.get('.todo-list li')
    .first()
    .find('.destroy')
    .click({ force: true })
  cy.wait('@delete')
})

it('shows a loading message', () => {
  cy.intercept('GET', '/todos', {
    fixture: 'three-todos',
    delay: 2000, // Delay in milliseconds
  }).as('load')
  cy.visit('/')
  cy.contains('Loading data ...').should('be.visible')
  // and the disappears
  cy.contains('Loading data ...').should('not.be.visible')
  cy.wait('@load')
})
