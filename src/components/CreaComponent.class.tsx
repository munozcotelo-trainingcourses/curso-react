import React from "react";

interface ICreaComponentProps {

    incremento : number;
    callback   : ( name : string, completed : boolean ) => void;

}

type MyStateType = {

    texto     : string;
    counter   : number;
    completed : boolean;

};

class CreaComponent extends React.Component<ICreaComponentProps, MyStateType> {

    public constructor( props: ICreaComponentProps ) {

        super( props );

        this.state = {

            counter   : 0,
            texto     : "",
            completed : false,

        };

    }

    private handleClick( event : React.SyntheticEvent ) : void {

        const me : CreaComponent = this;

        me.props.callback( me.state.texto, me.state.completed );

    }

    private handleTodoText( event : React.SyntheticEvent ) : void {

        const me : CreaComponent = this;

        me.setState( {
            texto : ( event.target as HTMLInputElement ).value,
        } );

    }

    private handleTodoCompleted( event : React.SyntheticEvent ) : void {

        const me : CreaComponent = this;

        me.setState( {
            completed : ( event.target as HTMLInputElement ).checked,
        } );


    }

    public render(): React.ReactNode {

        const me: CreaComponent = this;

        return (

            <div>

                <h3>Nueva tarea</h3>

                {/*
                <p>Texto : { me.state.texto } </p>
                <p>Completado : { me.state.completed.toString() } </p>
                <p>Counter : { me.state.counter } </p>
                */}

                <p>
                    <label htmlFor="todoText">Texto :</label>
                    <input type="text" name="todoText" value={ me.state.texto } onChange={ ( event : React.SyntheticEvent ) => me.handleTodoText( event ) }/>
                </p>

                <p>
                    <label htmlFor="todoCompleted">Completed? :</label>
                    <input type="checkbox" name="todoCompleted" checked={ me.state.completed } onChange={ ( event : React.SyntheticEvent ) => me.handleTodoCompleted( event ) }/>
                </p>

                <button onClick={ ( event : React.SyntheticEvent ) => me.handleClick( event ) }>Crear</button>

            </div>

        );

    }

}

export default CreaComponent;
