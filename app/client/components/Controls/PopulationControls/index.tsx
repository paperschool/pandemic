import React, { FunctionComponent, useState, useContext } from "react";
import Slider from "../../Slider";

import pandemicStore from "../../../state/PandemicState/store";
import { setPopulation, setPersonRadius, setInfectionRadius, setAvoidanceRadius, setSickSpeed, setHealthySpeeed } from "../../../state/PandemicState/actions";
import {
    getPopulation,
    getPersonRadius,
    getPersonInfectionRadius,
    getPersonAvoidanceRadius,
    getPersonSickSpeed,
    getPersonHealthySpeed
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
        <Slider
            title={"Person Radius"}
            min={1}
            max={50}
            step={1}
            value={getPersonRadius(state)}
            onChange={value => setPersonRadius(dispatch, value)}
        />
        <Slider
            title={"Healthy Person Speed"}
            min={1}
            max={100}
            step={1}
            value={getPersonHealthySpeed(state)}
            onChange={value => setHealthySpeeed(dispatch, value)}
        />
        <Slider
            title={"Sick Person Speed"}
            min={1}
            max={100}
            step={1}
            value={getPersonSickSpeed(state)}
            onChange={value => setSickSpeed(dispatch, value)}
        />
        <Slider
            title={"Infection Radius"}
            min={1}
            max={100}
            step={1}
            value={getPersonInfectionRadius(state)}
            onChange={value => setInfectionRadius(dispatch, value)}
        />
        <Slider
            title={"Avoidance Radius"}
            min={1}
            max={100}
            step={1}
            value={getPersonAvoidanceRadius(state)}
            onChange={value => setAvoidanceRadius(dispatch, value)}
        />
    </div>)
}

export default PopulationControls;