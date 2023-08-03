import React from 'react';
import { Link } from 'react-router-dom';



function BQueen() {
    return (
        <>

            <style>
                {`
          /* Fondo vertical solo en orientación vertical */
            @media (orientation: portrait) {
            .bg-vertical {
                background-image: url('fondo.jpg');
            }
            }

          /* Fondo horizontal solo en orientación horizontal */
            @media (orientation: landscape) {
            .bg-horizontal {
                background-image: url('fondoVertical.jpg');
            }
            }
        `}
            </style>

            <section className="bg-no-repeat bg-center bg-cover min-h-screen flex items-center justify-center opacity-80 bg-vertical bg-horizontal m-0">
                <div className="flex flex-col items-center ">
                    <div>
                        {/* Imagen con tamaño diferente en orientación horizontal */}
                        <img
                            src="3.png"
                            alt="Logo BQ"
                            className="w-5/6 mx-auto lg:w-3/5" // Ancho 5/6 en orientación vertical, ancho 1/4 en orientación horizontal
                        />

                        {/* Imagen con tamaño diferente en orientación horizontal */}
                        <img
                            src="Lili-Jae.png"
                            alt="Octocat Lili y Jae"
                            className="w-2/4 mx-auto lg:w-1/4 mt-4 drop-shadow-xl " // Ancho 2/4 en orientación vertical, ancho 1/4 en orientación horizontal
                        />
                    </div>

                    <div>
                        <ButtonEnter></ButtonEnter>
                    </div>


                </div>
            </section>
        </>
    );
}


function ButtonEnter() {
    return (
        <>
            <div className='flex justify-center items-center m-7'>
                <Link to='/login'>
                    <button
                        id='btnEntrar'
                        type="button"
                        className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out text-7xl drop-shadow-md shadow-lg w-[32rem] mt-8 bg-cyan-700 text-white h-20 rounded-full font-lobster text-center'>
                        Entrar
                    </button>
                </Link>
            </div>
        </>
    )
}


export { BQueen };
