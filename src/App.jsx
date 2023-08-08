//import { useState } from 'react'

import { BrowserRouter, Routes ,Route } from "react-router-dom";
import { Login } from './Components/Login/LoginApp'
import { BQueen } from './Components/Wellcome/wellcomeApp'
import { Orders } from './Components/Waiter/Order';
import { KitchenView } from "./Components/Kitchen/KitchenComponents";

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<BQueen/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/pedidos" element={<Orders/>} />
          <Route path="/cocina" element={<KitchenView/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}




export default App
