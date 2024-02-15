// using normal functions and props
import React from 'react'

// destructuring props inn the paramere
// function Greet({name, heroname}) {
//   return (
//     <div>
//       <h1>Hello {name} aka {heroname} </h1>
//     </div>
//   )
// }


// desctruction in the body
// const Greet = props => {
// const {name, heroname} = props
//   return (
//     <div>
//       <h1>Hello {name} aka {heroname} </h1>
//     </div>
//   )
// }

// normal usage of props
function Greet(props) {
  return (
    <div>
      <h1>Hello {props.name} aka {props.heroname} </h1>
    </div>
  )
}

export default Greet
