/* eslint-disable no-unused-vars */
import * as React from 'react';

export default function Form(){
return (
    <div className='bg-white px-10 py-20 rounded-3xl border-2'>
        <h1 className='text-5xl font-lobster'>Logo Burger queen</h1> 
        <div className='mt-8'>
            <div>
                <label className='text-lg font-medium'>Ingrese usuario</label>
                <input
                    className='focus:outline-none focus:border-rose-500 w-full border-2 border-amber-500 rounded-lg p-3 mt-1'
                    placeholder='nombre@xxx.xxx'
                    type='text'
                />
            </div>

            <div className='mt-4'>
                <label className='text-lg font-medium'>Ingrese contraseña</label>
                <input
                    className='focus:outline-none focus:border-rose-500 w-full border-2 border-amber-500 rounded-lg p-3 mt-1'
                    placeholder='contraseña'
                    type='password'
                />
            </div>

            <div className='mt-8 flex justify-center item-center '>
                <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out text-3xl bg-cyan-700 text-white w-full p-3 rounded-lg font-lobster'>Iniciar sesión</button>
            </div>

            <div className='mx-auto w-3/6 items-center '> 
                <p className='text-sm mt-4 flex text-center items-center justify-center font-judson'>Si no estas registrado, avisar a administración</p>
            </div>
        </div>
    </div>
)
}