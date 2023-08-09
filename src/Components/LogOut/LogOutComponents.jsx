import { useCallback } from 'react';// es un hook para no recargar la pagina
import { Link } from 'react-router-dom'; //Link para redireccionar a otra página

import CerrarSesion from '/CerrarSesion.png'

function LogOut() {
    

    const handleLogOut = useCallback(() => {
        //useCallback se usa para no recargar la pagina y que se ejecute solo una vez, no se ejecute cada vez que se cambia el estado
        localStorage.removeItem('token');
        localStorage.removeItem('workers');
        console.log('Sesión cerrada');
    }, []);
    console.log(handleLogOut + 'Se Presiono el LogOut');

    return (
        <>
            <Link to="/login" onClick={handleLogOut}>
                <img
                    className='flex  h-20 transition-all hover:scale-110'
                    src={CerrarSesion} alt="" />
            </Link>
        </>
    )
}

export { LogOut };