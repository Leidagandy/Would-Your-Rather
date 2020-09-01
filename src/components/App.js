import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import "../App.css";
import NewQuestion from "./NewQuestion";
import Login from "./Login";
import Nav from "./Nav";
import Leaderboard from "./Leaderboard";
import Home from "./Home";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <Nav authedUser={this.props.authedUser} />
        <Switch>
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/home" component={Home} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/add" component={NewQuestion} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser, }) => ({
  users, 
  questions, 
  authedUser,
})

export default connect(mapStateToProps)(App);
