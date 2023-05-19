import React, { useState } from 'react';
import { Button, Input } from 'antd';
import axios from "axios";

function Addtwonumbers() {

    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [addNumber, setAddNumber] = useState('')

    const handleAdd = async (e) => {
        e.preventDefault()

        try {
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

                <Button onClick={handleAdd}>Add Number</Button>
            </div>
            <div>
                <h3>{addNumber && <p>Result: {addNumber}</p>}</h3>
            </div>
        </div>
    )
}

export default Addtwonumbers