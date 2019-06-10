const INITIAL_STATE = [];
const repositoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_REPOSITORIES":
            state = [
                ...action.payload
            ];
            break;
        default:
            break;
    }
    return state;
}

export default repositoriesReducer;