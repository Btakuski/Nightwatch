exports.command = function (element) {
	this
		.waitForElementVisible(element, 10000)
		.assert.visible(element)
		.click(element)
	return this;
};