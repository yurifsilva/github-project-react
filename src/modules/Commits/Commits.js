import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCommits } from "../../store/actions/CommitsActions";
// import Card from './components/UserCard';

import "../../styles/css/Users.css";

class CommitsComponent extends Component {
    componentDidMount() {
        this.props.addCommits(this.props.match.params.login);
        console.log(this);
    }

    render() {
        const { Commits } = this.props;
        return (
            <section>
                <ul>
                    {Commits.map(Commit => (
                        <li key={Commit.id}>{Commit.commit.message}</li>
                    ))}
                </ul>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    Commits: state.commits
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ addCommits }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommitsComponent);
