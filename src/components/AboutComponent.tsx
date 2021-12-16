import React            from "react";
import * as ReactRouter from "react-router-dom";

const AboutComponent : ( props : Record<string, unknown> ) => React.ReactElement = ( props : Record<string, unknown> ) => {

    return (

        <React.Fragment>

            <h2>
                About
            </h2>

            <div>
                Bla bla bla
            </div>

            <ReactRouter.Outlet/>

        </React.Fragment>

    );

}

export default AboutComponent;
