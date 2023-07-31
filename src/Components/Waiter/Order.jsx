/* eslint-disable no-unused-vars */
import { ImgLogo, InfoClient, NavPrincipal } from './OrderComponents'
import { useState, useEffect } from 'react';
import { foods } from '../../Service/orders';

function Orders() {
    return (
        <>
            <header className='grid grid-cols-4 gap-2 mx-5 my-3'>
                <div className=' col-span-2 space-y-2'>
                    <InfoClient />
                </div>

                <div className='col-span-2'>
                    <ImgLogo />
                </div>
            </header>
            <nav>
                <NavPrincipal></NavPrincipal>
            </nav>

        </>
    )
}

//Preguntar por npm install prop-types para buena practica y asi espeficar el tipo de dato.
function ProductsData( {selectedItem} ) {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        foods()
            .then(data => {
                setProductsData(data);
            })
            .catch(error => {
                console.error(error, 'AQUI ESTA EL ERROR*');
            });
    }, []);

    function FilterProducts() {
        // Filtrar productos según el valor de selectedItem
        let filteredProducts = [];

        if (selectedItem === 'desayuno') {
            filteredProducts = productsData.filter(product => product.type === 'Desayuno');
        } else if (selectedItem === 'almuerzo') {
            filteredProducts = productsData.filter(product => product.type === 'Almuerzo');
        }

        return filteredProducts.map(product => (
            <div className='lg:p-5' key={product.id}>
                <button>
                <p className='xxlg:text-3xl'>{product.name}</p>
                <p className='xxlg:text-3xl'>$ {product.price}</p>
                </button>
            </div>
        ));
    }

    return (
        <div className='lg:grid lg:grid-cols-2 lg:gap-4 lg:mt-10'>
            {FilterProducts()}
        </div>
    );
}


export { Orders, ProductsData };