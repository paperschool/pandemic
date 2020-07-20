import React, { FunctionComponent, useState } from "react";
import classnames from "classnames";
import {
    controls,
    hidden,
    closeIcon,
    burgerIcon,
    burgerIconContainer
} from "./index.scss";

import CloseIcon from "../../assets/cross.svg";
import BurgerIcon from "../../assets/burger.svg";

const Controls: FunctionComponent = () => {

    const [hideControls, setHideControls] = useState(true);

    return (<div className={classnames(controls, {
        [hidden]: hideControls
    })}>
        <CloseIcon
            className={closeIcon}
            onClick={() => {
                setHideControls(true)
            }}
        />
        {hideControls &&
            <div className={burgerIconContainer}>
                <BurgerIcon
                    className={burgerIcon}
                    onClick={() => {
                        setHideControls(false)
                    }}
                />
            </div>
        }
    </div>)
}

export default Controls;