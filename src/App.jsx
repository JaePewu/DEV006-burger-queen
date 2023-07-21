import { useState } from 'react'
import Form from './Components/form'


function App() {

  return (
    <>
      <div className='flex w-full h-screen'>
        <div className='w-full flex items-center justify-center lg:w-1/2'>
        <Form></Form>
        </div>

        <div className='hidden lg:flex w-1/2 h-full items-center justify-center bg-white'>
          <img src="/logo-solo-hamburguesa.png" alt="Logo Burger Queen" className='animate-bounce w-2/3'/>

        </div>
      </div>
      
    </>
  )
}





export default App
