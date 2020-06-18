The app uses [cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor) package.

Files with Gherkin tests are placed in the `cypress/integration/` directory and given an extension of `.feature`. Each feature file can have their step definitions file in the folder created with the same name.

For example, `Login.feature` should be present in the directory `cypress/integration/` and its step definition `(anyFilename.js)` can be present in the directory `cypress/integration/Login/` folder.

--------------


