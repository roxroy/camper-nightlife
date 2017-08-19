const businesses = [
	{
		id: "me-n-u-food-truck-toronto-2",
		name: "Me.n.u Food Truck",
		image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/qLFeYFIAQO9aFkklYdZmUg/o.jpg",
		url: "https://www.yelp.com/biz/me-n-u-food-truck-toronto-2?adjust_creative=3WNbvQLX nmQb0VmznT_gaQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3WNbvQLXnmQb0VmznT_gaQ",
		review_count: 19,
		rating: 4,
		coordinates: {
			latitude: 43.6485203,
			longitude: -79.3979855
		},
		location: {
			address1: "420 Queen Street W",
			address2: "",
			address3: " ",
			city: "Toronto",
			zip_code: "M5V 2A7",
			country: "CA",
			state: "ON",
			display_address: [
				"420 Queen Street W",
				"Toronto, ON M5V 2A7",
				"Canada"
			]
		},
		phone: "+16479826368",
		display_phone: "+1 647-982-6368",
		distance: 2865.98911565
	},
	{
		id: "tibet-k itchen-toronto",
		name: "Tibet Kitchen",
		image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/-G7Va9-n2PeTshCZ7nydaQ/o.jpg",
		url: "https://www.yelp.com/biz/tibet-kitchen-toronto?adjust_creative=3WNbvQLXnmQb0VmznT_gaQ&utm_campaign=yelp _api_v3&utm_medium=api_v3_business_search&utm_source=3WNbvQLXnmQb0VmznT_gaQ",
		review_count: 139,
		rating: 4.5,
		coordinates : {
			latitude: 43.64017,
			longitude: -79.4396299
		},
		location: {
			address1: "1544 Queen Street W",
			address2: "",
			address3: "",
			city: "Toronto",
			zip_code: "M6R 1A6",
			country: "CA",
			state: "ON",
			display_address: [
				"1544 Queen Street W",
				"Toronto, ON M6R 1A6",
				"Canada"
			]
		},
		phone: "+14169138726",
		display_phone: "+1 416-913-8726",
		distance: 5135.628442929999
	},
	{
		id: "estia-toronto",
		name: "Estia",
		image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/CNSkiHI91rLC4P-mxzUy3g/o.jpg",
		url: "https://www.yelp.com/biz/estia-toronto?adjust_cre ative=3WNbvQLXnmQb0VmznT_gaQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3WNbvQLXnmQb0VmznT_gaQ",
		review_count: 11,
		rating: 4,
		coordinates: {
			latitude: 43.67237,
			longitude: -79.39586
		},
		location: {
			address1: "90 Avenue Road",
			address2: null,
			address3: null,
			city: "Toronto",
			zip_code: "M5R 2H2",
			country: "CA",
			state: "ON",
			display_address: [
				"90 Avenue Road",
				"Toronto, ON M5R 2H2",
				"Canada"
			]
		},
		phone: "+14163674141",
		display_phone: "+1 416 -367-4141",
		distance: 226.73881824880002
	},
	{
		id: "the-halal-guys-toronto",
		name: "The Halal Guys",
		image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/Jpplpjng7H3wyYM14A9bCg/o.jpg",
		url: "https://www.yelp.com/biz/the-halal-guys-t oronto?adjust_creative=3WNbvQLXnmQb0VmznT_gaQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3WNbvQLXnmQb0 VmznT_gaQ",
		review_count: 108,
		rating: 3,
		coordinates: {
			latitude: 43.66524,
			longitude: -79.38453
		},
		location: {
			address1: "563 Yonge Street",
			address2: "",
			address3: null,
			city: "Tor onto",
			zip_code: "M4Y 1Z2",
			country: "CA",
			state: "ON",
			display_address: [
				"563 Yonge Street",
				"Toronto, ON M4Y 1Z2",
				"Can ada"
			]
		},
		phone: "+14169011011",
		display_phone: "+1 416-901-1011",
		distance: 1429.561272336
	},
	{
		id: "cluck-clucks-toronto-2",
		name: "Cluck Clucks",
		image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/xdc4PPBIR_vQqHmrXjdpVQ/o.jpg",
		url: "https://www.yelp.com/biz/cluck-clucks-toronto-2?adjust_creative=3WNbvQLXnmQb0VmznT_gaQ&utm_campaign=yelp_api_v3&utm_med ium=api_v3_business_search&utm_source=3WNbvQLXnmQb0VmznT_gaQ",
		review_count: 144,
		rating: 4.5,
		coordinates: {
			latitude: 43.6498557260377,
			longitude: -79.3661657480043
		},
		location: {
			address1: "222 The Esplanade",
			address2: "",
			address3: "",
			city: "Toronto",
			zip_code: "M5A 4M8",
			country: "CA",
			state: "ON",
			display_address: [
				"222 The Esplanade",
				"Toronto, ON M5A 4M8",
				"Canada"
			]
		},
		phone: "+16477482582",
		display_phone: "+1 647-748-2582",
		distance: 3668.422293984
	},
	{
		id: "ono-poké-bar-toronto",
		name: "'ONO Poké Bar",
		image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/QSVEvOuy_lsyURX3E2p9Ug/258s.jpg",
		url: "https://www.yelp.com/biz/ono-pok%C3%A9-bar-toronto?adjust_creat ive=3WNbvQLXnmQb0VmznT_gaQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3WNbvQLXnmQb0VmznT_gaQ",
		review_count: 22,
		rating: 5,
		coordinates: {
			latitude: 43.63962,
			longitude: -79.41575
		},
		location: {
			address1: "100 Western Battery Road",
			address2: "Unit 2",
			address3: "",
			city: "Toronto ",
			zip_code: "M6K 3S2",
			country: "CA",
			state: "ON",
			display_address: [
				"100 Western Battery Road",
				"Unit 2",
				"Toronto, ON M6K 3S2",
				"Canada"
			]
		},
		phone: "+14167928992",
		display_phone: "+1 416-792-8992",
		distance: 4141.79903334
	},
	{
		id: "kaiju-toronto",
		name: "Kaiju",
		image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/WQvsAGnWJcjUQQH3DMw8gA/o.jpg",
		url: "https://www.yelp.com/biz/kaiju-toronto?adjust_creative=3WNbvQLXnmQb0VmznT_gaQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_b usiness_search&utm_source=3WNbvQLXnmQb0VmznT_gaQ",
		review_count: 339,
		rating: 4.5,
		coordinates: {
			latitude: 43.65931,
			longitude: -79.38256
		},
		location: {
			address1: "384 Yonge Street",
			address2: "Unit 51",
			address3: "",
			city: "Toronto",
			zip_code: "M5B",
			country: "CA",
			state: "ON",
			display_address: [
				"384 Yonge Street",
				"Unit 51",
				"Toronto, ON M5B ",
				"Canada"
			]
		},
		phone: "+16477486338",
		display_phone: "+1 647-748-6338",
		distance: 2012.8697740159998
	}
];

module.exports = {
	businesses
}
