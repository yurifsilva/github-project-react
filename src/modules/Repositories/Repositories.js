import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addRepositories, orderRepositoriesByName, orderRepositoriesByStar } from "../../store/actions/RepositoriesActions";
import { resetCommits } from "../../store/actions/CommitsActions";
import RepositorieCard from './components/RepositorieCard';
import { Link } from 'react-router-dom';

import '../../styles/css/Repositories.css'


class RepositoriesComponent extends Component {
    componentDidMount() {
        if (this.props.Repositories.length === 0) {
            this.props.addRepositories(this.props.match.params.login);
        }
        this.props.resetCommits();
    }

    sortStar = () => {
        this.props.orderRepositoriesByStar(this.props.Repositories);
    }

    sortName = () => {
        this.props.orderRepositoriesByName(this.props.Repositories);
    }


    render() {
        const { Repositories } = this.props;
        return (
            <section>
                <Link className="navigate-back" to={`/`}>
                    <i className="material-icons">arrow_back</i>
                </Link>
                <div className="repositories-order">
                    <h3>Order by: </h3>
                    <button onClick={this.sortStar}>Star</button>
                    <button onClick={this.sortName}>Name</button>
                </div>
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
    bindActionCreators({ addRepositories, orderRepositoriesByName, orderRepositoriesByStar, resetCommits }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RepositoriesComponent);
