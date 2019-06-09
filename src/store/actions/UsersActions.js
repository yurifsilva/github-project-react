import GithubService from '../../services/GithubService';

export function addUser(login) {
    return async (dispatch) => {
        try {
            // const user = await GithubService.getUserByName(login);
            dispatch({
                type: "ADD_USER",
                payload: {
                    "login": "yurifsilva",
                    "id": 50469039,
                    "node_id": "MDQ6VXNlcjUwNDY5MDM5",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/50469039?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/yurifsilva",
                    "html_url": "https://github.com/yurifsilva",
                    "followers_url": "https://api.github.com/users/yurifsilva/followers",
                    "following_url": "https://api.github.com/users/yurifsilva/following{/other_user}",
                    "gists_url": "https://api.github.com/users/yurifsilva/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/yurifsilva/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/yurifsilva/subscriptions",
                    "organizations_url": "https://api.github.com/users/yurifsilva/orgs",
                    "repos_url": "https://api.github.com/users/yurifsilva/repos",
                    "events_url": "https://api.github.com/users/yurifsilva/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/yurifsilva/received_events",
                    "type": "User",
                    "site_admin": false,
                    "name": null,
                    "company": null,
                    "blog": "",
                    "location": null,
                    "email": null,
                    "hireable": null,
                    "bio": null,
                    "public_repos": 1,
                    "public_gists": 0,
                    "followers": 0,
                    "following": 0,
                    "created_at": "2019-05-10T00:27:01Z",
                    "updated_at": "2019-06-08T03:56:05Z"
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}