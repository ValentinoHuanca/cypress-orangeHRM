const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:'cypress-mochawesome-reporter',
  screenshotOnRunFailure:false,
  reporterOptions:{
    charts: true,
    reportPageTitle: 'test-report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    saveJson:true,
  },
  e2e: {
    specPattern:'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
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
