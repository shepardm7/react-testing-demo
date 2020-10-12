import PostTypes from "./PostTypes";

export default (state=[], action) => {
	switch(action.type) {
		case PostTypes.GET_POSTS:
			return action.payload;
		default:
			return state;
	}
}
