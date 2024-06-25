import { default as Axios } from "axios";

const axios = Axios.create({
	baseURL:  'https://jsonplaceholder.typicode.com',
	timeout: 10000,
	headers: {
		// 'CSRF-Token': csrfToken
	}
});

const sendGetRequest = (url, params = {}, headers = {}) => {
	return axios.get(url, {
		headers,
		params,
	});
};

export { sendGetRequest };