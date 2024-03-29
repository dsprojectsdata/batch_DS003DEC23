import React from 'react'
import { forwardRef } from 'react'


const Input = forwardRef(({...props}, ref) => {
    return (
        <input ref={ref} {...props} />
    )
})

// const Input = ({ ref, ...props }) => {
//     return (
//         <input ref={ref} {...props} />
//     )
// }

export default Input