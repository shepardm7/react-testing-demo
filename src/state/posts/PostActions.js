import axios from 'axios';
import PostTypes from "./PostTypes";

export const fetchPosts = () => async (dispatch) => {
	await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
		.then(res => {
			dispatch({
				type: PostTypes.GET_POSTS,
				payload: res.data
			});
		})
		.catch(err => {
			// console.log(err);
		});
};
