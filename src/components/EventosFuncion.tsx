import React from "react";

const EventosFunction : ( props : unknown ) => React.ReactElement = ( props : unknown ) => {

    function handleClick( event: React.SyntheticEvent ) {

        console.info( "handleClick" );
        console.info( "event", event );

        event.preventDefault();

    }

    function handleClickConArgs( data: number, event: React.SyntheticEvent ) {

        console.info( "handleClickConArgs" );
        console.info( "data", data );
        console.info( "event", event );

        event.preventDefault();

    }

    return (

        <div>

            <p>Eventos en componente de funcion</p>

            <button onClick={ handleClick }>Click sin argumentos</button>
            <button onClick={ ( event : React.SyntheticEvent) => handleClickConArgs(100, event) }>Click con argumentos</button>
        </div>

    );

}

export default EventosFunction;
