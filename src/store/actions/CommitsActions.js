import GithubService from '../../services/GithubService';
import { some, unary, partialRight, includes } from "lodash";

export function addCommits(Name, Login, Page) {
    return async (dispatch) => {
        try {
            const commits = await GithubService.getCommitsByName(Name, Login, Page);
            if (commits.length > 0) {
                dispatch({
                    type: "ADD_COMMITS",
                    payload: commits
                });
            }
        } catch (error) {
            console.error(error);
        }
    }
}

export function resetCommits() {
    return (dispatch) => {
        dispatch({
            type: "RESET_COMMITS",
            payload: []
        });
    }
}

export function orderCommitsByName(Commits, SearchText) {
    return (dispatch) => {
        let CommitsFiltered = Commits.map(Commit => {
            const CommitNameSplited = Commit.commit.message.toLowerCase().split(" ");
            let match = some(
                CommitNameSplited,
                unary(partialRight(includes, SearchText.toLowerCase()))
            );
            if (match) {
                Commit.matched = true;
            } else {
                Commit.matched = false;
            }
            return Commit;
        });
        dispatch({
            type: "ORDER_COMMITS_NAME",
            payload: CommitsFiltered
        });
    }
}