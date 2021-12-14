import React from "react";

interface IListaElementoComponentProps {

    id        : number;
    name      : string;
    completed : boolean;

}

const ListaElementoComponent : ( props : IListaElementoComponentProps ) => React.ReactElement = ( props : IListaElementoComponentProps ) => {

    return (

        <tr>
            <th>{ props.id }</th>
            <th>{ props.name }</th>
            <th>{ ( props.completed === true ) ? "Sí (completado)" : "No (por completar)" }</th>
        </tr>

    );

}

export default ListaElementoComponent;
