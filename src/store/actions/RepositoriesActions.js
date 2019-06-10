import GithubService from '../../services/GithubService';
import repos from './ReposConst';

export function addRepositories(login) {
    return async (dispatch) => {
        try {
            // const repositories = await GithubService.getRepositoriesByName(login);
            dispatch({
                type: "ADD_REPOSITORIES",
                payload: repos.repos
            });
        } catch (error) {
            console.error(error);
        }
    }
}