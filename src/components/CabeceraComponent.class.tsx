import React from "react";

interface ICabeceraComponentProps {
}

class CabeceraComponent extends React.Component<ICabeceraComponentProps, Record<string, unknown>> {

    public render(): React.ReactNode {

        return (
            <h1>Hola mundo soy Alvaro (desde Cabecera)</h1>
        );

    }


}

export default CabeceraComponent;
