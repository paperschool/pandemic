import React, { FunctionComponent, useContext } from "react";
import Slider from "../../Slider";

import pandemicStore from "../../../state/PandemicState/store";
import { setPersonRadius, setInfectionRadius, setAvoidanceRadius, setSickSpeed, setAvoidanceSpeed, setHealthySpeed, toggleAvoidanceRadius, toggleInfectionRadius } from "../../../state/PandemicState/actions";
import {
    getPersonRadius,
    getPersonInfectionRadius,
    getPersonAvoidanceRadius,
    getPersonSickSpeed,
    getPersonHealthySpeed,
    getPersonAvoidanceSpeed,
    getShowAvoidanceRadius,
    getShowInfectionRadius
} from "../../../state/PandemicState/selectors";

import {
    personControls
} from "./index.scss";
import Toggle from "../../Toggle";


const PersonControls: FunctionComponent = () => {

    const { state, dispatch } = useContext(pandemicStore);

    return (<div className={personControls}>
        <h6>Person Controls</h6>
        <p>Control details about the individuals in the system</p>
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
            onChange={value => setHealthySpeed(dispatch, value)}
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
        <Toggle
            title={"Show Infection Radius"}
            onChange={status => {
                toggleInfectionRadius(dispatch, status)
            }}
            enabled={getShowInfectionRadius(state)}
        />
        <Slider
            title={"Avoidance Speed"}
            min={1}
            max={10}
            step={0.1}
            value={getPersonAvoidanceSpeed(state)}
            onChange={value => setAvoidanceSpeed(dispatch, value)}
        />
        <Slider
            title={"Avoidance Radius"}
            min={1}
            max={100}
            step={1}
            value={getPersonAvoidanceRadius(state)}
            onChange={value => setAvoidanceRadius(dispatch, value)}
        />
        <Toggle
            title={"Show Avoidance Radius"}
            onChange={status => {
                toggleAvoidanceRadius(dispatch, status)
            }}
            enabled={getShowAvoidanceRadius(state)}
        />
    </div>)
}

export default PersonControls;