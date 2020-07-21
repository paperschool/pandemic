import React, { FunctionComponent, useState, useContext } from "react";
import Slider from "../../Slider";

import pandemicStore from "../../../state/PandemicState/store";
import { setPopulation } from "../../../state/PandemicState/actions";
import {
    getPopulation,
} from "../../../state/PandemicState/selectors";

import {
    populationControls
} from "./index.scss";

const PopulationControls: FunctionComponent = () => {

    const { state, dispatch } = useContext(pandemicStore);

    return (<div className={populationControls}>
        <h6>Population Controls</h6>
        <p>Control details about the current population</p>
        <Slider
            title={"Population Size"}
            min={10}
            max={1000}
            step={1}
            value={getPopulation(state)}
            onChange={value => setPopulation(dispatch, value)}
        />
    </div>)
}

export default PopulationControls;