export const TodoMVC = {
  /**
   * Visits the specified URL and waits for the element with class 'loaded' to be present.
   */
  visit() {
    cy.visit('/')
    cy.get('.loaded')
  },

  todo_selector: '.todo-list li',

  /**
   * Resets the data by sending a POST request to '/reset' with an empty array of todos.
   */
  resetData() {
    cy.request('POST', '/reset', { todos: [] })
  },

  /**
   * Adds a new todo item.
   * @param {string} text - The text of the todo item.
   */
  addTodo(text) {
    cy.get('.new-todo').type(`${text}{enter}`)
  },
}
