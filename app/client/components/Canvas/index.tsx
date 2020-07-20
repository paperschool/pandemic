import React, { FunctionComponent, createRef, useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import Animation from "./Animation";

import pandemicStore from "../../state/PandemicState/store";
import {
    getPopulation,
    getPerson,
    getPersonRadius,
    getPersonInfectionRadius
} from "../../state/PandemicState/selectors";

import { canvasContainer } from "./index.scss";

const Canvas: FunctionComponent = () => {

    const { state, dispatch } = useContext(pandemicStore);

    const [animation, setAnimation] = useState(undefined);

    const [options, setOptions] = useState({
        population: getPopulation(state),
        person: getPerson(state)
    })

    // reset simulation changes
    useEffect(() => {
        if (animation) {
            options.population = getPopulation(state);
            options.person = getPerson(state);

            animation.reset(options);
        }
    }, [getPopulation(state), getPerson(state)])

    // dynamic changes
    useEffect(() => {

    }, [])

    useEffect(() => {
        if (!animation) setAnimation(new Animation(options))
    }, [])

    return <div className={canvasContainer}>
        {animation
            ? <Sketch
                setup={animation.setup.bind(animation)}
                draw={animation.draw.bind(animation)}
                windowResized={animation.resize.bind(animation)}
            />
            : null
        }
    </div>
};

export default Canvas