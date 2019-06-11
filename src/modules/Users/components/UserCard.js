import React from 'react';
import '../../../styles/css/UserCard.css';
import { Redirect, Link } from "react-router-dom";

class UserCard extends React.Component {
    render() {
        console.log(Redirect);
        const { user } = this.props;
        return (
            <li>
                <Link className="user-card" to={`/repositories/${this.props.user.login}`}>
                    <div className="user-card-content">
                        <img className="avatar" src={user.avatar_url} alt={user.name} />
                    </div>
                    <p className="user-card-name">{user.name ? user.name : user.login}</p>
                    <p>Repos: {user.public_repos}</p>
                </Link>
            </li>
        )
    }
}
export default UserCard;