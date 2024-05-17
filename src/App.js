import React from "react";
import { RouterApp } from "./RouterApp";
import { Footer } from './Components/Footer';
import './App.css';


import {JuegosContext} from "./Context/JuegosContext";

function App() {


    return (

        <div className="App">
            <JuegosContext.Provider>
                <RouterApp></RouterApp>
            </JuegosContext.Provider>
            <Footer/>
        </div>
    );
}
export default App;