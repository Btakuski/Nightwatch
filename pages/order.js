
module.exports = function (browser) {

	return {

		selectors: {
			pagebody: '//*[@id="page-order"]',
			firstname: '//*[@id="edit-firstname"]',
			lastname: '//*[@id="edit-lastname"]',
			email: '//*[@id="edit-usermail"]',
			confirmemail: '//*[@id="edit-confirm-mail"]',
			phonenumber: '//*[@id="edit-phonenumber"]',
			fullname: '//*[@id="edit-cc-nameoncard"]',
			ccnumber: '//*[@id="edit-cc-cardnumber"]',
			address: '//*[@id="edit-cc-billingaddress1"]',
			cvvcode: '//*[@id="edit-cc-ccvnumber"]',
			city: '//*[@id="edit-cc-billingcity"]',
			zipcode: '//*[@id="edit-cc-billingzip"]',
			placeorder: '//*[@id="edit-submit"]'
		},

		text: {
			url: 'https://www.tesla.com/order',
			title: 'Order or Save Design | Tesla',
			fname: 'FirstName',
			lname: "LastName",
			email: 'email@email.com',
			phonenumber: '1234567890',
			fullname: 'Fname Lname',
			ccnumber: '123456789012345',
			address: '1234 w main street',
			cvvcode: '123',
			city: 'city',
			zipcode: '123456'
		}

	};
}