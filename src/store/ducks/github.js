import { createActions, createReducer } from 'reduxsauce';

//action types e creators
export const { Types, Creators } = createActions({
    addUser: ['login']
})

//reducers handlers
const INITIAL_STATE = [];

const add = (state = INITIAL_STATE, action) => [
    ...state,
    { id: Math.random(), login: action.login }
];

//reducer
export default createReducer(INITIAL_STATE, {
    [Types.ADD_USER]: add
})