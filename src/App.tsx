import React from "react";
import logo  from "./logo.svg";

import './App.css';

interface IAppComponentProps {
}

const AppComponent : ( props : IAppComponentProps ) => React.ReactElement = ( props : IAppComponentProps ) => {
  return (
      <h1>Hola mundo soy Alvaro</h1>
  );
}

export default AppComponent;
