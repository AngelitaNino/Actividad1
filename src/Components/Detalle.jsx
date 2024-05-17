import { useState } from "react"
import plus from '../Image/plus.png';
import rest from '../Image/menos.png';
import '../Styles/Detalle.css';

export const Detalle = ({ id, name, image, description, category, state, year,amount, handleAdicionar, handleSuprimir }) => {
    const [added, setAdded] = useState(false)

    const clickAdicionar = () => {
        handleAdicionar()
        setAdded(true)
    }
    const clickSuprimir = () => {
        handleSuprimir()
        setAdded(false)
    }

    return (
        <div className="card">

            <div className="card-body">
                <p className="producto-imagen"> <img src={image}/></p>
                <h5 className="card-title">{name}</h5>
                <p className="card-text"><b>Descripcion</b>: {description}</p>
                <p className="card-text"><b>Categoria</b>: {category}</p>
                <p className="card-text"><b>Estado</b>: {state}</p>
                <p className="card-text"><b>Año</b>: {year}</p>
                <p className="card-text"><b>Cantidad</b>: {amount}</p>


                {added
                    ? <p><img src={rest} alt="" className="plus-imagen" onClick={clickSuprimir}/></p>

                    :
                    <p><img src={plus} alt="" className="plus-imagen" onClick={clickAdicionar}/></p>

                }
            </div>
        </div>
    );
}
