# Cypress Test Suite for Basic Auth and Horizontal Slider Functionality

This test suite verifies the functionality of 'Basic Authentication', 'Horizontal Slider' and 'Key presses' feature on the-internet website using Cypress.
Link: https://the-internet.herokuapp.com/

## Installation

1. Clone this repository to your local machine.
2. Make sure you have Node.js and npm installed.
3. Navigate to the project directory in your terminal.
4. Run `npm install cypress` to install cypress.
5. If that doesn't work, navigate to node_modules/.bin and `npm install cypress` there.

## Running Tests

1. After installing dependencies, run `npx cypress open` to open the Cypress Test Runner.
2. Choose 'E2E Testing'.
3. Select the desired browser to run the tests.
4. The Cypress Test Runner will open, showing the list of available test files.
5. Choose the-Internet.spec.cy.js
6. Observe the test execution in the browser window.

## Test Structure

The test suite is organized as follows:

- `basic_auth_spec.js`: Contains tests for Basic Authentication functionality.
- `horizontal_slider_spec.js`: Contains tests for Horizontal Slider functionality.
- `key_presses_spec.js`: Contains tests for Key Presses functionality.

## Gitignore

This project's `.gitignore` file has been configured to exclude certain files and directories from version control. The following files and directories are intentionally ignored:

- `node_modules/`: Ignoring the `node_modules` directory where external dependencies are installed.

## FIXME:

- Popup prompt for `Basic Auth` doesn't get automatically declined. A manual click is obligatory.