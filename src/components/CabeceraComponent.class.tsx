import React from "react";

interface ICabeceraComponentProps {
    contenido : string;
}

class CabeceraComponent extends React.Component<ICabeceraComponentProps, Record<string, unknown>> {

    public render(): React.ReactNode {

        const me: CabeceraComponent = this;

        return (
            <h1>{ me.props.contenido }</h1>
        );

    }


}

export default CabeceraComponent;
