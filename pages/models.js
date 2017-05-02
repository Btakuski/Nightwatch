
module.exports = function (browser) {

    return {

        selectors: {
            pagebody: '//*[@id="page-models"]',
            customorder: '//*[@id="page"]/div/div/main/div/div/div/nav/div/div/div/a[2]'
        },

        text: {
            title: "Model S | Tesla",
	        url: 'https://www.tesla.com/models',
        }

    };
}
