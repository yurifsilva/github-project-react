const INITIAL_STATE = [];
const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_USER":
            state = [
                ...state,
                action.payload
            ];
            break;
        default:
            break;
    }
    return state;
}

export default usersReducer;