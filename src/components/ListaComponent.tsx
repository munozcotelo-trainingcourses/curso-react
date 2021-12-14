import React from "react";

import ListaElementoComponent from "./ListaElementoComponent";

interface IListaComponentProps {
}

interface ITodo {

    id        : number;
    name      : string;
    completed : boolean;
}

const ListaComponent : ( props : IListaComponentProps ) => React.ReactElement = ( props : IListaComponentProps ) => {

    const misTodos : ITodo[] = [

        { id : 1, name : "Venir a clase", completed : true },
        { id : 2, name : "Leer más", completed : false },
        { id : 3, name : "Hacer más deporte", completed : false },
        { id : 4, name : "Descansar en Navidad", completed : false },

    ];

    return (

        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                    <tbody>
            {

                misTodos.map( ( todo : ITodo ) => {
                    return <ListaElementoComponent
                        id={ todo.id }
                        name={ todo.name }
                        completed={ todo.completed }
                    />
                } )

            }
                    </tbody>
            </table>

      </div>
  );

}

export default ListaComponent;
