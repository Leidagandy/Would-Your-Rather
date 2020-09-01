import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/autheduser";
import "./Login.css";

class Login extends Component {
  state = {
    value: "users",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   let id="";
  //   const { value } = this.state;
  //   const { users } = this.props;
  //   const userIds = Object.keys(users)
  //   userIds.forEach(userId => {
  //     if (users[userId].name === value) {
  //       id = userId;
  //     }
  //   })

  //   const from =
  //   this.props.location !== undefined && this.props.location.state !== undefined
  //   ? this.props.location.state.from
  //   :"/home";
  //   this.props.dispatch(setAuthedUser(id))
  //   this.props.history.push(`${from}`)
     
  // };

  handleSubmit = (e) => {
		const userID = this.userID.value;
		const { dispatch } = this.props;

		e.preventDefault();

		if (userID !== '') {
			dispatch(setAuthedUser(userID));
		} else {
			this.setState({ errorMsg: 'You must choose a username' });
		}
	};


  render() {
    const { users } = this.props;
    const names = Object.keys(users);
    return (
        <div>
      <div className="login-container">
        <h2>Would You Rather...?</h2>
        <p>Please log in to continue</p>
        <img className="login-img" src="https://image.freepik.com/free-vector/people-avatars-illustrated-concept_23-2148473078.jpg"/>
        <form onSubmit={this.handleSubmit}>
          <select
            className="login-select"
            value={this.state.value}
            onChange={(e) => this.handleChange(e)}
          >
            <option>{this.state.value}</option>
            {names.map((name) => (
              <option key={users[name].id} name={users[name].id} value={users[name].name}>
                {users[name].name}
              </option>
            ))}
          </select>
          <input
            className="login-btn"
            type="submit"
            value="Log In"
            disabled={this.state.value === "users"}
          />
        </form>
      </div>
       
      <p>Avatars from <a href='https://www.freepik.com/vectors/people'>www.freepik.com</a></p>
    </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users,
});
export default (connect(mapStateToProps)(Login));
