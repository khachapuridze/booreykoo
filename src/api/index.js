import axios from 'axios';

// axios.defaults.headers.common["access-control-allow-origin"] = "*";

const Axios = axios.create({
	baseURL: 'https://api.fake.rest/ca2a6662-22d0-4010-ba08-0440ffe813ab/',
});

const request = (url, data) => {
	return Axios(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',

			Accept: 'application/json',
			'Access-Control-Allow-Headers': '*',
		},
		params: data,
	});
};

export default request;
