import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "shola",
    };
    console.log("LifecycleA constructor");
  }
  static getDerviedStateFromProps(props, state) {
    console.log("lifecycle derived state from props");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleA compnenet did mount");
  }
  render() {
    console.log("life cycle a render");
    return <div>Lifecycle A from the render div  <LifecycleB/> </div>;
  }
}

export default LifecycleA;
