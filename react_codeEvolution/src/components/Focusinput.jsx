import React, { Component } from 'react'

class Focusinput extends Component {
    constructor(props) {
      super(props)
    
      this.componentref = React.createRef()
    }

    clickhandler = () => {
        this.componentref.current.focusinput()
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.componentref} />
        <button onClick={this.clickhandler}>Focus Input</button>
      </div>
    )
  }
}

export default Focusinput
