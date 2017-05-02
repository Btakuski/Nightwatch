

module.exports = function (browser) {

    return {

        selectors: {
            pagebody: '//*[@id="page-homepage"]',
            models: '//*[@id="tsla-header-main"]/div/div/nav/div[1]/ol/li[1]/a'
        },

        text: {
	        url: 'https://www.tesla.com/',
            title: "Tesla | Premium Electric Sedans and SUVs"
        }

    };
}

