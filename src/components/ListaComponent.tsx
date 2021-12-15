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

    function completeTodoById( todoId : number ) : void {

        const newTodos : ITodo[] = misTodos.map( ( current : ITodo ) => {

            if ( current.id === todoId ) {
                current.completed = !current.completed;
            }

            return current;

        } );

        setMisTodos( newTodos );

    }

    /* Con tipado */
    const [ misTodos, setMisTodos ] : [ ITodo[], React.Dispatch<ITodo[] >] = React.useState<ITodo[]>( todos );

    React.useEffect( () => {
        console.info( "useEffect que se pinta siempre" );
    } );

    React.useEffect( () => {
        console.info( "useEffect que se pinta SOLO la primera vez" );
    }, [] );

    React.useEffect( () => {
        console.info( "useEffect que se pinta cuando cambia misTodos" );
    }, [ misTodos] );

    return (

        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Completed</th>
                        <th>Delete Action</th>
                        <th>Complete Action</th>
                    </tr>
                </thead>
                    <tbody>
            {

                misTodos.map( ( todo : ITodo ) => {
                    return  (
                        <ListaElementoComponent
                            key={ todo.id }
                            id={ todo.id }
                            name={ todo.name }
                            completed={ todo.completed }
                            deleteChild={ <BotonComponent texto="Delete button" callback={ deleteTodoById.bind( null, todo.id ) } /> }
                            completeChild={ <BotonComponent texto="Complete button" callback={ completeTodoById.bind( null, todo.id ) } /> }

                        />
                    );

                } )

            }
                    </tbody>
            </table>

      </div>
  );

}

export default ListaComponent;
