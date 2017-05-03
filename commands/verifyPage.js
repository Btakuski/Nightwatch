exports.command = function (url, pagebody, title) {
	this
		.waitForElementVisible(pagebody, 10000)
		.assert.urlEquals(url)
		.assert.title(title)
	return this;
};