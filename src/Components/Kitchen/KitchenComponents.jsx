import * as React from 'react';
import { ImgLogo } from '../Waiter/OrderComponents';
import { LogOut } from '../LogOut/LogOutComponents';
import { ordersKitchen } from '../../Service/kitchen';


function KitchenView() {
    return (
        <>  
         <header className='flex'> 
            <div className='flex-initial ml-40'>
            <ImgLogo />
            </div>

            <div className='flex-none ml-20 mt-5'>  
                
                <LogOut />
            </div>
        </header>

            <main>
                <NavKitchen />
            </main>
        </>
    )
}


function NavKitchen() {
    const [clientOrder, setClientOrder] = useState([]);

    useEffect(() => {
        ordersKitchen()
            .then(orders => {
                setOrdersDetails(orders);
            })
            .catch(error => {
                console.error('Error al obtener órdenes:', error);
            });
    }, []);
    
    return (
        <>
            <nav className=' my-10 mx-10 h-full border-b-4 border-[#F5A25D]'>
                <ul className='flex'>
                    <li className="mr-1">
                        <a
                            className='bg-white inline-block rounded-t-lg py-2 px-4 text-black font-judson text-4xl border-x-4 border-t-4 border-[#F5A25D]'
                            href="#"
                        >

                            Lista de ordenes
                        </a>

                    </li>
                </ul>
            </nav>


            <main className='flex border-4 border-[#F5A25D] bg-[#A1D2B5] rounded-[50px] mx-5 h-1/5 p-10'>
               <ordersKitchen/>
            </main>
            </>
    )
}

export { KitchenView }