exports.command = function (element) {
	this
		.useCss()
		.waitForElementVisible(element, 10000)
		.assert.visible(element)
		.execute(function() {
			document.querySelector(element).scrollIntoView()
		}, {})
		.execute(function() {
			document.querySelector(element).click()
		});
	return this;
};