"use client"
import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [course, setCourse] = useState();

    const submitHandler = (e: any) => {
        e.preventDefault();
        console.log(id);
        console.log(name)
        console.log(course)
    }
    return (
        <>
            <div className='p-10 bg-gray-200'>
                <h1>I am a Form</h1>
                <form onSubmit={submitHandler}>
                    <input type="number" placeholder='id' id='id' className='px-4 py-2 ' onChange={e => setId(e.target.value)} value={id} />
                    <input type="text" placeholder='name' id='name' className='px-4 py-2 ' onChange={e => setName(e.target.value)} value={name} />
                    <input type="text" placeholder='course' id='course' className='px-4 py-2 ' onChange={e => setCourse(e.target.value)} value={course} />
                    <button className='px-4 py-2 bg-blue-500 text-cyan-100 ' type='submit' >submit</button>
                </form>
            </div>
        </>
    )
}

export default Form