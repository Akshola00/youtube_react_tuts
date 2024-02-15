// using state in react, state : object that is privately maintainwed inside the component, can be change within the component
import React, { Component } from "react";

class Message extends Component {
    constructor(){
        super() 
        this.state = {
            message : 'welcome visitor'
        }
    }
    changeMessage(){
        this.setState({
            message: 'thank you for subscribing'
        })
    }
    render(){
        return(
            <>
            <h1>{this.state.message}</h1>
            <button onClick={()=>{
                this.changeMessage()
            }}>subscribe</button>
            </>
        )
    }
}

export default Message