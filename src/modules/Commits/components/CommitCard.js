import React from 'react';
import '../../../styles/css/CommitCard.css';

class CommitCard extends React.Component {
    render() {
        const { commit } = this.props;
        return (
            <div>
                <p>{commit.commit.message}</p>
                <span>Date: {commit.commit.committer.date}</span>
            </div>
        )
    }
}
export default CommitCard;