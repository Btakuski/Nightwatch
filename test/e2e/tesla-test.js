var config = require('../../nightwatch.conf.BASIC.js');


module.exports = {
    'Testa - Home Page': function(browser) {
        browser
            .useXpath()
            .url('https://www.tesla.com/')
            .assert.title('Tesla | Premium Electric Sedans and SUVs')

            // US region element
/*            .waitForElementVisible('//!*[@id="locale-modal"]/div/div/div[2]/div[1]/ul/li[1]/a')
            .click('//!*[@id="locale-modal"]/div/div/div[2]/div[1]/ul/li[1]/a')*/

            // Tesla Model S link
            .waitForElementVisible('//*[@id="tsla-header-main"]/div/div/nav/div[1]/ol/li[1]/a')
            .click('//*[@id="tsla-header-main"]/div/div/nav/div[1]/ol/li[1]/a')
    },

    'Model S - Info Page': function (browser) {
        browser
            .assert.urlEquals('https://www.tesla.com/models')
            .assert.title('Model S | Tesla')

            // Custom order button
            .waitForElementVisible('//*[@id="page"]/div/div/main/div/div/div/nav/div/div/div/a[2]')
            .click('//*[@id="page"]/div/div/main/div/div/div/nav/div/div/div/a[2]')
    },

    'Model S - Design Page' : function (browser) {
        browser
            .assert.urlEquals('https://www.tesla.com/models/design')
            .assert.title('Order a Tesla Model S | Tesla')

            // Battery Options
            .waitForElementVisible('//*[@id="options_category_C_BAT"]/div/div[1]')
            .click('//*[@id="options_category_C_BAT"]/div/div[1]')

            // Drive options
            .waitForElementVisible('//*[@id="options_category_C_MOTOR"]/div[2]/div[1]/div/div/div/div[1]/div[2]/div/ul/li[3]')
            .click('//*[@id="options_category_C_MOTOR"]/div[2]/div[1]/div/div/div/div[1]/div[2]/div/ul/li[3]')

            // Click next
            .waitForElementVisible('//*[@id="summary-footer"]/a')

            .execute(function() {
                document.getElementsByClassName('bookButton us-ca-done').scrollIntoView();
            }, []);

            // .click functionality does not seem to work
            browser.execute(function() {
                document.querySelector('#summary-footer > a').click()
            });
    },

    'Model S - Order Page' : function (browser) {
        browser
            .assert.urlEquals('https://www.tesla.com/order')
            .assert.title('Order or Save Design | Tesla')

            // Click Cash
            .waitForElementVisible('//*[@id="edit-order-type"]/div[3]/label/div')
            .click('//*[@id="edit-order-type"]/div[3]/label/div')

            // Fill in form
            .waitForElementVisible('//*[@id="edit-firstname"]')
            .setValue('//*[@id="edit-firstname"]', 'Bart')

            .waitForElementVisible('//*[@id="edit-lastname"]')
            .setValue('//*[@id="edit-lastname"]', 'Takuski')

            .waitForElementVisible('//*[@id="edit-usermail"]')
            .setValue('//*[@id="edit-usermail"]', 'btakuski@gmail.com')

            .waitForElementVisible('//*[@id="edit-confirm-mail"]')
            .setValue('//*[@id="edit-confirm-mail"]', 'btakuski@gmail.com')

            .waitForElementVisible('//*[@id="edit-phonenumber"]')
            .setValue('//*[@id="edit-phonenumber"]', '3128132690')

/*            .waitForElementVisible('')
            .setValue('')*/


    }

};