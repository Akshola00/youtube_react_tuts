import React, { Component } from "react";

class Errorboundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      haserror: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      haserror: true,
    };
  }

  componentDidCatch(error, info){
    console.log(error)
    console.log(info)
  }
  render() {
    if (this.state.haserror) {
      return <h1>something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default Errorboundary;
