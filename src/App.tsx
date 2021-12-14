import React from "react";
// import logo  from "./logo.svg";

import './App.css';

import CabeceraComponent from "./components/CabeceraComponent.class";
import ListaComponent    from "./components/ListaComponent";
import EventosFuncion    from "./components/EventosFuncion";
import EventosClase      from "./components/EventosClase.class";

interface IAppComponentProps {
}

// const AppComponent : ( props : IAppComponentProps ) => React.ReactElement = ( props : IAppComponentProps ) => {
//   return (
//       <h1>Hola mundo soy Alvaro</h1>
//   );
// }

class AppComponent extends React.Component<IAppComponentProps, Record<string, unknown>> {

    public componentDidMount() : void {
        console.info( "Estoy en componentDidMount" );
    }

    public componentDidUpdate() : void {
        console.info( "Estoy en componentDidUpdate" );
    }

    public componentWillUnmount() : void {
        console.info( "Estoy en componentWillUnmount" );
    }

    public render(): React.ReactNode {

        // const me: AppComponent = this;

        console.info( "Estoy en render" );

        return (
            <div>
                <CabeceraComponent
                    contenido="Hola mundo soy Alvaro"
                />

                <ListaComponent/>

                <EventosFuncion/>
                <EventosClase/>

            </div>

        );

    }

}

export default AppComponent;
