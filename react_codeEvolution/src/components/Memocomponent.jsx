import React from 'react'

function Memocomponent({name}) {
    console.log("Rendering memo component")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(Memocomponent)
