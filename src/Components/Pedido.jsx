import React, { useContext }  from "react";
import { PedidoContext } from "../Context/PedidoContext"
import envios from '../Image/envios.png';
import '../Styles/Pedido.css';

export const Pedido = () => {

    const { contadores } = useContext(PedidoContext)



    return (
        <div>
            <img src={envios} alt="Actividad individual" className="cart-imagen" ></img>
            <span className='badge badge-warning' id='lblCartCount'>{contadores} </span>

        </div>
    )
}