"use client"
import React from 'react'

const  GetTodos = async () => {
    const  getTodos  = await fetch('http://localhost:3000/api/todos');
    const data = await getTodos.json();
    console.log(data)
   

  return (
    <>
    <h1 className='text-center text-2xl font-bold p-4'>Manage Todos</h1>
    <div className='p-5'>
        {data.map((todo:any)=>{
            return (
                <>
                <ul className='flex justify-center gap-5 bg-gray-300 p-2 m-2'>
                    <li>{todo.id}</li>
                    <li>{todo.name}</li>
                    <li>{todo.course}</li>
                </ul>
                </>
            )
        })}

    </div>

    </>
  )
}

export default GetTodos