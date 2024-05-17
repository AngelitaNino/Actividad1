import { useContext } from "react"
import { PedidoContext } from "../Context/PedidoContext"
import rest from '../Image/menos.png';
import compra from '../Image/comprar.png';
import '../Styles/Pedido.css'


export const Pedidos = () => {


    const { listaPedido, suprimirPedido } = useContext(PedidoContext)

    const calculoTotal = () => {
        return listaPedido.reduce((amount, item) => amount + item.cantidad, 0 ).toFixed(0)
    }

    const handleImpresion = () => {

        window.print()
    }


    return (
        <>
            <div className='container'>
                <header className="Carrito-header">
                    <table class="table table-sm table-hover">
                        <thead>
                        <tr>
                            <th><h6  className="carrito-th">Nombre</h6></th>
                            <th><h6  className="carrito-th">Cantidad</h6></th>
                            <th><h6  className="carrito-th">Eliminar</h6></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            listaPedido.map(Juego => (
                                <tr key={Juego.id}>
                                    <td><h6  className="carrito-td"><p>{Juego.name}</p></h6></td>
                                    <td><h6  className="carrito-td"><p>{Juego.cantidad}</p></h6></td>
                                    <td><h6  className="carrito-td">
                                        <img src={rest} alt="" className="plus-imagen" onClick={()=>suprimirPedido(Juego.id)} />
                                    </h6>
                                    </td>
                                </tr>
                            ))
                        }
                        <th className="carrito-total-text">TOTAL: </th>
                        <td></td>
                        <td></td>
                        <td className="carrito-total-text"> {calculoTotal()}</td>

                        </tbody>
                    </table>

                    <div>
                        <img src={compra} alt="" className="compra-imagen" onClick={handleImpresion} disabled={listaPedido<1} />
                    </div>
                </header>
            </div>
        </>
    )
}
