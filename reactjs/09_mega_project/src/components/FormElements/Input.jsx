import React, { forwardRef, useId, useRef } from 'react'
import { Form } from 'react-bootstrap'

const Input = forwardRef(({ label, type = "text", ...props }, ref) => {
    const inputId = useId();
    // console.log("input id: ", inputId);

    return (
        <>
            <Form.Group className="mt-3">
                {label && <Form.Label htmlFor={inputId} className='fw-bold' style={{ fontSize: '20px' }}>{label}</Form.Label>}
                <Form.Control
                    type={type}
                    id={inputId}
                    {...props}
                    ref={ref}
                />
            </Form.Group>
        </>
    )
})

// const Input = ({ label, type = "text", ...props }) => {

//     const inputId = useId();
//     // console.log("input id: ", inputId);

//     // const inputRef = useRef()

//     return (
//         <>
//             <Form.Group className="mb-3">
//                 {label && <Form.Label htmlFor={inputId} className='fw-bold' style={{ fontSize: '20px' }}>{label}</Form.Label>}
//                 <Form.Control
//                     type={type}
//                     id={inputId}
//                     // ref={parentRef}
//                     // onChange={handleChange}
//                     {...props}
//                 />
//             </Form.Group>
//         </>
//     )
// }

export default Input