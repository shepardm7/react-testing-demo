import ReduxThunk from 'redux-thunk';
import {applyMiddleware, createStore} from "redux";
import RootReducer from "./RootReducer";

export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(RootReducer);
