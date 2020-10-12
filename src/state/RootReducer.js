import {combineReducers} from "redux";
import PostReducer from "./posts/PostReducer";

export default combineReducers({
	posts: PostReducer
})
