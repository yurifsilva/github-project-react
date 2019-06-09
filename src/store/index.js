import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import users from "./reducers/usersReducer";

const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(combineReducers({
    users
}), {}, middleware);

export default store;
