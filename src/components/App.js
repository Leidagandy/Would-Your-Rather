import React, { Component } from "react"
import { connect } from "react-redux"
import { handleInitialData } from "../actions/shared"
import "../App.css";
import NewQuestion from "./NewQuestion"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
    
  }
  render() {
  return (
    <div className="App">
      <p>hi</p>
      <NewQuestion />
    </div>
  );
}
}

export default connect()(App);
