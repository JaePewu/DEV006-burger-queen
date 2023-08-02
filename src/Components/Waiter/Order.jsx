/* eslint-disable no-unused-vars */
import { ImgLogo, InfoClient, NavPrincipal, BtnSendOrder } from './OrderComponents'
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
                <NavPrincipal />
            </nav>

            <footer className='flex justify-center'>
                <BtnSendOrder />
            </footer>

        </>
    )
}

//Preguntar por npm install prop-types para buena practica y asi espeficar el tipo de dato.
// eslint-disable-next-line react/prop-types
function ProductsData({ selectedItem }) {
    const [productsData, setProductsData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [nameFood, setNameFood] = useState([]);

    useEffect(() => {
        foods()
            .then(data => {
                setProductsData(data);
            })
            .catch(error => {
                console.error(error, 'AQUI ESTA EL ERROR*');
            });
    }, []);

    const handleProductClick = (product) => {
        // Generar una identificación única para el producto seleccionado   --- se utiliza para obtener la marca de tiempo actual en milisegundos
        const selectedId = `${product.id}_${Date.now()}`;
        // Crear un nuevo objeto para el producto seleccionado con la identificación única
        const selectedProduct = { ...product, selectedId };

        setNameFood([...nameFood, selectedProduct]);
        setTotalPrice(totalPrice + product.price);
    }

    function FilterProducts() {
        // Filtrar productos según el valor de selectedItem
        let filteredProducts = [];

        if (selectedItem === 'desayuno') {
            filteredProducts = productsData.filter(product => product.type === 'Desayuno');
        } else if (selectedItem === 'almuerzo') {
            filteredProducts = productsData.filter(product => product.type === 'Almuerzo');
        }

        return filteredProducts.map(product => (
            <div className='' key={product.id}>
                <button
                    onClick={() => handleProductClick(product)}
                    className='border-[#A1D2B5] border-[3px] rounded-[50px] w-[250px] h-[130px] justify-center my-3 mx-5 font-judson text-2xl p-2 shadow-lg'>
                    <p className=''>{product.name}</p>
                    <p className=''>$ {product.price}</p>
                </button>
            </div>
        ));
    }

    return (
        <div className=''>
            <aside>
                {FilterProducts()}
            </aside>

            <div className='font-judson text-2xl border-2 border-rose-500 bg-[#FFE1CD] rounded-[50px] mx-5'>
                <div >
                    <h1 className='text-center my-2'
                    >Resumen de pedido</h1>
                    {nameFood.map((product) => (
                        <li 
                         key={`selected_${product.selectedId}`}> {/* Usar la identificación única como clave */}
                            {product.name} - ${product.price}
                        </li>
                    ))}
                </div>

                <aside className='text-center my-2'
                > Total: ${totalPrice} </aside>
            </div>
        </div>
    );
}


export { Orders, ProductsData };