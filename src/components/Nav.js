import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  handleLogout = () => {
    //todo
  };

  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink exact to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </li>
          <li>
            <NavLink to="/add">NewQuestion</NavLink>
          </li>
        </ul>
        {this.props.authedUser && (
          <div>
            <button
              type="button"
              className="logout-btn"
              onClick={this.handleSubmit}
            >
              Log Out
            </button>
          </div>
        )}
      </nav>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(Nav);
