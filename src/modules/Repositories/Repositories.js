import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addRepositories } from "../../store/actions/RepositoriesActions";
import RepositorieCard from './components/RepositorieCard';

import "../../styles/css/Users.css";

class RepositoriesComponent extends Component {
    componentDidMount() {
        this.props.addRepositories(this.props.match.params.login);
    }

    render() {
        const { Repositories } = this.props;
        return (
            <section className="users-section">
                <ul>
                    {Repositories.map(Repositorie => (
                        <RepositorieCard repositorie={Repositorie} key={Repositorie.id} />
                    ))}
                </ul>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    Repositories: state.repositories
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ addRepositories }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RepositoriesComponent);
