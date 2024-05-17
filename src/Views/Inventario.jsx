import { useContext } from "react"
import {Detalle} from "../Components/Detalle";
import { JuegosContext } from "../Context/JuegosContext"
import { PedidoContext } from "../Context/PedidoContext"


export const Inventario = () => {
    const { Juegos } = useContext( JuegosContext )

    const { adicionarPedido, suprimirPedido } = useContext(PedidoContext)

    const handleAdicionar = (pedido) =>{
        adicionarPedido(pedido)
    }
    const handleSuprimir = (id) =>{
        suprimirPedido(id)
    }

    return (
        <>
            {Juegos.map(Juego => (
                <Detalle
                    key={Juego.id}
                    name={Juego.name}
                    image={Juego.image}
                    description={Juego.description}
                    category={Juego.category}
                    state={Juego.state}
                    year={Juego.year}
                    amount={Juego.amount}
                    handleAdicionar={() => handleAdicionar(Juegos)}
                    handleSuprimir={() => handleSuprimir(Juegos.id)}
                >
                </Detalle>
            ))}

        </>
    )
}

