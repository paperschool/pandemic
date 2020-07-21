import React, { FunctionComponent, useState, useContext } from "react";
import Slider from "../../Slider";
import Acordian from "../../Acordian";
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
        <Acordian
            title={"Population Controls"}
            openInitially={true}
        >
            <p>Control details about the current population</p>
            <Slider
                title={"Population Size"}
                min={2}
                max={1000}
                step={1}
                value={getPopulation(state)}
                onChange={value => setPopulation(dispatch, value)}
            />
        </Acordian>

    </div>)
}

export default PopulationControls;