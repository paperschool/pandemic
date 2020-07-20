import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom"
import classnames from "classnames";
import {
    controls,
    hidden,
    closeIcon,
    burgerIcon,
    burgerIconHide,
    burgerIconContainer,
    titleContainer,
    aboutLink
} from "./index.scss";

import CloseIcon from "../../assets/cross.svg";
import BurgerIcon from "../../assets/burger.svg";
import PopulationControls from "./PopulationControls";
import PersonControls from "./PersonControls";

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
        <PersonControls />
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

        <Link to={"/about"} ><p className={aboutLink}>What is this?</p></Link>
    </div>)
}

export default Controls;