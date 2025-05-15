/**
 * Enters the new todo item into the input field and submits it.
 */
export function bbbfff(todo) {
  cy.get('.new-todo').type(`${todo}{enter}`)
}
