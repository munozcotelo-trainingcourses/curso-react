import React from "react";
// import logo  from "./logo.svg";

import './App.css';

import CabeceraComponent from "./components/CabeceraComponent.class";
import ListaComponent    from "./components/ListaComponent";

interface IAppComponentProps {
}

// const AppComponent : ( props : IAppComponentProps ) => React.ReactElement = ( props : IAppComponentProps ) => {
//   return (
//       <h1>Hola mundo soy Alvaro</h1>
//   );
// }


type MyStateType = {

    counter : number;
    random1 : number;
    random2 : number;

};

class AppComponent extends React.Component<IAppComponentProps, MyStateType> {

    public state: MyStateType = {

        counter  : 0,
        random1  : 0,
        random2  : 0,

    };

    public constructor( props: IAppComponentProps ) {

        super( props );

        this.state = {

            counter : 0,
            random1 : 0,
            random2 : 0,

        };

    }

    public componentDidMount() : void {

        console.info( "Estoy en componentDidMount" );

        const me : AppComponent = this;

        setInterval( () => {

            me.setState( {

                random1 : Math.random(),
                random2 : Math.random(),

            } );

        }, 5000 );

        setInterval( () => {

            me.setState( ( currentState : MyStateType, props : IAppComponentProps ) => {

                return {
                    counter : currentState.counter + 5,
                };

            } );

        }, 5000 );

    }

    public componentDidUpdate() : void {
        console.info( "Estoy en componentDidUpdate" );
    }

    public componentWillUnmount() : void {
        console.info( "Estoy en componentWillUnmount" );
    }

    public render(): React.ReactNode {

        const me: AppComponent = this;

        console.info( "Estoy en render" );

        return (
            <div>
                <CabeceraComponent
                    contenido="Hola mundo soy Alvaro"
                    tiempo={ me.state.counter }
                />

                <div>
                    <p>Valor aleatorio : { me.state.random1 }</p>
                    <p>Contador : { me.state.counter } segundos </p>
                </div>

                <ListaComponent/>

            </div>

        );

    }

}

export default AppComponent;
