const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:'cypress-multi-reporter',
  screenshotOnRunFailure:false,
  reporterOptions:{
    configFile:'/reporter-config.json',
  },
  e2e: {
    specPattern:'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://opensource-demo.orangehrmlive.com/web/index.php'
  },
  env:{
    loginCorrecto:{
      login:'Admin',
      password:'admin123'
    }
  },
});
