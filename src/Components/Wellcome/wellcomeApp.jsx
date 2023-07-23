/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

function BQueen() {
// 1. Creamos un estado llamado 'isPortrait' que indica si el dispositivo está en orientación vertical (true) o horizontal (false).
    const [isPortrait, setIsPortrait] = useState(true);

// 2. Utilizamos useEffect para ejecutar el código cuando el componente se monta y cada vez que cambia la orientación del dispositivo.
    useEffect(() => {
// 3. Definimos una función 'handleOrientationChange' que actualiza el estado 'isPortrait' en función de la orientación actual del dispositivo.
        const handleOrientationChange = () => {
            setIsPortrait(window.matchMedia('(orientation: portrait)').matches);
        };
// 4. Ejecutamos 'handleOrientationChange' cuando el componente se monta inicialmente para establecer el valor inicial de 'isPortrait'.
        handleOrientationChange();

// 5. Agregamos un event listener para el evento 'orientationchange', que se disparará cada vez que el dispositivo cambie de orientación.
        window.addEventListener('orientationchange', handleOrientationChange);

// 6. Utilizamos el 'return' para limpiar el event listener cuando el componente se desmonte, evitando pérdida de memoria.
        return () => {
            window.removeEventListener('orientationchange', handleOrientationChange);
        };
    }, []);

// 7. Calculamos la variable 'bgColor' que determina el color de fondo en función del estado 'isPortrait'.
    const bgColor = isPortrait ? '#00ff00' : '#ff0000';

    return (
        <>
         {/* 8. Creamos un contenedor div con la clase y estilos necesarios. El color de fondo se ajusta según el valor de 'bgColor'. */}
            <div className={`bg-[url('fondo.jpg')] bg-no-repeat bg-center bg-cover min-h-screen flex items-center justify-center opacity-80`} style={{ backgroundColor: bgColor }}>
                <div>
                    <img src='3.png' alt='Logo BQ' className="" />
                </div>
            </div>
        </>
    );
}

export {BQueen};
// import * as React from "react";

// function BQueen() {
//     return (
//         <>
//             <div className="bg-[url('fondo.jpg')] bg-no-repeat bg-center bg-cover min-h-screen flex items-center justify-center opacity-80">
//                 <div>
//                     <img src='3.png' alt='Logo BQ' className=""/>
//                 </div>
//             </div>
//             <style>
//                 {`
//             @media (orientation: landscape) {
//                 .bg-[url('fondo.jpg')] {
//                 background-color: #ff0000; /* Color de fondo horizontal */
//                 }
//                 }

//             @media (orientation: portrait) {
//                 .bg-[url('fondo.jpg')] {
//                 background-color: #00ff00; /* Color de fondo vertical */
//                 }
//                 }
//                 `}
//             </style>
//         </>
//     );
// }

// export { BQueen };
