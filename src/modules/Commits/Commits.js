import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCommits, orderCommitsByName } from "../../store/actions/CommitsActions";
import CommitCard from './components/CommitCard';
import { Link } from 'react-router-dom';
import Infinite from 'react-infinite-loading';

import "../../styles/css/Commits.css";

class CommitsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Page: 1,
            loading: false,
            Filtered: false
        };
    }
    componentDidMount() {
        if (this.props.Commits.length === 0) {
            this.props.addCommits(this.props.match.params.repositorie, this.props.match.params.login);
        }
    }

    handleLoading = () => {
        this.setState({
            Page: this.state.Page + 1,
            loading: true
        })

        this.props.addCommits(this.props.match.params.repositorie, this.props.match.params.login, this.state.Page);

        this.setState({
            loading: false
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({
            Filtered: this.input.value !== ''
        });
        this.props.orderCommitsByName(this.props.Commits, this.input.value);

    };
    render() {
        const { Commits } = this.props;
        const LinkUrl = `/repositories/${this.props.match.params.login}`;
        function CommitRender(props, Filtered) {
            const activeCommit = Filtered && props.Commit && props.Commit.matched;
            const classFunc = `commit-card ${activeCommit ? 'active' : ''}`
            return (
                <li className={classFunc}>
                    <CommitCard key={props.Commit.sha} commit={props.Commit} />
                </li>
            );
        }
        return (
            <section className="commits-component">
                <Link className="navigate-back" to={LinkUrl}>
                    <i className="material-icons">arrow_back</i>
                </Link>
                <form onSubmit={this.handleSubmit}>
                    <input ref={el => (this.input = el)} />
                    <button type="submit">Novo</button>
                </form>
                <Infinite handleLoading={this.handleLoading.bind(this)} loading={this.state.loading}>
                    <ul className={this.state.Filtered ? 'filtered' : ''}>
                        {Commits.map(Commit => (
                            <CommitRender key={Commit.sha} Commit={Commit} Filtered={this.state.Filtered} />

                        ))}
                    </ul>
                </Infinite>

            </section>
        );
    }
}

const mapStateToProps = state => ({
    Commits: state.commits
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ addCommits, orderCommitsByName }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommitsComponent);
