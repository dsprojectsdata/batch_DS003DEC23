import React, { forwardRef, useId } from 'react'
import { Form } from "react-bootstrap"

const Select = forwardRef(({ label, selectName = "Select", options = [], ...props }, ref) => {
    const selectId = useId();

    return (
        <Form.Group className="mt-3">
            {label && <Form.Label htmlFor={selectId} className='fw-bold' style={{ fontSize: '20px' }}>
                {label}
            </Form.Label>}
            <Form.Select id={selectId} {...props} ref={ref}>
                <option value={""}>{selectName}</option>
                {options.map((option, index) => <option key={index} value={option.value}>
                    {option.title}
                </option>)}
            </Form.Select>
        </Form.Group>
    )
})

// const Select = ({ label, selectName = "Select", options = [], ...props }) => {

//     const selectId = useId();

//     return (
//         <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
//             {label && <Form.Label htmlFor={selectId} className='fw-bold' style={{ fontSize: '20px' }}>
//                 {label}
//             </Form.Label>}
//             <Form.Select id={selectId} {...props}>
//                 <option>{selectName}</option>
//                 {options.map((option)=> <option value={option.value}>{option.title}</option> )}
//             </Form.Select>
//         </Form.Group>
//     )
// }

export default Select