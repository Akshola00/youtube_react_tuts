import React, { Component } from 'react'

class Regularcomponent extends Component {
  render() {
    console.log("Regular component******")
    return (
      <div>
        regular componenet {this.props.name}
      </div>
    )
  }
}

export default Regularcomponent
