import GithubService from '../../services/GithubService';

export function addUser(login) {
    return async (dispatch) => {
        try {
            const user = await GithubService.getUserByName(login);
            dispatch({
                type: "ADD_USER",
                payload: user
            });
        } catch (error) {
            console.error(error);
        }
    }
}