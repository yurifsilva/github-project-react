const INITIAL_STATE = [];
const commitsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_COMMITS":
            state = [
                ...action.payload
            ];
            break;
        default:
            break;
    }
    return state;
}

export default commitsReducer;