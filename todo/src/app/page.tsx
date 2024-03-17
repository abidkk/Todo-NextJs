import React from 'react'
import Form from "@/components/Form"
import GetTodos from '@/components/GetTodos'
const page = () => {
  return (
    <>
    <h1 className='text-center text-4xl font-bold text-orange-500 p-4'>Home Page</h1>

    <Form/>

    <GetTodos/>

    </>
  )
}

export default page