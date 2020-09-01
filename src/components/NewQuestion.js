import React, { Component } from "react";
import { connect } from "react-redux";
import "./NewQuestion.css";

class NewQuestion extends Component {
  state = {
    questionOne: "",
    questionTwo: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.questionOne.length === 0 || this.state.questionTwo === 0) {
      alert("Please write your question");
    } else {
      //todo
    }
  };

  render() {
    return (
      <div className="container">
        <p>Please create your questions in the fields below</p>
        <h2 className="title">Would you rather...</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <input
              className="input"
              type="text-area"
              name="questionOne"
              placeholder="Enter question one"
              value={this.state.questionOne}
              onChange={this.handleChange}
              maxLength="60"
            />
            {this.state.questionOne.length > 40 && (
              <p>{60 - this.state.questionOne.length}</p>
            )}
          </div>
          <span>or...</span>
          <div className="input-container">
            <input
              className="input"
              type="text-area"
              name="questionTwo"
              placeholder="Enter question two"
              value={this.state.questionTwo}
              onChange={this.handleChange}
              maxLength="60"
            />
            {this.state.questionOne.length > 40 && (
              <p>{60 - this.state.questionOne.length}</p>
            )}
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(NewQuestion);
