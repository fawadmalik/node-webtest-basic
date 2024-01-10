# node-webtest-basic

To create a Node.js project for web testing using Selenium WebDriver, assert, and Mocha, you can follow these steps:

1. **Make and change to project directory:**
	Run the following commands from your commandline
   ```bash
   mkdir node-webtesting-basic
   cd node-webtesting-basic
   ```
   
1. **Initialize a Node.js project:**
   Run the following command to create a new Node.js project and initialize it with a `package.json` file:

   ```bash
   npm init -y
   ```

2. **Install the necessary packages:**
   Install Selenium WebDriver, assert, and Mocha using the following command:

   ```bash
   npm install selenium-webdriver assert mocha --save-dev
   ```

3. **Create the project structure:**
   You can organize your project with the following structure:

   ```
   ├── test
   |   └── test_checkboxes.js
   ├── .gitignore
   └── package.json
   ```

   Create the `test` directory and a `test_checkboxes.js` file inside it.

4. **Edit your `test.js` file:**
   In your `test_checkboxes.js` file, add the following code to create a basic test that visits the given webpage and asserts that the two checkboxes have opposite states:

   ```javascript
   const { Builder, By, Key, until } = require('selenium-webdriver');
   const assert = require('assert');
   const { describe, it, afterEach } = require('mocha');

   let driver;

   describe('Checkbox Test Suite', function () {
     this.timeout(30000); // Set timeout to 30 seconds

     beforeEach(async function () {
       driver = await new Builder().forBrowser('chrome').build();
     });

     afterEach(async function () {
       await driver.quit();
     });

     it('should have opposite states for checkboxes', async function () {
       try {
         await driver.get('https://the-internet.herokuapp.com/checkboxes');

         const checkboxes = await driver.findElements(By.css('input[type="checkbox"]'));

         // Assert that there are two checkboxes on the page
         assert.strictEqual(checkboxes.length, 2, 'Expected two checkboxes on the page');

         // Assert that the two checkboxes have opposite states
         const state1 = await checkboxes[0].isSelected();
         const state2 = await checkboxes[1].isSelected();
         assert.notStrictEqual(state1, state2, 'Expected checkboxes to have opposite states');
       } catch (error) {
         console.error('Test failed:', error.message);
         throw error;
       }
     });
   });
   ```

5. **Run the test:**
   Add/replace a script entry in your `package.json` file for running the test:

   ```json
   "scripts": {
     "test": "mocha"
   }
   ```

   Then run the test using the following command:

   ```bash
   npm test
   ```

This set of commands and steps will help you set up a basic Node.js project for web testing using Selenium WebDriver, assert, and Mocha, and create a simple test for the specified webpage.
