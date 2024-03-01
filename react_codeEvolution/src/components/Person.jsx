import React from 'react'

function Person({p}) {
  return (
    <div>
       <h2>
      {" "}
      my name is {p.Name} and i am {p.Age} years old{" "}
    </h2>
    </div>
  )
}

export default Person
