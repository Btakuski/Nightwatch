
module.exports = function (browser) {

	return {

		selectors: {
			pagebody: '//*[@id="page-order"]',
			cash: '//!*[@id="edit-order-type"]/div[3]/label/div',
		},

		text: {
			url: 'https://www.tesla.com/order',
			title: 'Order or Save Design | Tesla',
		}

	};
}