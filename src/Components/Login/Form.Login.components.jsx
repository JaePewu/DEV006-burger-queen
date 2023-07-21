/* eslint-disable no-unused-vars */
import * as React from 'react';

function Form(){
return (
    <div className='bg-white px-10 pb-20 rounded-3xl border-2 w-full mx-10'>

        <div>
            <img src="/3.png" alt="Logo Burger Queen" className='block lg:hidden h-2/4 mx-auto'/>
            <img src="/Burger-Queen.png" alt="Burger Queen" className='hidden lg:block'/>
        </div>

        <div className='mt-10'>
            <div>
                <label className='text-2xl font-large ml-5'>Ingrese usuario</label>
                <input
                    className='focus:outline-none focus:border-rose-500 w-full border-2 border-amber-500 rounded-full p-4 mt-1 h-20 font-judson'
                    placeholder='nombre@xxx.xxx'
                    type='text'
                />
            </div>

            <div className='mt-7'>
                <label className='text-2xl font-large ml-5'>Ingrese contraseña</label>
                <input
                    className='focus:outline-none focus:border-rose-500 w-full border-2 border-amber-500 rounded-full p-4 mt-1 h-20 font-judson'
                    placeholder='contraseña'
                    type='password'
                />
            </div>

            <div className='mt-10 flex justify-center item-center '>
                <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out text-3xl bg-cyan-700 text-white w-full p-4 h-20 rounded-full font-lobster'>Iniciar sesión</button>
            </div>

            <div className='mx-auto w-3/6 items-center'> 
                <p className='text-xl mt-4 flex text-center items-center justify-center font-judson'>Si no estas registrado, avisar a administración</p>
            </div>
        </div>
    </div>
)
}

function Logo() {

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

export { Logo, Form}