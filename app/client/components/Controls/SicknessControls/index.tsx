import React, { FunctionComponent, useContext, useState } from "react";
import Slider from "../../Slider";
import Acordian from "../../Acordian";

import pandemicStore from "../../../state/PandemicState/store";

import {
    setSicknessMortalityRate,
    setSicknessTotalDuration,
    setSicknessIncubation,
    setSicknessContagious
} from "../../../state/PandemicState/actions";

import {
    getSicknessMortalityRate,
    getSicknessTotalDuration,
    getSicknessIncubation,
    getSicknessContagious
} from "../../../state/PandemicState/selectors";

import {
    personControls
} from "./index.scss";

const PersonControls: FunctionComponent = () => {

    const { state, dispatch } = useContext(pandemicStore);

    const [totalDuration, setTotalDuration] = useState(0);

    return (<div className={personControls}>
        <Acordian
            title={"Disease Controls"}
        >
            <p>Control details about the disease</p>
            <Slider
                title={"Mortality Rate %"}
                min={0}
                max={1}
                step={0.01}
                value={getSicknessMortalityRate(state)}
                onChange={value => setSicknessMortalityRate(dispatch, value)}
            />
            <Slider
                title={"Incubation Period"}
                min={1}
                max={5000}
                step={1}
                value={getSicknessIncubation(state)}
                onChange={value => {
                    setSicknessIncubation(dispatch, value)
                    setSicknessTotalDuration(dispatch, getSicknessContagious(state) + value);
                }}
            />
            <Slider
                title={"Contagious Period"}
                min={1}
                max={5000}
                step={1}
                value={getSicknessContagious(state)}
                onChange={value => {
                    setSicknessContagious(dispatch, value)
                    setSicknessTotalDuration(dispatch, getSicknessIncubation(state) + value);
                }}
            />
        </Acordian>
    </div>)
}

export default PersonControls;