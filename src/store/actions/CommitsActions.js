import GithubService from '../../services/GithubService';
import COMMITS from './CommitsConst';

export function addCommits(Name, Login) {
    return async (dispatch) => {
        try {
            // const commits = await GithubService.getCommitsByName(Name, Login);
            dispatch({
                type: "ADD_COMMITS",
                payload: COMMITS.commits
            });
        } catch (error) {
            console.error(error);
        }
    }
}