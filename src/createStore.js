import RootReducer from './reducers';
import ReduxThunk from 'redux-thunk';
import {applyMiddleware, createStore} from "redux";

export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const store = createStoreWithMiddleware(RootReducer);
