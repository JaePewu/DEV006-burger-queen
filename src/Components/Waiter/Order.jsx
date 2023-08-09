/* eslint-disable no-unused-vars */
import { ImgLogo, InfoClient, NavPrincipal, BtnSendOrder } from './OrderComponents'
import { useState, useEffect } from 'react';
import { foods } from '../../Service/orders';
import { LogOut } from '../LogOut/LogOutComponents';

function Orders() {
    return (
        <>

            <header className='grid grid-cols-4 gap-2 mx-5 my-3 relative'>

                <div className=' col-span-2 space-y-2'>
                    <InfoClient />
                </div>

                <div className='col-span-2 relative'>

                    <div className='float-right z-10'>
                        <LogOut />
                    </div>

                    <div className='mt-[30px] absolute z-0'>
                        <ImgLogo />
                    </div>
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

    //Funcion para seleccionar y agregar productos
    const handleProductClick = (product) => {

        // Generar una identificación única para el producto seleccionado   --- se utiliza para obtener la marca de tiempo actual en milisegundos
        const selectedId = `${product.id}_${Date.now()}`;
        // Crear un nuevo objeto para el producto seleccionado con la identificación única
        const selectedProduct = { ...product, selectedId };

        setNameFood([...nameFood, selectedProduct]);
        setTotalPrice(totalPrice + product.price);
    };

    //Funcion para eliminar productos
    const handleDeleteProduct = (selectedId, price) => {
        const updatedNameFood = nameFood.filter((product) => product.selectedId !== selectedId);
        setNameFood(updatedNameFood);
        setTotalPrice(totalPrice - price);
    };

    function FilterProducts() {
        // Filtrar productos según el valor de selectedItem
        let filteredProducts = [];

        if (selectedItem === 'desayuno') {
            filteredProducts = productsData.filter(product => product.type === 'Desayuno');
        } else if (selectedItem === 'almuerzo') {
            filteredProducts = productsData.filter(product => product.type === 'Almuerzo');
        }

        return (
            <div className='grid grid-cols-2 gap-2 lg:mx-10'>
                {filteredProducts.map(product => (
                    <div className='' key={product.id}>
                        <button
                            onClick={() => handleProductClick(product)}
                            className='border-[#A1D2B5] border-[3px] rounded-[30px] w-[180px] h-[100px] justify-center items-center my-2 mx-4 font-judson text-2xl shadow-lg'
                        >
                            <p className='px-2'>{product.name}</p>
                            <p className='px-2'>$ {product.price}</p>
                        </button>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className='grid grid-cols-2 gap-3 mt-6'>
            {/* Section con la data de productos */}
            <section className='col-span-1'>
                {FilterProducts()}
            </section>

            {/* Div con la calculadora */}
            <div className='col-span-1 font-judson text-2xl border-4 border-[#389393] bg-[#FFE1CD] rounded-[50px] mx-5 flex flex-col lg:mr-20'>
                <h1 className='text-center my-2 text-3xl'>Resumen de pedido</h1>
                <div className='col-span-2 row-span-2 p-1 flex-1' style={{ minHeight: '40vh', maxHeight: '50vh', overflowY: 'auto' }}>
                    <ul className="list-none">
                        {nameFood.length > 10 && (
                            <p className='text-center text-gray-500 mt-1'>
                                ***********
                            </p>
                        )}
                        {nameFood.map((product) => (
                            <li key={`selected_${product.selectedId}`}
                                className='flex justify-between items-center m-2 border-b-2 border-gray-400'>
                                <span>{product.name}</span>
                                <div className='flex items-center'>
                                    <span className='mr-2'>${product.price}</span>
                                    <img
                                        src="/Delete.png"
                                        alt="Borrar"
                                        className='cursor-pointer h-11'
                                        onClick={() => handleDeleteProduct(product.selectedId, product.price)}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                    {nameFood.length > 10 && (
                        <p className='text-center text-gray-500 mt-2'>
                            (Fin de pedido)
                        </p>
                    )}
                </div>
                <aside className='text-center my-2 flex justify-center'>
                    <p className='text-2xl'>Total:</p>
                    <p className='bg-white border-[5px] border-rose-500 rounded-[10px] text-2xl w-1/4 ml-2'>${totalPrice}</p>
                </aside>
            </div>
        </div>
    );
}


export { Orders, ProductsData };