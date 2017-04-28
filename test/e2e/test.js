var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
    elements: {
        comments: '//html/body/h1'
    }
},

module.exports = { // adapted from: https://git.io/vodU0

  'Guinea Pig Assert Title': function(browser) {
      browser
          .useXpath()
          .url('https://saucelabs.com/test/guinea-pig')
          .waitForElementVisible('//*[@id="comments"]')
          .waitForElementVisible('/html/body/h1')
          .assert.title('I am a page title - Sauce Labs')
          .saveScreenshot('guinea-pig-test.png')
          .end()
  }
}