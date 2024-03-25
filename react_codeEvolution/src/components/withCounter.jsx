import React from "react";

const withCounter = (WrappedComponent, incrementnumber) => {
    class withCounter extends React.Component  {
        constructor(props) {
            super(props);
        
            this.state = {
              count: 0,
            };
          }
          incrementcount = () => {
            this.setState((prevstate) => {
              return { count: prevstate.count + incrementnumber };
            });
          };
        render () {
            return <WrappedComponent count={this.state.count} incrementcount={this.incrementcount} {...this.props} />
        }
    }
    return withCounter
}

export default withCounter