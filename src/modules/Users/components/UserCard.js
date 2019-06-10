import React from 'react';
import '../../../styles/css/UserCard.css';
import { Redirect, Link } from "react-router-dom";

class UserCard extends React.Component {
    render() {
        console.log(Redirect);
        const { user } = this.props;
        return (
            <Link to={`/repositories/${this.props.user.login}`}>
                <li className="user-card">
                    <div className="user-card-content">
                        <img className="avatar" src={user.avatar_url} alt={user.name} />
                    </div>
                    <p className="user-card-name">{user.login}</p>
                    <p>Repos: {user.public_repos}</p>
                </li>
            </Link>
        )
    }
}
export default UserCard;