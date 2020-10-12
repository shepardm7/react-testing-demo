import PostReducer from "./PostReducer";
import PostTypes from "./PostTypes";

describe('Posts Reducer', () => {
	it('Should return default state', () => {
		const newState = PostReducer(undefined, {});
		expect(newState).toEqual([]);
	});
	
	it('Should return new state if receiving type', () => {
		const posts = [{ title: 'Test 1' }, { title: 'Test 2' }, { title: 'Test 3' }]
		const newState = PostReducer(undefined, {
			type: PostTypes.GET_POSTS,
			payload: posts
		});
		expect(newState).toEqual(posts);
	});
});
