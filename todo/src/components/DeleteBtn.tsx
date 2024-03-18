"use client"
import React from 'react'

const DeleteBtn = (props:any) => {
    
    async function deleteHandle() {
        console.log(props.id)
        await fetch(`http://localhost:3000/api/todos/?id=${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

    return (
        <>
            <button className='text-white bg-red-500 px-4 py-1' onClick={deleteHandle}>Del</button>
        </>
    )

}

export default DeleteBtn