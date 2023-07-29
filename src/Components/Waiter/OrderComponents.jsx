/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useState } from 'react';
import LogoBQueen from '/3.png';


function ImgLogo() {
    return (
        <>
            <div className='h-full w-full'>
                <img src={LogoBQueen} alt="Logo burger queen" />
            </div>
        </>
    )
}

function InfoClient() {
    return (
        <>

            <div className=' font-judson text-2xl border-b-2 border-b-[#F67575] w-[90%]'>
                <label htmlFor="">Garzón:</label>
                <input type="text"
                    placeholder='Ingrese Garzón'
                    className='font-judson ml-2 mt-3' />
            </div>

            <div>
                <input
                    className='focus:outline-none focus:border-rose-500 w-full border-2 text-2xl border-[#F5A25D] rounded-full p-4 mt-1 h-1/2 font-judson drop-shadow-md bg-[#FFE1CD] placeholder-gray-500'
                    placeholder='Ingrese cliente'
                    type='text'
                />
            </div>
            <div>
                <input
                    className='focus:outline-none focus:border-rose-500 w-full border-2 text-2xl border-[#F5A25D] rounded-full p-4 mt-1 h-1/2 font-judson drop-shadow-md bg-[#FFE1CD] placeholder-gray-500'
                    placeholder='Ingrese n° Mesa'
                    type='text'
                />
            </div>
        </>
    )
}

function NavPrincipal() {
    const [selectedItem, setSelectedItem] = useState('desayuno'); // Estado para almacenar el ítem seleccionado

    const handleClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <>
            <nav className='flex justify-center my-4'>
                <ul className='flex'>
                    <li className="mr-1">
                        <a
                            className={`bg-white inline-block rounded-t-lg py-2 px-4 text-gray-500 hover:text-black font-judson text-4xl ${selectedItem === 'desayuno' ? 'border-t-4 border-x-4 border-[#389393]' : 'border-b-4 border-b-[#389393]'
                                }`}
                            href="#"
                            onClick={() => handleClick('desayuno')}
                        >
                            Desayuno
                        </a>

                        <a
                            className={`bg-white inline-block rounded-t-lg py-2 px-4 text-gray-500 hover:text-black font-judson ${selectedItem === 'almuerzo' ? 'border-b-white border-t-4 border-x-4 border-[#389393]' : 'border-b-4 border-b-[#389393]'
                                } text-4xl`}
                            href="#"
                            onClick={() => handleClick('almuerzo')}
                        >
                            Almuerzo y cena
                        </a>

                        <a
                            className={`bg-white inline-block rounded-t-lg py-2 px-4  text-gray-500 hover:text-black  font-judson ${selectedItem === 'pedido' ? 'border-b-white border-t-4 border-x-4 border-[#389393]' : 'border-b-4 border-b-[#389393]'
                                } text-4xl`}
                            href="#"
                            onClick={() => handleClick('pedido')}
                        >
                            Pedido Listos
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export { ImgLogo, InfoClient, NavPrincipal };





