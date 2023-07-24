/* eslint-disable no-unused-vars */
import * as React from 'react';
import LogoBQueen from '/3.png';

function Desayuno() {
    return (
        <>
            <div>
                <ImgLogo></ImgLogo>
            </div>

            <div>
                <InfoClient></InfoClient>
            </div>

            <nav>
                <NavPrincipal></NavPrincipal>
            </nav>

        </>
    )
}




function ImgLogo() {
    return (
        <>
            <div className='w-2/5'>
                <img src={LogoBQueen} alt="Logo burger queen" />
            </div>
        </>
    )
}

function InfoClient() {
    return (
        <>

            <div>
                <label htmlFor="">Garzón:</label>
                <input type="text" />
            </div>

            <div>
                <input
                    className='focus:outline-none focus:border-rose-500 w-2/3 border-2 text-lg border-[#F5A25D] rounded-full p-4 mt-1 h-1/2 font-judson drop-shadow-md'
                    placeholder='Nombre del cliente'
                    type='text'
                />

                <input
                    className='focus:outline-none focus:border-rose-500 w-2/3 border-2 text-lg border-[#F5A25D] rounded-full p-4 mt-1 h-1/2 font-judson drop-shadow-md'
                    placeholder='Ingrese n° Mesa'
                    type='text'
                />
            </div>
        </>
    )
}

function NavPrincipal() {
    return (
        <>
            <ul class="flex">
                <li class="-mb-px mr-1">
                    <a class="bg-white inline-block border-l-2 border-t-2 border-r-2 border-b-white border-[#389393] rounded-lg py-2 px-4 text-black font-judson text-4xl " href="#">Desayuno</a>
                </li>
                <li class="mr-1">
                    <a class="bg-white inline-block py-2 px-4 text-black hover:text-blue-800 font-judson border-b-2 border-[#389393]  text-4xl" href="#">Almuerzo y cena</a>
                </li>
                <li class="mr-1">
                    <a class="bg-white inline-block py-2 px-4 text-black hover:text-blue-800 font-judson border-b-2 border-[#389393] text-4xl " href="#">Pedido Listos</a>
                </li>

            </ul>
        </>
    )
}

export { Desayuno };





