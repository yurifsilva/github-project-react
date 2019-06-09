import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addUser } from "../../store/actions/UsersActions";

// import GithubService from './../services/GithubService';

import "../../styles/css/Users.css";

class TodoList extends Component {
  componentDidMount() {
    this.props.addUser('yurifsilva');
  }

  handleSubmit = async e => {
    e.preventDefault();

    this.props.addUser(this.input.value);

    this.input.value = "";
  };

  render() {
    const { Users } = this.props;
    return (
      <section className="users-section">
        <form onSubmit={this.handleSubmit}>
          <input ref={el => (this.input = el)} />
          <button type="submit">Novo</button>
        </form>

        <ul>
          {Users.map(todo => (
            <li key={todo.id}>
              {todo.complete ? <s>{todo.login}</s> : todo.login}
              <div>

              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  Users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
