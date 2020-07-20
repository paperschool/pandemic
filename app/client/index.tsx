import * as React from "react";
import * as ReactDOM from "react-dom";
import appContainerProvider from "../server/documentProvider/appContainerProvider";
import "./styles/global.scss";
import Pandemic from "./components/Pandemic";


const appContainerNode = document.getElementById(appContainerProvider())

ReactDOM.render(
    <Pandemic />,
    appContainerNode
);
