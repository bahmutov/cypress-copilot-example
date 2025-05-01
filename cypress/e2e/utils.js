export function addTodo(todo) {
  cy.get('.new-todo').type(`${todo}{enter}`)
}
