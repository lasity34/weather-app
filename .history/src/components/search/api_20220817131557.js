

export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f70f3e4e3emsh93c97efeb09ac9fp190a5cjsne96c71c731c8',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));