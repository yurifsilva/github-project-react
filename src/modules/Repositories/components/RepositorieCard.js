import React from 'react';
import '../../../styles/css/UserCard.css';
import { Link } from "react-router-dom";

class RepositorieCard extends React.Component {
    render() {
        const { repositorie } = this.props;
        return (
            <Link to={`/commits/${repositorie.owner.login}/${repositorie.name}`}>
                <li className="user-card">
                    <p className="user-card-name">{repositorie.name}</p>
                </li>
            </Link>
        )
    }
}
export default RepositorieCard;