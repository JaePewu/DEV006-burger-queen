/* eslint-disable no-unused-vars */
import { ImgLogo, InfoClient, NavPrincipal } from './OrderComponents'

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


export { Orders };