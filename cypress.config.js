const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // set the application url
    // so Cypress knows where to find it
    baseUrl: "http://localhost:3000",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
