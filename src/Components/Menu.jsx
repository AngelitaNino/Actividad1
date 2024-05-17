//import { Logo } from '../Components/Logo';
import {Pedido} from "./Pedido";
import {Tienda} from "./Tienda";
import { Buscar } from '../Components/Buscar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { PedidoContext } from "../Context/PedidoContext"
import '../Styles/Menu.css';


export const Menu = () => {

    const { listaPedido } = useContext(PedidoContext);

    return (

        <div className='navbar-wrapper'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-2">
                        <li className="nav-item">
                            <NavLink to='/Inventario' className="nav-link active">Inventario</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/Pedido' className="nav-link active">Ir al Pedido</NavLink>
                        </li>

                        <Tienda/>
                    </ul>
                    <Buscar/>
                    <NavLink to='/Pedido'>
                        <div badgeContent={listaPedido.length} color="secondary">
                        <div color="action" />
                            <Pedido/>
                        </div>
                    </NavLink>
                </div>
            </nav>

        </div>
    )
}