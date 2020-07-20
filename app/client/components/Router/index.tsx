import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Pandemic from "../Pandemic";
import PandemicStore from "../../state/PandemicState";

import About from "../About";

const Router: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/about' >
                    <About />
                </Route>
                <Route>
                    <PandemicStore><Pandemic /></PandemicStore>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;