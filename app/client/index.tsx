import * as React from "react";
import * as ReactDOM from "react-dom";
import appContainerProvider from "../server/documentProvider/appContainerProvider";
import { debugContextDevtool } from 'react-context-devtool';
import Pandemic from "./components/Pandemic";
import PandemicStore from "./state/PandemicState";
import "./styles/global.scss";

const appContainerNode = document.getElementById(appContainerProvider())

ReactDOM.render(
    <PandemicStore><Pandemic /></PandemicStore>,
    appContainerNode
);

debugContextDevtool(appContainerNode);