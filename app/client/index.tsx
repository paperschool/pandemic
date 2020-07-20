import * as React from "react";
import * as ReactDOM from "react-dom";
import appContainerProvider from "../server/documentProvider/appContainerProvider";
import { debugContextDevtool } from 'react-context-devtool';
import Router from "./components/Router";
import "./styles/global.scss";

const appContainerNode = document.getElementById(appContainerProvider())

ReactDOM.render(
    <Router />,
    appContainerNode
);

debugContextDevtool(appContainerNode);