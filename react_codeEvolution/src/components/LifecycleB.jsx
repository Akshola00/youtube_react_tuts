import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "shola",
    };
    console.log("LifecycleB constructor");
  }
  static getDerviedStateFromProps(props, state) {
    console.log("lifecycle b derived state from props");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleB compnenet did mount");
  }
  render() {
    console.log("life cycle b render");
    return <div>Lifecycle A from the render div</div>;
  }
}

export default LifecycleB;
