/* eslint-disable no-unused-vars */
import * as React from 'react';

function Form() {
    return (
        <>
            <section className='bg-white px-10 pb-20 rounded-3xl border-2 w-full mx-10 drop-shadow-md'>
                <div>
                    <img 
                    src="/3.png" 
                    alt="Logo Burger Queen" 
                    className='block lg:hidden h-2/4 mx-auto' 
                    />

                    <img 
                    src="/Burger-Queen.png" 
                    alt="Burger Queen" 
                    className='hidden lg:block' 
                    />
                    
                </div>

                <form className='mt-10'>
                    <div>
                        <label className='text-2xl font-large ml-5'>Ingrese usuario</label>
                        <input
                            className='focus:outline-none focus:border-rose-500 w-full border-2 text-lg border-[#F5A25D] rounded-full p-4 mt-1 h-20 font-judson drop-shadow-md'
                            placeholder='Nombre@XXX.XXX'
                            type='text'
                        />
                    </div>

                    <div className='mt-7'>
                        <label className='text-2xl font-large ml-5'>Ingrese contraseña</label>
                        <input
                            className='focus:outline-none focus:border-rose-500 w-full border-2 text-lg border-[#F5A25D] rounded-full p-4 mt-1 h-20 font-judson drop-shadow-md'
                            placeholder='Contraseña'
                            type='password'
                        />
                    </div>

                    <div className='mt-10 flex justify-center item-center'>
                        <button 
                        className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out text-5xl bg-cyan-700 text-white w-full p-4 h-20 rounded-full font-lobster drop-shadow-md '>Iniciar Sesión</button>
                    </div>
                </form>

                <div className='mx-auto w-3/6 items-center'>
                    <p className='text-lg mt-4 flex text-center items-center justify-center font-judson'>Si no estas registrado, avisar a administración</p>
                </div>
            </section>
        </>
    );
}

function Logo() {

    return (

        <>
            <div className='flex w-full h-screen'>
                <div className='w-full flex items-center justify-center lg:w-1/2'>
                    <Form></Form>
                </div>

                <div className='hidden lg:flex w-1/2 h-full items-center justify-center bg-white'>

                    <img 
                    src="/logo-solo-hamburguesa.png" 
                    alt="Logo Burger Queen" 
                    className='animate-bounce w-3/4 ' 
                    />
                    
                </div>

            </div>

        </>
    )
}

export { Logo };