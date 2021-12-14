import React from "react";

import ListaElementoComponent from "./ListaElementoComponent";
import BotonComponent         from "./BotonComponent";

interface IListaComponentProps {
}

interface ITodo {

    id        : number;
    name      : string;
    completed : boolean;
}

const ListaComponent : ( props : IListaComponentProps ) => React.ReactElement = ( props : IListaComponentProps ) => {

    const todos : ITodo[] = [

        { id : 1, name : "Venir a clase", completed : true },
        { id : 2, name : "Leer más", completed : false },
        { id : 3, name : "Hacer más deporte", completed : false },
        { id : 4, name : "Descansar en Navidad", completed : false },

    ];

    function deleteTodoById( todoId : number ) : void {

        const newTodos : ITodo[] = misTodos.filter( ( current : ITodo ) => {

            return current.id !== todoId;

        } );

        setMisTodos( newTodos );

    }

    function changeCounter() : void {

        setCounter( ( currentState : number ) => {
            return currentState + 1;
        } );
    }

    /* Con tipado */
    const [ misTodos, setMisTodos ] : [ ITodo[], React.Dispatch<ITodo[] >] = React.useState<ITodo[]>( todos );

    /* Atencion al tipado ahora es number | ( ( data : number ) => number ) */
    const [ counter, setCounter ] : [ number, React.Dispatch<number | ( ( data : number ) => number )>] = React.useState<number>( 0 );

    /* Atencion al tipado ahora es number | ( ( data : number ) => number ) */
    const [ counterAuto, setCounterAuto ] : [ number, React.Dispatch<number | ( ( data : number ) => number )>] = React.useState<number>( 0 );

    React.useEffect( () => {
        console.info( "useEffect que se pinta siempre" );
    } );

    React.useEffect( () => {
        console.info( "useEffect que se pinta SOLO la primera vez" );

        const theInterval : any = setInterval( () => {
            setCounterAuto( ( currentState : number ) => {
                return currentState + 1;
            } );
        }, 1000 );

        return () => {
            /* Si no hacemos esto React nos mostrara un error */
            console.info( "Cuando el componente se desmonte/muera, el intervalo se cancela" );
            clearInterval( theInterval );
        };

    }, [] );

    React.useEffect( () => {
        console.info( "useEffect que se pinta cuando cambia misTodos o counter" );
    }, [ misTodos, counter ] );

    return (

        <div>

            <div>
                <hr/>
                <p>¿qué pasa si quiero actualizar mi estado con el valor del estado anterior?</p>
                <p>Igual que en los componenentes de clase se tiene que utilizar la funcion de forma asincrona </p>
                <p>Counter: { counter }</p>
                <button onClick={ changeCounter }>Change counter</button>
                <hr/>
                <p>¡¡¡OJO!!! cuando se modifica el estado en un intervalo o timeout. <strong>Hay que limpiarlo</strong></p>
                <p>Auto Counter: { counterAuto }</p>
                <hr/>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Completed</th>
                        <th>Delete Action</th>
                    </tr>
                </thead>
                    <tbody>
            {

                misTodos.map( ( todo : ITodo ) => {
                    return <ListaElementoComponent
                        key={ todo.id }
                        id={ todo.id }
                        name={ todo.name }
                        completed={ todo.completed }
                    >
                        <BotonComponent
                            texto="Delete button"
                        />

                        <button onClick={ ( event : React.SyntheticEvent ) => deleteTodoById( todo.id ) }>Mi delete</button>

                    </ListaElementoComponent>

                } )

            }
                    </tbody>
            </table>

      </div>
  );

}

export default ListaComponent;
