import React, { FunctionComponent, useState, useEffect } from "react";
import classnames from "classnames";
import { toggleContainer, toggleSwitch, toggle, off, on } from "./index.scss";

type ToggleProps = {
    title: string;
    onChange(enabled: boolean): void;
    enabled: boolean;
}


const Toggle: FunctionComponent<ToggleProps> = ({
    title,
    onChange,
    enabled
}) => {

    const [toggleState, setToggleState] = useState(enabled);

    useEffect(() => {
        onChange(toggleState)
    }, [toggleState])

    return (
        <div className={toggleContainer}>
            <p><b>{title}</b></p>
            <div
                className={toggleSwitch}
                onClick={() => {
                    setToggleState(!toggleState);
                }}>
                <div className={classnames(toggle, {
                    [on]: toggleState
                })}></div>
            </div >
        </div>
    )
}

export default Toggle;