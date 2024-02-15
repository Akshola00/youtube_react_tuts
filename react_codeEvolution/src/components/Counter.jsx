//  using setstate
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  //  never modify the state directly, make use of the setstate component, use setState
  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   // second parameter in the setstate method in the callback value
    //   () => {
    //     console.log("call back value :", this.state.count);
    //   }

    this.setState(prevState => ({
        count: prevState.count + 1
    }))
    // );
  }

  increment5(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }
  render() {
    return (
      <div>
        <h1>Count - {this.state.count} </h1>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          Increment 1
        </button>
        <button
          onClick={() => {
            this.increment5();
          }}
        >
          Increment 5
        </button>
      </div>
    );
  }
}

export default Counter;
