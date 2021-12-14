import React from "react";

interface ICreaComponentProps {
    incremento : number;
}

type MyStateType = {

    texto   : string;
    counter : number;

};

class CreaComponent extends React.Component<ICreaComponentProps, MyStateType> {

    public constructor( props: ICreaComponentProps ) {

        super( props );

        this.state = {

            counter : 0,
            texto   : "",

        };

    }

    private handleClick( event : React.SyntheticEvent ) : void {

        const me : CreaComponent = this;

        me.setState( {
            texto : "hola mundo " + Math.random(),
        } );

        me.setState( ( current : MyStateType, props : ICreaComponentProps ) => {

            return {
                counter : current.counter + props.incremento,
            };

        } );

    }

    public render(): React.ReactNode {

        const me: CreaComponent = this;

        return (
            <div>

                <p>Texto : { me.state.texto } </p>
                <p>Counter : { me.state.counter } </p>

                <button onClick={ ( event : React.SyntheticEvent ) => me.handleClick( event ) }>Crear</button>

            </div>

        );

    }

}

export default CreaComponent;
