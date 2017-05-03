exports.command = function (field, text) {
	this
		.waitForElementVisible(field, 10000)
		.setValue(field, text)
	return this;
};