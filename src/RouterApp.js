import React from 'react';
import { Menu} from "./Components/Menu";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Inventario} from "./Views/Inventario";
import {Pedidos} from "./Views/Pedidos";
import { JuegosProvider} from "./Context/JuegosProvider";
import { PedidoProvider} from "./Context/PedidoProvider";


export const RouterApp = () => {
  return (
    <BrowserRouter>
      <JuegosProvider>
        <PedidoProvider>
        <Menu></Menu>
            <Routes>
              <Route exact path="/Inventario" element={<Inventario/>} />
              <Route exact path="/Pedido" element={<Pedidos/>} />
           </Routes>
          </PedidoProvider>
        </JuegosProvider>
      </BrowserRouter>
  );
};


export default RouterApp