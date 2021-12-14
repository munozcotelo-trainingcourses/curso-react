import React from "react";

interface IBotonComponentProps {
    texto : string;
}

const BotonComponent : ( props : IBotonComponentProps ) => React.ReactElement = ( props : IBotonComponentProps ) => {

    function handleClick( event: React.SyntheticEvent ) {

        console.info( "click" );
        console.info( "event", event );

    }

    return (

        <button onClick={ handleClick }>
            { props.texto }
        </button>

    );

}

export default BotonComponent;

