/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react'; // son Hook
// //El código que escribas dentro de useEffect se ejecutará cada vez que el componente se monte, en este caso horizontal y vertical.
// //Permite que los componentes funcionales se comporten de manera similar a los componentes de clase en cuanto a manejo de estado, permite actualizar el estado las veces necesarias

// function BQueen() {
// // 1. Creamos un estado llamado 'isPortrait' que indica si el dispositivo está en orientación vertical (true) o horizontal (false).
//     const [isPortrait, setIsPortrait] = useState(true);

// // 2. Utilizamos useEffect para ejecutar el código cuando el componente se monta y cada vez que cambia la orientación del dispositivo.
//     useEffect(() => {
// // 3. Definimos una función 'handleOrientationChange' que actualiza el estado 'isPortrait' en función de la orientación actual del dispositivo.
//         const handleOrientationChange = () => {
//             setIsPortrait(window.matchMedia('(orientation: portrait)').matches);
//         };
// // 4. Ejecutamos 'handleOrientationChange' cuando el componente se monta inicialmente para establecer el valor inicial de 'isPortrait'.
//         handleOrientationChange();

// // 5. Agregamos un event listener para el evento 'orientationchange', que se disparará cada vez que el dispositivo cambie de orientación.
//         window.addEventListener('orientationchange', handleOrientationChange);

// // 6. Utilizamos el 'return' para limpiar el event listener cuando el componente se desmonte, evitando pérdida de memoria.
//         return () => {
//             window.removeEventListener('orientationchange', handleOrientationChange);
//         };
//     }, []);

// // 7. Calculamos la variable 'bgColor' que determina el color de fondo en función del estado 'isPortrait'.
//     const bgColor = isPortrait ? '#00ff00' : '#ff0000';

//     return (
//         <>
//          {/* 8. Creamos un contenedor div con la clase y estilos necesarios. El color de fondo se ajusta según el valor de 'bgColor'. */}
//             <div className={`bg-[url('fondo.jpg')] bg-no-repeat bg-center bg-cover min-h-screen flex items-center justify-center opacity-80`} style={{ backgroundColor: bgColor }}>
//                 <div>
//                     <img src='3.png' alt='Logo BQ' className="" />
//                 </div>
//             </div>
//         </>
//     );
// }

// export {BQueen};
// import * as React from "react";

import React from 'react';

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

                    <div className='flex justify-center items-center m-7'>
                        <button
                            type="button"
                            className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out text-7xl drop-shadow-md shadow-lg w-[32rem] mt-8 bg-cyan-700 text-white h-20 rounded-full font-lobster text-center'>
                            Entrar
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export { BQueen };
