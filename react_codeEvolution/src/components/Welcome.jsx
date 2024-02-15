import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (
      <div>
        welcome {this.props.name} aka {this.props.heroname}
      </div>
    )
  }
}

export default Welcome
