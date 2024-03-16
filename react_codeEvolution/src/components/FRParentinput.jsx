import React, { Component } from 'react'
import FRInupt from './FRInupt'

class FRParentinput extends Component {
    constructor(props) {
      super(props)
    
      this.inputref = React.createRef()
    }
    clickhandler = () => {
        this.inputref.current.focus()
    }
  render() {
    return (
      <div>
        <FRInupt ref={this.inputref} />
        <button onClick={this.clickhandler}>focus input</button>
      </div>
    )
  }
}

export default FRParentinput
