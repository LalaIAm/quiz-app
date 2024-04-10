import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '2ai6nn',
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
