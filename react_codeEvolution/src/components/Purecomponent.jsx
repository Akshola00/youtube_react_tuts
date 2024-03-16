import React, { Component } from 'react'

export class Purecomponent extends Component {
  render() {
    console.log("******pure component render")
    return (
      <div>
        pure component {this.props.name}
      </div>
    )
  }
}

export default Purecomponent

