import React, { FunctionComponent, useState } from "react";
import classnames from "classnames";
import {
    controls,
    hidden,
    closeIcon,
    burgerIcon,
    burgerIconHide,
    burgerIconContainer,
    titleContainer
} from "./index.scss";

import CloseIcon from "../../assets/cross.svg";
import BurgerIcon from "../../assets/burger.svg";
import PopulationControls from "./PopulationControls";

const Controls: FunctionComponent = () => {

    const [hideControls, setHideControls] = useState(false);

    return (<div className={classnames(controls, {
        [hidden]: hideControls
    })}>
        <div className={titleContainer}>
            <h3>Pandemic</h3>
            <p>Control the apocalypse</p>
        </div>
        <PopulationControls />
        <CloseIcon
            className={closeIcon}
            onClick={() => {
                setHideControls(true)
            }}
        />
        <div className={classnames(burgerIconContainer, {
            [burgerIconHide]: !hideControls
        })}>
            <BurgerIcon
                className={burgerIcon}
                onClick={() => {
                    setHideControls(false)
                }}
            />
        </div>
    </div>)
}

export default Controls;