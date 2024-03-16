import React, { Component, PureComponent } from 'react'
import Regularcomponent from './Regularcomponent';
import Purecomponent from './Purecomponent';
import Memocomponent from './Memocomponent';

class PureandRegComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "vishwas"
      }
    }
      componentDidMount() {
        setInterval(() => {
            this.setState({
                name:"vishwas"
            }) 
            
        }, 2000)
      };
    
    
  render() {
    console.log("*********************** Parent Comp Render ***********************")
    return (
      <div>
        parent component
        <Memocomponent name={this.state.name}/>
        {/* <Regularcomponent name={this.state.name} />
        <Purecomponent name={this.state.name} /> */}
      </div>
    )
  }
}

export default PureandRegComp
