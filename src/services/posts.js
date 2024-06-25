import { sendGetRequest } from '../lib/axios';

const getPostById = (postId) => {
	return sendGetRequest(`posts/${postId}`);
};

export { getPostById };