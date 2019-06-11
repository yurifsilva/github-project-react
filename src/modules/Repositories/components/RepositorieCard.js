import React from 'react';
import '../../../styles/css/RepositorieCard.css';
import { Link } from "react-router-dom";

class RepositorieCard extends React.Component {
    render() {
        const { repositorie } = this.props;
        return (
            <li className="repositorie-card">
                <Link to={`/commits/${repositorie.owner.login}/${repositorie.name}`}>
                    <p>{repositorie.name}</p>
                    <div className="infos">
                        <span>Star: {repositorie.stargazers_count}</span>
                        <span>Watchers: {repositorie.watchers_count}</span>
                    </div>
                </Link>
            </li>
        )
    }
}
export default RepositorieCard;