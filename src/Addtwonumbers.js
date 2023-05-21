import React, { useState } from 'react';
import { Button, Input } from 'antd';
import axios from "axios";

function Addtwonumbers() {

    // createing two state to store two numbers

    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')

    // creating state to store resultant number

    const [addNumber, setAddNumber] = useState('')

    // handleadd function to fetch the sum whenc click on add
    const handleAdd = async (e) => {
        e.preventDefault()

        try {

            // fetch api using axios

            const result = await axios.post('https://pre-flight-backend.onrender.com/add', { number1, number2 })
            console.log(result)
            setAddNumber(result.data.result);
            console.log(result.data.result)
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <div className='main'>
            <h1>Add Two Numbers</h1>
            <div className='input'>
                {/* Input box to enter number */}
                <Input type='number'
                    value={number1}
                    onChange={(e) => {
                        console.log(e.target.value)
                        setNumber1(e.target.value)
                    }}
                    placeholder='Enter number 1' />
                <Input type='number'
                    value={number2}
                    onChange={(e) => {
                        console.log(e.target.value)
                        setNumber2(e.target.value)
                    }}
                    placeholder='Enter number 2' />

                {/* Button to submit the value */}
                <Button onClick={handleAdd}>Add Number</Button>
            </div>
            <div>
                {/* Display Summ of two numbers */}
                <h3>{addNumber && <p>Result: {addNumber}</p>}</h3>
            </div>
        </div>
    )
}

export default Addtwonumbers