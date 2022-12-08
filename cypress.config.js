const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'opfh4i',
  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
