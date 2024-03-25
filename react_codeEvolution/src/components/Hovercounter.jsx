import React, { Component } from 'react'
import withCounter from './withCounter';
class Hovercounter extends Component {
    
  render() {
    const {count, incrementcount} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementcount}> hovered {count} times</h2>
      </div>
    )
  }
}

export default withCounter(Hovercounter, 100);
