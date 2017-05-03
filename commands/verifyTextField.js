exports.command = function (field, text) {
	this
		.useCss().waitForElementVisible(field, 10000)
		.assert.containsText(field, text);
	return this;
};
