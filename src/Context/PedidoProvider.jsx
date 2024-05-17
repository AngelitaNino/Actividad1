import { useReducer, useState } from 'react'
import {PedidoContext} from "./PedidoContext";


const initialState = [];
let contadoresInicial = [0];
export const PedidoProvider = ({ children }) => {

    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[PEDIDO] Agregar Pedido':
                return [...state, action.payload]
            case '[PEDIDO] Eliminar Pedido':
                return state.filter(pedido => pedido.id !== action.payload)
            default:
                return state
        }
    }

    const [listaPedido, dispatch] = useReducer(comprasReducer, initialState);
    const [contadores, setContadores] = useState(contadoresInicial);

    const adicionarPedido = (pedido) => {
        pedido.cantidad = 1
        const action = {
            type: '[PEDIDO] Agregar Pedido',
            payload: pedido
        }

        dispatch(action)
        const nextContadores = contadores.map((c) => {
            return c + 1;
        });
        setContadores(nextContadores);

    }

    const suprimirPedido = (id) => {
        const action = {
            type: '[PEDIDO] Eliminar Pedido',
            payload: id
        }
        dispatch(action)
        const nextContadores = contadores.map((c) => {
            return c - 1;
        });
        setContadores(nextContadores);
    }

    return (

        <PedidoContext.Provider value={{listaPedido, adicionarPedido, suprimirPedido, contadores }}>
            {children}
        </PedidoContext.Provider>
    )
}
