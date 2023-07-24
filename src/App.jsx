//import { useState } from 'react'

import { BrowserRouter, Routes ,Route } from "react-router-dom";
import { Login } from './Components/Login/LoginApp'
import { BQueen } from './Components/Wellcome/wellcomeApp'
import { Desayuno } from './Components/Gazon/Orden.components';

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<BQueen/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/pedidos" element={<Desayuno/>} />
        </Routes>
            
    </BrowserRouter>
    </>
  )
}




export default App
