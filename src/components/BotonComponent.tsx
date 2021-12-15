import React from "react";

interface IBotonComponentProps {

    texto    : string;
    callback : () => void;

}

const BotonComponent : ( props : IBotonComponentProps ) => React.ReactElement = ( props : IBotonComponentProps ) => {

    function handleClick( event: React.SyntheticEvent ) {

        props.callback();

        event.preventDefault();

    }

    return (

        <button onClick={ handleClick }>
            { props.texto }
        </button>

    );

}

export default BotonComponent;
