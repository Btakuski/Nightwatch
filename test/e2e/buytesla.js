module.exports = {
    "Verify Home page and click Model S button" : function(browser) {
        var index = browser.page.index();

        browser
            .useXpath()
            .url(index.text.url)
	        .waitForElementVisible(index.selectors.pagebody)
            .assert.title(index.text.title)
            .assert.visible(index.selectors.models)
            .click(index.selectors.models)
    },

    "Verify Design page and click Order button" : function(browser) {
        var models = browser.page.models();

        browser
            .waitForElementVisible(models.selectors.pagebody, 10000)
            .assert.urlEquals(models.text.url)
            .assert.title(models.text.title)
            .click(models.selectors.customorder)
    },


	"Design Model S, click Next" : function(browser) {
		var design = browser.page.design();

		browser
		    .waitForElementVisible(design.selectors.pagebody)
		    .assert.title(design.text.title)

		    .waitForElementVisible(design.selectors.batteryoption)
		    .click(design.selectors.batteryoption)

		    .waitForElementVisible(design.selectors.driveoption)
            .click(design.selectors.driveoption)

		    .waitForElementVisible(design.selectors.nextbutton)
		    .assert.visible(design.selectors.nextbutton)

        // .click isn't working as expected on this element, workaround
            .execute(function() {
                document.getElementsByClassName('bookButton us-ca-done').scrollIntoView();
            }, [])

            .execute(function() {
                document.querySelector('#summary-footer > a').click()
            });
	},

   	"Design Model S, click Next" : function(browser) {
		var order = browser.page.order();

        browser
            .waitForElementVisible(order.selectors.pagebody)
            .assert.urlEquals(order.text.url)
            .assert.title(order.text.title)


            .waitForElementVisible(order.selectors.cash)
            .click(order.selectors.cash)

            // Fill in form
            .waitForElementVisible()
            .setValue('//!*[@id="edit-firstname"]', 'FirstName')
            .assert.containsText('//!*[@id="edit-firstname"]', 'FirstName')

            .waitForElementVisible('//!*[@id="edit-lastname"]')
            .setValue('//!*[@id="edit-lastname"]', 'LastName')
            .assert.containsText('//!*[@id="edit-lastname"]', 'LastName')

            .waitForElementVisible('//!*[@id="edit-usermail"]')
            .setValue('//!*[@id="edit-usermail"]', 'email@email.com')
            .assert.containsText('//!*[@id="edit-usermail"]', 'email@email.com')

            .waitForElementVisible('//!*[@id="edit-confirm-mail"]', 1000)
            .setValue('//!*[@id="edit-confirm-mail"]', 'email@email.com')
            .assert.containsText('//!*[@id="edit-confirm-mail"]', 'email@email.com')

            .waitForElementVisible('//!*[@id="edit-phonenumber"]')
            .setValue('//!*[@id="edit-phonenumber"]', '1234567890')
            .assert.containsText('//!*[@id="edit-phonenumber"]', '1234567890')

	    .end();
	},
}