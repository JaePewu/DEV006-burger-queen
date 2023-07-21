import { useState } from 'react'
import Form from './Components/form'


function App() {

  return (
    <>
      <div className='flex w-full h-screen'>
        <div className='w-full flex items-center justify-center lg:w-1/2'>
        <Form></Form>
        </div>

        <div className='hidden lg:flex w-1/2 h-full items-center justify-center bg-gray-200'>
          <div className='animate-bounce'>Logo</div>

        </div>
      </div>
      
    </>
  )
}





export default App
