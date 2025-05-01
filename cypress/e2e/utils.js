/**
 * Enters the new todo item into the input field and submits it.
 * This is bbbfff
 * @example
 *  import { addTodo } from './utils'
 *  addTodo('Buy milk')
 */
export function addTodo(todo) {
  cy.get('.new-todo').type(`${todo}{enter}`)
}
