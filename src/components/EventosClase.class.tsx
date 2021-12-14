import React from "react";

class EventosClase extends React.Component<unknown, Record<string, unknown>> {

    public constructor( props: unknown ) {
        super(props);

        this.handleClickBis = this.handleClickBis.bind( this );

    }

    private handleClick( event: React.SyntheticEvent ) {

        console.info( "handleClick" );
        console.info( "this", this );
        console.info( "event", event );

        event.preventDefault();

    }

    private handleClickBis( event: React.SyntheticEvent ) {

        console.info( "handleClickBis" );
        console.info( "this", this );
        console.info( "event", event );

        event.preventDefault();

    }

    /*
     * Bind pasa el evento como ultimo argumento.
     * Por convenio lo vamos a definir siempre asi
     * De esta forma el metodo sirve para ser usado con :
     * - bind
     * - funciones arraow
     */
    private handleClickConArgs( data: number, event: React.SyntheticEvent ) {

        console.info( "handleClickConArgs" );
        console.info( "this", this );
        console.info( "data", data );
        console.info( "event", event );

        event.preventDefault();

    }

    public render(): React.ReactNode {

        const me: EventosClase = this;
        return (
            <div>

                <p>Eventos en componente de clase</p>

                {/* No hay acceso al this */}
                <button onClick={ me.handleClick }>Sin this</button>

                {/* Hay acceso al this gracias al BIND, que ocurre en esta linea */}
                <button onClick={ me.handleClick.bind( me ) }>Con this - Forma 1</button>

                {/* Hay acceso al this gracias al BIND, que ocurre en el constructor */}
                <button onClick={ me.handleClickBis }>Con this - Forma 2</button>

                {/* Hay acceso al this gracias al BIND, que ocurre en esta linea */}
                {/* Paso de argumentos. Bind automaticamente pasa el evento como ultimo argumento */}
                <button onClick={ me.handleClickConArgs.bind(me, 100) }>Click con argumentos - Forma 2</button>

                {/* Hay acceso al this gracias al ARROW, que ocurre en esta linea */}
                {/* Paso de argumentos. Como Bind pasa automaticamente el evento como ultimo argumento, lo tenemos que pasar */}
                <button onClick={ ( event : React.SyntheticEvent) => me.handleClickConArgs(100, event) }>Click con argumentos - Forma 1</button>

            </div>
        );

    }


}

export default EventosClase;
