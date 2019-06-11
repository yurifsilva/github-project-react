import GithubService from '../../services/GithubService';
import { orderBy } from "lodash";

export function addRepositories(login) {
    return async (dispatch) => {
        try {
            const repositories = await GithubService.getRepositoriesByName(login);
            dispatch({
                type: "ADD_REPOSITORIES",
                payload: repositories
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export function orderRepositoriesByStar(Repositories) {
    return async (dispatch) => {
        const RepositoriesSorted = orderBy(
            Repositories,
            ["stargazers_count"],
            ["desc"]
        );
        dispatch({
            type: "ORDER_REPOSITORIES_STAR",
            payload: RepositoriesSorted
        });
    }
}

export function orderRepositoriesByName(Repositories) {
    return async (dispatch) => {
        const RepositoriesSorted = orderBy(
            Repositories,
            ["name"],
            ["asc"]
        );
        dispatch({
            type: "ORDER_REPOSITORIES_NAME",
            payload: RepositoriesSorted
        });
    }
}

export function resetRepositories() {
    return (dispatch) => {
        dispatch({
            type: "RESET_REPOSITORIES",
            payload: []
        });
    }
}