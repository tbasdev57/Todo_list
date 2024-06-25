import { useEffect } from "react";
import { getPostById } from '../services/posts';

const Api = () => {

	useEffect(() => {
		getPostById(1)
		.then(console.log)
		.catch(console.error);
	}, []);

	return (
		<div>
			<h1>Welcome on Api Page!</h1>
		</div>
	);
};

export default Api;