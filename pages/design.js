
module.exports = function (browser) {

	return {

		selectors: {
			pagebody: '//*[@id="page-models-design"]',
			batteryoption: '//*[@id="options_category_C_BAT"]/div/div[1]',
			driveoption: '//*[@id="options_category_C_MOTOR"]/div[2]/div[1]/div/div/div/div[1]/div[2]',
			nextbutton: '#summary-footer > a'
		},

		text: {
			url: 'https://www.tesla.com/models/design',
			title: "Order a Tesla Model S | Tesla"
		}

	};
}