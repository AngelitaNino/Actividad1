import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Buscar.css';

export const Buscar = () => {

    return (
        <div class="buscar-container">
            <form class="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Buscar.." name="Buscar"/>
            </form>
        </div>
    )
}