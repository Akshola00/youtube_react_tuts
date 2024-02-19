import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {

    // using if else to render two diff returns
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Shola</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

// using variable
    // let message 
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Shola</div>
    // }
    // else {
    //     message = <div>Welcome Guest</div>
    // }

    // return (
    //     <div>
    //         <p>{message}</p>
    //     </div>
    // )

// using tenary operator
    // return this.state.isLoggedIn ? (    
    //     <div>Welcome shola</div> 
    // ) : (
    //     <div>Welcome guest</div>
    // )

// using short circuit operator
   return this.state.isLoggedIn && <div>Welcom Shola</div>
  }
}

export default UserGreeting;
