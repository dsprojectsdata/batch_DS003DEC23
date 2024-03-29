import React from 'react'
import { useRef } from 'react';
import Input from './Input';

const ForwardRef = () => {

    const ref = useRef();

    const focus = () => {
        ref.current.select();
        // console.log(ref.current)
    }

    return (
        <div className="App">
            <Input ref={ref} placeholder="my input" defaultValue="1234" />
            {/* <input ref={ref} placeholder="my input" defaultValue="1234" /> */}
            <button onClick={focus}>Focus</button>
        </div>
    )
}

export default ForwardRef