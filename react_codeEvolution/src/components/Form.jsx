import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handlecommentschnage = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handlesubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handlesubmit} action="">
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="">comments</label>
          <textarea
            onChange={this.handlecommentschnage}
            value={this.state.comments}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <label htmlFor="">topic</label>
          <select
            name=""
            id=""
            value={this.state.topic}
            onChange={this.handleTopicChange}
          >
            <option value="react">react</option>
            <option value="angular">angular</option>
            <option value="view">view</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form;
