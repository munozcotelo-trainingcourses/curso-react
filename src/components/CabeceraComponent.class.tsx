import React from "react";

interface ICabeceraComponentProps {
    contenido : string;
    tiempo    : number,
}

class CabeceraComponent extends React.Component<ICabeceraComponentProps, Record<string, unknown>> {

    public render(): React.ReactNode {

        const me: CabeceraComponent = this;

        return (
            <h1>{ me.props.contenido } { me.props.tiempo }</h1>
        );

    }


}

export default CabeceraComponent;
