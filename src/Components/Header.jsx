
import { Pedido } from "./Pedido"
import { Buscar } from "./Buscar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { PedidoContext } from "../Context/PedidoContext"
import '../Styles/Header.css';


export const Header = () => {

    const { listaCompras } = useContext(PedidoContext);

    return (

        <div className='navbar-wrapper'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-2">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link active" href="#">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/productos' className="nav-link active">Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/carrito' className="nav-link active">Carrito</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/no_encontrada' className="nav-link active">NA</NavLink>
                        </li>
                    </ul>
                    <Buscar/>
                    <NavLink to='/Pedido'>
                        <div badgeContent={listaCompras.length} color="secondary">
                            <div color="action" />
                            <Pedido/>
                        </div>
                    </NavLink>
                </div>
            </nav>

        </div>
    )
}