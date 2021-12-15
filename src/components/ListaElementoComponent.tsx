import React from "react";

interface IListaElementoComponentProps {

    id             : number;
    name           : string;
    completed      : boolean;
    deleteChild   ?: React.ReactNode;
    completeChild ?: React.ReactNode;

}

const ListaElementoComponent : ( props : IListaElementoComponentProps ) => React.ReactElement = ( props : IListaElementoComponentProps ) => {

    return (

        <tr>
            <th>{ props.id }</th>
            <th>{ props.name }</th>
            <th>{ ( props.completed === true ) ? "Sí (completado)" : "No (por completar)" }</th>
            <th>{ ( props.deleteChild !== undefined ) ? props.deleteChild : "None" }</th>
            <th>{ ( props.completeChild !== undefined ) ? props.completeChild : "None" }</th>
        </tr>

    );

}

export default ListaElementoComponent;
