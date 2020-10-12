import moxios from 'moxios';
import {testStore} from "../../utils";
import {fetchPosts} from "../state/posts/PostActions";

describe('fetchPosts action', () => {
	beforeEach(() => {
		moxios.install();
	});
	
	afterEach(() => {
		moxios.uninstall();
	});
	
	it('Store is updated correctly', () => {
		const expectedState = [
			{ id: 1, title: 'Example title 1', body: 'Some Text' },
			{ id: 2, title: 'Example title 2', body: 'Some Text' },
			{ id: 3, title: 'Example title 3', body: 'Some Text' },
		];
		const store = testStore();
		
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: expectedState
			});
		});
		
		return store.dispatch(fetchPosts())
			.then(() => {
				const newState = store.getState();
				expect(newState.posts).toBe(expectedState);
			});
	});
})
