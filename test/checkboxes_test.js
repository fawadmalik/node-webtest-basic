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