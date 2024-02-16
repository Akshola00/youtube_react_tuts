import React, { Component } from 'react'

class EventBing extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : 'hello'
      }

    //   this.change = this.change.bind(this)
    }
    // change(){
    //     console.log(this)
    //     this.setState({
    //         message:'goodbye'
    //     })
    // }
    change = () => {
        this.setState({
            message:'goodbye'
        })
    }
  render() {
    return (
      <div>
        <div> {this.state.message} </div>
        <button onClick={this.change} >click</button>
      </div>
    )
  }
}

export default EventBing
