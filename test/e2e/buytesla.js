module.exports = {
    "Home Page" : function(browser) {
        var index = browser.page.index();

        browser
            .useXpath()
            .url(index.text.url)
	        .verifyPage(index.text.url, index.selectors.pagebody, index.text.title)
			.clickElement(index.selectors.models)
    },

    "Model S Page" : function(browser) {
        var models = browser.page.models();

        browser
            .verifyPage(models.text.url, models.selectors.pagebody, models.text.title)
	        .clickElement(models.selectors.customorder)
    },


	"Design" : function(browser) {
		var design = browser.page.design();

		browser
			.verifyPage(design.text.url, design.selectors.pagebody, design.text.title)
			.clickElement(design.selectors.batteryoption)
			.clickElement(design.selectors.driveoption)
			// .click and commands fail to click on this element, necessary workaround (Chrome)
			.execute(function() {
				document.querySelector('#summary-footer > a').scrollIntoView()
			}, {})
			.execute(function() {
				document.querySelector('#summary-footer > a').click()
			});
	},

   	"Place Order" : function(browser) {
		var order = browser.page.order();

        browser
            .useXpath()
            .verifyPage(order.text.url, order.selectors.pagebody, order.text.title)
            .fillTextField(order.selectors.firstname, order.text.fname)
            .fillTextField(order.selectors.lastname, order.text.lname)
            .fillTextField(order.selectors.email, order.text.email)
            .fillTextField(order.selectors.confirmemail, order.text.email)
            .fillTextField(order.selectors.phonenumber, order.text.phonenumber)
			.fillTextField(order.selectors.fullname, order.text.fullname)
            .fillTextField(order.selectors.ccnumber, order.text.ccnumber)
            .fillTextField(order.selectors.address, order.text.address)
            .fillTextField(order.selectors.cvvcode, order.text.cvvcode)
            .fillTextField(order.selectors.city, order.text.city)
            .fillTextField(order.selectors.zipcode, order.text.zipcode)
	        .clickElement(order.selectors.placeorder)
		    .end();
	},
}