/* eslint-disable no-unused-vars */
import * as React from 'react';
import LogoBQueen from '/3.png';

function Desayuno() {
    return (
        <>
            <div>
                <LogoBQ></LogoBQ>
            </div>
        </>
    )
}

function LogoBQ() {
    return (
        <>
            <div>
                <img
                    src={LogoBQueen}
                    alt="Logo Burger Queen"
                    className=' h-1 mx-auto'
                />
            </div>
        </>
    )
}


export { Desayuno };