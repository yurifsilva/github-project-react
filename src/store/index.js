import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import users from "./reducers/usersReducer";
import repositories from "./reducers/repositoriesReducer";
import commits from "./reducers/commitsReducer";

const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(combineReducers({
    users, repositories, commits
}), {}, middleware);

export default store;
