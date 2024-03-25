import React, { Component } from "react";
import withCounter from "./withCounter";

class Clickcounter extends Component {
 
  render() {
    // const { count } = this.state;
    const {count, incrementcount} = this.props
    return (
      <div>
        <button onClick={incrementcount}> {this.props.name} clicked {count} times</button>
      </div>
    );
  }
}

export default withCounter( Clickcounter, 5);
