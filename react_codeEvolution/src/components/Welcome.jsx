import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    // destructuring in class components
    const {name, heroname} = this.props
    // const {state1, state2} = this.state
    return (
      <div>
        welcome {name} aka {heroname}
      </div>
    )
  }
}

export default Welcome
