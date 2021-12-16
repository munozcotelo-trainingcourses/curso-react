import React         from "react";
import { Routes }    from "react-router-dom";
import { Route }     from "react-router-dom";
import { NavLink }   from "react-router-dom";
import { Outlet }    from "react-router-dom";
import { useParams } from "react-router-dom";

import AboutComponent   from "./AboutComponent";
import CompanyComponent from "./CompanyComponent";
import ListaComponent   from "./ListaComponent";

interface IRutasComponentProps {
}

const ComponentePadre : ( props : IRutasComponentProps ) => React.ReactElement = ( props : IRutasComponentProps ) => {
    return (
        <div>
            <p>Componente Padre</p>
            <ul>
                <li><NavLink to="/nested/1">Ruta/1</NavLink></li>
                <li><NavLink to="/nested/2">Ruta/2</NavLink></li>
            </ul>
            <Outlet/>
        </div>
    );
}

const ComponenteHijo : ( props : IRutasComponentProps ) => React.ReactElement = ( props : IRutasComponentProps ) => {

    const params : { id : string } = useParams() as { id : string };

    return (
        <p>hijo { params.id } </p>
    );
}

const RutasComponent : ( props : IRutasComponentProps ) => React.ReactElement = ( props : IRutasComponentProps ) => {

    return (

        <React.Fragment>

            <div className="menu">

                <h3>Menu</h3>
                <ul>
                    <li><NavLink to="/todos">Todos</NavLink></li>
                    <li><NavLink to="/nested">Ruta</NavLink></li>
                    {/*
                        <li><NavLink to="/nested/1">Ruta/1</NavLink></li>
                        <li><NavLink to="/nested/2">Ruta/2</NavLink></li>
                    */}
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/about/company">About the Company</NavLink></li>
                </ul>

            </div>

            <div className="contenido">

                <Routes>

                    <Route path="/todos" element = {
                        <ListaComponent/>
                    } />

                    <Route path="/nested" element = {<ComponentePadre/>}>
                        <Route path="/nested/:id" element = { <ComponenteHijo/> } />
                    </Route>

                    <Route path="/about" element = {<AboutComponent/>}>
                        <Route path="/about/company" element = { <CompanyComponent/> } />
                    </Route>

                </Routes>

            </div>

        </React.Fragment>

    );


};

export default RutasComponent;
