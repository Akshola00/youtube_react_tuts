import React from 'react'

// function FRInupt() {
//   return (
//     <div>
//       <input type="text" name="" id="" />
//     </div>
//   )
// }

const FRInupt = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
}) 

export default FRInupt
